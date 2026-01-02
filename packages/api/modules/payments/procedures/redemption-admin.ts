import { ORPCError } from "@orpc/client";
import {
	deleteRedemptionCode,
	getRedemptionCodeById,
	getRedemptionHistory,
	listRedemptionCodes,
	revokeRedemptionCode,
	updateRedemptionCode,
} from "@repo/database";
import { logger } from "@repo/logs";
import {
	createCampaignCodes,
	createNewRedemptionCode,
	createRedemptionCodeBatch,
} from "@repo/payments";
import { z } from "zod";
import { adminProcedure } from "../../../orpc/procedures";

export const createRedemptionCode = adminProcedure
	.route({
		method: "POST",
		path: "/payments/redemption-admin/create-code",
		tags: ["Payments", "Admin"],
		summary: "Create redemption code",
		description: "Create a new redemption code",
	})
	.input(
		z.object({
			productId: z.string(),
			type: z.enum(["ONE_TIME", "TRIAL"]),
			subscriptionDurationDays: z.number().optional(),
			trialDurationDays: z.number().optional(),
			maxRedemptions: z.number().default(1),
			expiresAt: z.date().optional(),
			notes: z.string().optional(),
			metadata: z.record(z.string(), z.any()).optional(),
			customCode: z.string().optional(),
		}),
	)
	.handler(async ({ input, context: { user } }) => {
		try {
			const code = await createNewRedemptionCode({
				...input,
				createdBy: user.id,
			});

			return code;
		} catch (e) {
			logger.error(e);
			throw new ORPCError("INTERNAL_SERVER_ERROR");
		}
	});

export const createRedemptionCodesBatch = adminProcedure
	.route({
		method: "POST",
		path: "/payments/redemption-admin/create-batch",
		tags: ["Payments", "Admin"],
		summary: "Create redemption codes batch",
		description: "Create multiple redemption codes at once",
	})
	.input(
		z.object({
			productId: z.string(),
			type: z.enum(["ONE_TIME", "TRIAL"]),
			subscriptionDurationDays: z.number().optional(),
			trialDurationDays: z.number().optional(),
			maxRedemptions: z.number().default(1),
			expiresAt: z.date().optional(),
			notes: z.string().optional(),
			metadata: z.record(z.string(), z.any()).optional(),
			count: z.number().min(1).max(1000),
		}),
	)
	.handler(async ({ input, context: { user } }) => {
		const { count, ...options } = input;

		try {
			const codes = await createRedemptionCodeBatch(
				{
					...options,
					createdBy: user.id,
				},
				count,
			);

			return {
				count: codes.length,
				codes,
			};
		} catch (e) {
			logger.error(e);
			throw new ORPCError("INTERNAL_SERVER_ERROR");
		}
	});

export const createCampaignRedemptionCodes = adminProcedure
	.route({
		method: "POST",
		path: "/payments/redemption-admin/create-campaign",
		tags: ["Payments", "Admin"],
		summary: "Create campaign redemption codes",
		description: "Create redemption codes with custom prefix/suffix",
	})
	.input(
		z.object({
			productId: z.string(),
			type: z.enum(["ONE_TIME", "TRIAL"]),
			subscriptionDurationDays: z.number().optional(),
			trialDurationDays: z.number().optional(),
			maxRedemptions: z.number().default(1),
			expiresAt: z.date().optional(),
			notes: z.string().optional(),
			metadata: z.record(z.string(), z.any()).optional(),
			count: z.number().min(1).max(1000),
			prefix: z.string().optional(),
			suffix: z.string().optional(),
		}),
	)
	.handler(async ({ input, context: { user } }) => {
		const { count, prefix, suffix, ...options } = input;

		try {
			const codes = await createCampaignCodes(
				{
					...options,
					createdBy: user.id,
					prefix,
					suffix,
				},
				count,
			);

			return {
				count: codes.length,
				codes,
			};
		} catch (e) {
			logger.error(e);
			throw new ORPCError("INTERNAL_SERVER_ERROR");
		}
	});

