import { ORPCError } from "@orpc/client";
import { logger } from "@repo/logs";
import { redeemMembershipCode, verifyRedemptionCode } from "@repo/payments";
import { z } from "zod";
import { protectedProcedure } from "../../../orpc/procedures";

export const redeemCode = protectedProcedure
	.route({
		method: "POST",
		path: "/payments/redeem-code",
		tags: ["Payments"],
		summary: "Redeem code",
		description: "Redeem a code to activate membership",
	})
	.input(
		z.object({
			code: z.string().min(1, "Redemption code is required"),
			organizationId: z.string().optional(),
		}),
	)
	.handler(
		async ({
			input: { code, organizationId },
			context: { user, session },
		}) => {
			// Get IP and user agent from request if available
			const ipAddress = session?.ipAddress || undefined;
			const userAgent = session?.userAgent || undefined;

			try {
				const result = await redeemMembershipCode({
					code,
					userId: organizationId ? undefined : user.id,
					organizationId,
					ipAddress,
					userAgent,
				});

				if (!result.success) {
					// Map specific error messages to appropriate error codes
					const errorMessage = result.message || "Failed to redeem code";
					
					if (errorMessage.includes("not found")) {
						throw new ORPCError("NOT_FOUND", {
							message: "The redemption code you entered was not found. Please check the code and try again.",
						});
					}
					
					if (errorMessage.includes("expired")) {
						throw new ORPCError("BAD_REQUEST", {
							message: "This redemption code has expired.",
						});
					}
					
					if (errorMessage.includes("revoked")) {
						throw new ORPCError("BAD_REQUEST", {
							message: "This redemption code has been revoked.",
						});
					}
					
					if (errorMessage.includes("already been redeemed") || errorMessage.includes("maximum number")) {
						throw new ORPCError("BAD_REQUEST", {
							message: "This redemption code has already been used the maximum number of times.",
						});
					}

					// Default error
					throw new ORPCError("BAD_REQUEST", {
						message: errorMessage,
					});
				}

				return {
					success: true,
					purchaseId: result.purchaseId,
					message: result.message,
					expiresAt: result.expiresAt,
				};
			} catch (e) {
				logger.error(e);
				if (e instanceof ORPCError) {
					throw e;
				}
				throw new ORPCError("INTERNAL_SERVER_ERROR", {
					message: "An unexpected error occurred. Please try again later.",
				});
			}
		},
	);

export const verifyCode = protectedProcedure
	.route({
		method: "GET",
		path: "/payments/verify-code",
		tags: ["Payments"],
		summary: "Verify code",
		description: "Verify a redemption code without redeeming it",
	})
	.input(
		z.object({
			code: z.string().min(1, "Redemption code is required"),
		}),
	)
	.handler(async ({ input: { code } }) => {
		try {
			const result = await verifyRedemptionCode(code);

			return result;
		} catch (e) {
			logger.error(e);
			throw new ORPCError("INTERNAL_SERVER_ERROR");
		}
	});
