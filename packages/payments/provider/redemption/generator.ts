import { createRedemptionCode } from "@repo/database";
import { customAlphabet } from "nanoid";

/**
 * Generate a redemption code string
 * Format: XXXX-XXXX-XXXX (12 characters, uppercase alphanumeric, no ambiguous characters)
 */
export function generateCodeString(): string {
	// Remove ambiguous characters: 0, O, I, 1, l
	const alphabet =
		"0123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz";
	const nanoid = customAlphabet(alphabet, 8);

	return `${nanoid()}${nanoid()}${nanoid()}${nanoid()}`;
}

/**
 * Options for creating a redemption code
 */
export interface CreateRedemptionCodeOptions {
	productId: string;
	type: "ONE_TIME" | "TRIAL";
	subscriptionDurationDays?: number;
	trialDurationDays?: number;
	maxRedemptions?: number;
	expiresAt?: Date;
	createdBy?: string;
	notes?: string;
	metadata?: Record<string, any>;
	customCode?: string; // Allow custom codes for special cases
}

/**
 * Create a new redemption code
 */
export async function createNewRedemptionCode(
	options: CreateRedemptionCodeOptions,
) {
	const {
		productId,
		type,
		subscriptionDurationDays,
		trialDurationDays,
		maxRedemptions = 1,
		expiresAt,
		createdBy,
		notes,
		metadata,
		customCode,
	} = options;

	// Validate input
	if (type === "ONE_TIME" && !subscriptionDurationDays) {
		throw new Error(
			"subscriptionDurationDays is required for SUBSCRIPTION type",
		);
	}

	if (type === "TRIAL" && !trialDurationDays) {
		throw new Error("trialDurationDays is required for TRIAL type");
	}

	// Generate or use custom code
	const code = customCode || generateCodeString();

	// Create the redemption code
	const redemptionCode = await createRedemptionCode({
		code,
		type,
		productId,
		status: "ACTIVE",
		maxRedemptions,
		currentRedemptions: 0,
		subscriptionDurationDays:
			type === "ONE_TIME" ? subscriptionDurationDays : null,
		trialDurationDays: type === "TRIAL" ? trialDurationDays : null,
		expiresAt: expiresAt || null,
		createdBy: createdBy || null,
		notes: notes || null,
		metadata: metadata ? JSON.stringify(metadata) : null,
	});

	return redemptionCode;
}

/**
 * Batch create redemption codes
 */
export async function createRedemptionCodeBatch(
	options: CreateRedemptionCodeOptions,
	count: number,
): Promise<Array<Awaited<ReturnType<typeof createNewRedemptionCode>>>> {
	const codes = [];

	for (let i = 0; i < count; i++) {
		const code = await createNewRedemptionCode({
			...options,
			customCode: undefined, // Never use custom code in batch
		});
		codes.push(code);
	}

	return codes;
}

/**
 * Create codes with specific patterns for campaigns
 */
export async function createCampaignCodes(
	options: CreateRedemptionCodeOptions & {
		prefix?: string;
		suffix?: string;
	},
	count: number,
) {
	const { prefix, suffix, ...baseOptions } = options;
	const alphabet = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
	const nanoid = customAlphabet(alphabet, 8);

	const codes = [];

	for (let i = 0; i < count; i++) {
		let code = nanoid();

		if (prefix) {
			code = `${prefix}-${code}`;
		}

		if (suffix) {
			code = `${code}-${suffix}`;
		}

		const redemptionCode = await createNewRedemptionCode({
			...baseOptions,
			customCode: code,
		});

		codes.push(redemptionCode);
	}

	return codes;
}
