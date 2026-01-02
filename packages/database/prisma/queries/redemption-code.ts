import { db as prisma } from "../client";
import type { RedemptionCodeStatus, RedemptionCodeType } from "../zod";

export async function createRedemptionCode(data: {
	code: string;
	type: RedemptionCodeType;
	productId: string;
	status: RedemptionCodeStatus;
	maxRedemptions: number;
	currentRedemptions: number;
	subscriptionDurationDays?: number | null;
	trialDurationDays?: number | null;
	expiresAt?: Date | null;
	createdBy?: string | null;
	notes?: string | null;
	metadata?: string | null;
}) {
	return prisma.redemptionCode.create({
		data,
		include: {
			redemptions: true,
			creator: {
				select: {
					id: true,
					name: true,
					email: true,
				},
			},
		},
	});
}

export async function getRedemptionCodeById(id: string) {
	return prisma.redemptionCode.findUnique({
		where: { id },
		include: {
			redemptions: true,
			creator: {
				select: {
					id: true,
					name: true,
					email: true,
				},
			},
		},
	});
}

export async function getRedemptionCodeByCode(code: string) {
	return prisma.redemptionCode.findUnique({
		where: { code },
		include: {
			redemptions: true,
		},
	});
}

export async function updateRedemptionCode(data: {
	id: string;
	code?: string;
	type?: RedemptionCodeType;
	productId?: string;
	status?: RedemptionCodeStatus;
	maxRedemptions?: number;
	currentRedemptions?: number;
	subscriptionDurationDays?: number | null;
	trialDurationDays?: number | null;
	expiresAt?: Date | null;
	notes?: string | null;
	metadata?: string | null;
}) {
	const { id, ...updateData } = data;

	return prisma.redemptionCode.update({
		where: { id },
		data: updateData,
		include: {
			redemptions: true,
			creator: {
				select: {
					id: true,
					name: true,
					email: true,
				},
			},
		},
	});
}

export async function deleteRedemptionCode(id: string) {
	return prisma.redemptionCode.delete({
		where: { id },
	});
}

export async function listRedemptionCodes(filters?: {
	status?: RedemptionCodeStatus;
	type?: RedemptionCodeType;
	createdBy?: string;
	includeExpired?: boolean;
}) {
	const where: any = {};

	if (filters?.status) {
		where.status = filters.status;
	}

	if (filters?.type) {
		where.type = filters.type;
	}

	if (filters?.createdBy) {
		where.createdBy = filters.createdBy;
	}

	if (!filters?.includeExpired) {
		where.OR = [{ expiresAt: null }, { expiresAt: { gt: new Date() } }];
	}

	return prisma.redemptionCode.findMany({
		where,
		include: {
			redemptions: true,
			creator: {
				select: {
					id: true,
					name: true,
					email: true,
				},
			},
		},
		orderBy: {
			createdAt: "desc",
		},
	});
}

export async function validateRedemptionCode(code: string): Promise<{
	valid: boolean;
	reason?: string;
	redemptionCode?: Awaited<ReturnType<typeof getRedemptionCodeByCode>>;
}> {
	const redemption = await getRedemptionCodeByCode(code);

	if (!redemption) {
		return { valid: false, reason: "Code not found" };
	}

	if (redemption.status !== "ACTIVE") {
		return {
			valid: false,
			reason: `Code is ${redemption.status.toLowerCase()}`,
		};
	}

	if (redemption.expiresAt && redemption.expiresAt < new Date()) {
		// Auto-update to expired
		await updateRedemptionCode({
			id: redemption.id,
			status: "EXPIRED",
		});
		return { valid: false, reason: "Code has expired" };
	}

	if (redemption.currentRedemptions >= redemption.maxRedemptions) {
		return {
			valid: false,
			reason: "Code has reached maximum redemptions",
		};
	}

	return { valid: true, redemptionCode: redemption };
}

export async function redeemCode(data: {
	redemptionCodeId: string;
	userId?: string | null;
	organizationId?: string | null;
	purchaseId?: string | null;
	ipAddress?: string | null;
	userAgent?: string | null;
	metadata?: string | null;
}) {
	// Use transaction to ensure atomicity
	return prisma.$transaction(async (tx) => {
		// Get the redemption code with lock
		const code = await tx.redemptionCode.findUnique({
			where: { id: data.redemptionCodeId },
		});

		if (!code) {
			throw new Error("Redemption code not found");
		}

		// Validate
		if (code.status !== "ACTIVE") {
			throw new Error(`Code is ${code.status.toLowerCase()}`);
		}

		if (code.expiresAt && code.expiresAt < new Date()) {
			throw new Error("Code has expired");
		}

		if (code.currentRedemptions >= code.maxRedemptions) {
			throw new Error("Code has reached maximum redemptions");
		}

		// Increment redemption count
		const newRedemptions = code.currentRedemptions + 1;
		const newStatus: RedemptionCodeStatus =
			newRedemptions >= code.maxRedemptions ? "REDEEMED" : code.status;

		await tx.redemptionCode.update({
			where: { id: data.redemptionCodeId },
			data: {
				currentRedemptions: newRedemptions,
				status: newStatus,
			},
		});

		// Create redemption history
		const history = await tx.redemptionHistory.create({
			data,
		});

		return history;
	});
}

export async function getRedemptionHistory(filters?: {
	redemptionCodeId?: string;
	userId?: string;
	organizationId?: string;
	startDate?: Date;
	endDate?: Date;
}) {
	const where: any = {};

	if (filters?.redemptionCodeId) {
		where.redemptionCodeId = filters.redemptionCodeId;
	}

	if (filters?.userId) {
		where.userId = filters.userId;
	}

	if (filters?.organizationId) {
		where.organizationId = filters.organizationId;
	}

	if (filters?.startDate || filters?.endDate) {
		where.redeemedAt = {};
		if (filters.startDate) {
			where.redeemedAt.gte = filters.startDate;
		}
		if (filters.endDate) {
			where.redeemedAt.lt = filters.endDate;
		}
	}

	return prisma.redemptionHistory.findMany({
		where,
		include: {
			redemptionCode: true,
			user: {
				select: {
					id: true,
					name: true,
					email: true,
				},
			},
			organization: {
				select: {
					id: true,
					name: true,
				},
			},
			purchase: true,
		},
		orderBy: {
			redeemedAt: "desc",
		},
	});
}

export async function revokeRedemptionCode(id: string) {
	return updateRedemptionCode({
		id,
		status: "REVOKED",
	});
}

export async function getUserRedemptions(userId: string) {
	return getRedemptionHistory({ userId });
}

export async function getOrganizationRedemptions(organizationId: string) {
	return getRedemptionHistory({ organizationId });
}
