import { config } from "@repo/config";
import {
	createPurchase,
	getPurchasesByUserId,
	getRedemptionCodeByCode,
	redeemCode,
	updatePurchase,
	validateRedemptionCode,
} from "@repo/database";
import { logger } from "@repo/logs";
import type {
	CancelSubscription,
	CreateCheckoutLink,
	CreateCustomerPortalLink,
	SetSubscriptionSeats,
	WebhookHandler,
} from "../../types";

/**
 * Redemption Code Provider
 *
 * This provider handles membership activation through redemption codes.
 * Unlike traditional payment providers, it doesn't involve actual payment processing.
 * Instead, users redeem pre-generated codes to activate their membership.
 */

export interface RedeemCodeParams {
	code: string;
	userId?: string;
	organizationId?: string;
	ipAddress?: string;
	userAgent?: string;
	metadata?: Record<string, any>;
}

/**
 * Redeem a code and create a purchase record
 */
export async function redeemMembershipCode(params: RedeemCodeParams): Promise<{
	success: boolean;
	purchaseId?: string;
	message?: string;
	expiresAt?: Date;
}> {
	const { code, userId, organizationId, ipAddress, userAgent, metadata } =
		params;

	if (!userId) {
		return {
			success: false,
			message: "The userId must be provided",
		};
	}

	// Validate the code
	const validation = await validateRedemptionCode(code);

	if (!validation.valid || !validation.redemptionCode) {
		return {
			success: false,
			message: validation.reason,
		};
	}

	const redemptionCode = validation.redemptionCode;
	let extendedDays = 0;
	if (
		redemptionCode.type === "ONE_TIME" &&
		redemptionCode.subscriptionDurationDays
	) {
		extendedDays = redemptionCode.subscriptionDurationDays;
	} else if (
		redemptionCode.type === "TRIAL" &&
		redemptionCode.trialDurationDays
	) {
		extendedDays = redemptionCode.trialDurationDays;
	} else {
		return {
			success: false,
			message: "Invalid redemption code type or missing duration",
		};
	}

	try {
		// Find existing purchase to prevent duplicate redemptions
		const purchases = await getPurchasesByUserId(
			userId || "",
			redemptionCode.productId,
			true,
		);
		const activePurchase = purchases.find((p) => p.status === "active");
		const existingPurchase = activePurchase ?? purchases[0];
		const plan = Object.values(config.payments.plans.pro.prices).find(
			(price) => price.productId === redemptionCode.productId,
		);

		if (!plan) {
			throw new Error("Invalid product associated with redemption code");
		}

		let purchaseId: string | undefined;
		let expiresAt: Date | undefined;
		if (existingPurchase) {
			purchaseId = existingPurchase.id;
			const now = new Date();
			expiresAt =
				existingPurchase.expiresAt && existingPurchase.expiresAt > now
					? existingPurchase.expiresAt
					: now;

			// Update expiration date for subscriptions or trials
			expiresAt.setDate(expiresAt.getDate() + extendedDays);
			await updatePurchase({
				id: redemptionCode.id,
				expiresAt,
			});

			logger.info("Redemption code redeemed for existing purchase", {
				code,
				userId,
				organizationId,
				purchaseId: existingPurchase.id,
			});
		} else {
			// Create purchase record first
			expiresAt = new Date();
			expiresAt.setDate(expiresAt.getDate() + extendedDays);
			const purchase = await createPurchase({
				organizationId: organizationId || null,
				userId: userId || null,
				type: "ONE_TIME",
				customerId: `redemption-${redemptionCode.id}`,
				subscriptionId: null,
				productId: redemptionCode.productId,
				status: "active",
				expiresAt,
			});

			if (!purchase) {
				throw new Error("Failed to create purchase record");
			}

			purchaseId = purchase.id;
		}

		// Record the redemption
		await redeemCode({
			redemptionCodeId: redemptionCode.id,
			userId: userId || null,
			organizationId: organizationId || null,
			purchaseId,
			ipAddress: ipAddress || null,
			userAgent: userAgent || null,
			metadata: metadata ? JSON.stringify(metadata) : null,
		});

		// Calculate expiration date for subscriptions

		logger.info("Redemption code redeemed successfully", {
			code,
			userId,
			organizationId,
			purchaseId,
		});

		return {
			success: true,
			purchaseId,
			message: "Membership activated successfully",
			expiresAt,
		};
	} catch (error) {
		logger.error("Failed to redeem code", { error, code });
		return {
			success: false,
			message:
				error instanceof Error
					? error.message
					: "Failed to redeem code",
		};
	}
}

/**
 * Verify a code without redeeming it
 */
export async function verifyRedemptionCode(code: string): Promise<{
	valid: boolean;
	reason?: string;
	details?: {
		type?: string;
		productId?: string;
		expiresAt?: Date | null;
		remainingRedemptions?: number;
	};
}> {
	const validation = await validateRedemptionCode(code);

	if (!validation.valid || !validation.redemptionCode) {
		return {
			valid: false,
			reason: validation.reason,
		};
	}

	const redemptionCode = validation.redemptionCode;

	return {
		valid: true,
		details: {
			type: redemptionCode.type,
			productId: redemptionCode.productId,
			expiresAt: redemptionCode.expiresAt,
			remainingRedemptions:
				redemptionCode.maxRedemptions -
				redemptionCode.currentRedemptions,
		},
	};
}

/**
 * Get code information (for admin purposes)
 */
export async function getCodeInfo(code: string) {
	return getRedemptionCodeByCode(code);
}

// Provider interface implementations
// These are stub implementations as redemption codes don't use traditional checkout flows

export const createCheckoutLink: CreateCheckoutLink = async (options) => {
	// For redemption codes, return a URL to the redemption page
	// The actual redemption happens on that page when user enters the code
	const { redirectUrl, organizationId, productId } = options;

	const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
	const params = new URLSearchParams();

	if (redirectUrl) {
		params.set("redirectUrl", redirectUrl);
	}

	if (organizationId) {
		params.set("organizationId", organizationId);
	}

	if (productId) {
		params.set("productId", productId);
	}

	const queryString = params.toString();
	return `${baseUrl}/redeem-code${queryString ? `?${queryString}` : ""}`;
};

export const createCustomerPortalLink: CreateCustomerPortalLink = async () => {
	// Redemption codes don't have customer portals
	// Users manage their membership through the app's settings
	throw new Error(
		"Redemption code provider does not support customer portals.",
	);
};

export const setSubscriptionSeats: SetSubscriptionSeats = async () => {
	// Seat management is not supported for redemption codes
	throw new Error(
		"Redemption code provider does not support subscription seats.",
	);
};

export const cancelSubscription: CancelSubscription = async () => {
	// Redemption code subscriptions expire automatically
	// No cancellation needed
	throw new Error(
		"Redemption code provider does not support subscription cancellation. Subscriptions expire automatically.",
	);
};

export const webhookHandler: WebhookHandler = async () => {
	// No webhooks for redemption codes
	return new Response(
		JSON.stringify({
			message: "Redemption code provider does not use webhooks",
		}),
		{
			status: 200,
			headers: { "Content-Type": "application/json" },
		},
	);
};

export * from "./generator";