export const listCodes = adminProcedure
	.route({
		method: "GET",
		path: "/payments/redemption-admin/list-codes",
		tags: ["Payments", "Admin"],
		summary: "List redemption codes",
		description: "List all redemption codes with optional filters",
	})
	.input(
		z.object({
			status: z
				.enum(["ACTIVE", "REDEEMED", "EXPIRED", "REVOKED"])
				.optional(),
			type: z.enum(["ONE_TIME", "TRIAL"]).optional(),
			includeExpired: z.boolean().optional(),
		}),
	)
	.handler(async ({ input }) => {
		try {
			const codes = await listRedemptionCodes({
				...input,
				// Optionally filter by creator
				// createdBy: user.id,
			});

			return codes;
		} catch (e) {
			logger.error(e);
			throw new ORPCError("INTERNAL_SERVER_ERROR");
		}
	});

export const getCodeById = adminProcedure
	.route({
		method: "GET",
		path: "/payments/redemption-admin/get-code",
		tags: ["Payments", "Admin"],
		summary: "Get redemption code",
		description: "Get a redemption code by ID",
	})
	.input(
		z.object({
			id: z.string(),
		}),
	)
	.handler(async ({ input: { id } }) => {
		try {
			const code = await getRedemptionCodeById(id);

			if (!code) {
				throw new ORPCError("NOT_FOUND", {
					message: "Redemption code not found",
				});
			}

			return code;
		} catch (e) {
			logger.error(e);
			if (e instanceof ORPCError) {
				throw e;
			}
			throw new ORPCError("INTERNAL_SERVER_ERROR");
		}
	});

export const updateCode = adminProcedure
	.route({
		method: "PATCH",
		path: "/payments/redemption-admin/update-code",
		tags: ["Payments", "Admin"],
		summary: "Update redemption code",
		description: "Update a redemption code",
	})
	.input(
		z.object({
			id: z.string(),
			status: z
				.enum(["ACTIVE", "REDEEMED", "EXPIRED", "REVOKED"])
				.optional(),
			maxRedemptions: z.number().optional(),
			expiresAt: z.date().nullable().optional(),
			notes: z.string().nullable().optional(),
			metadata: z.string().nullable().optional(),
		}),
	)
	.handler(async ({ input }) => {
		try {
			const code = await updateRedemptionCode(input);

			return code;
		} catch (e) {
			logger.error(e);
			throw new ORPCError("INTERNAL_SERVER_ERROR");
		}
	});

export const revokeCode = adminProcedure
	.route({
		method: "POST",
		path: "/payments/redemption-admin/revoke-code",
		tags: ["Payments", "Admin"],
		summary: "Revoke redemption code",
		description: "Revoke a redemption code",
	})
	.input(
		z.object({
			id: z.string(),
		}),
	)
	.handler(async ({ input: { id } }) => {
		try {
			const code = await revokeRedemptionCode(id);

			return code;
		} catch (e) {
			logger.error(e);
			throw new ORPCError("INTERNAL_SERVER_ERROR");
		}
	});

export const deleteCode = adminProcedure
	.route({
		method: "DELETE",
		path: "/payments/redemption-admin/delete-code",
		tags: ["Payments", "Admin"],
		summary: "Delete redemption code",
		description: "Delete a redemption code",
	})
	.input(
		z.object({
			id: z.string(),
		}),
	)
	.handler(async ({ input: { id } }) => {
		try {
			await deleteRedemptionCode(id);

			return { success: true };
		} catch (e) {
			logger.error(e);
			throw new ORPCError("INTERNAL_SERVER_ERROR");
		}
	});

export const getRedemptionHistoryList = adminProcedure
	.route({
		method: "GET",
		path: "/payments/redemption-admin/get-history",
		tags: ["Payments", "Admin"],
		summary: "Get redemption history",
		description: "Get redemption history with optional filters",
	})
	.input(
		z.object({
			redemptionCodeId: z.string().optional(),
			userId: z.string().optional(),
			organizationId: z.string().optional(),
			startDate: z.date().optional(),
			endDate: z.date().optional(),
		}),
	)
	.handler(async ({ input }) => {
		try {
			const history = await getRedemptionHistory(input);

			return history;
		} catch (e) {
			logger.error(e);
			throw new ORPCError("INTERNAL_SERVER_ERROR");
		}
	});
