import { createCheckoutLink } from "./procedures/create-checkout-link";
import { createCustomerPortalLink } from "./procedures/create-customer-portal-link";
import { listPurchases } from "./procedures/list-purchases";
import { redeemCode, verifyCode } from "./procedures/redeem-code";
import {
	createCampaignRedemptionCodes,
	createRedemptionCode,
	createRedemptionCodesBatch,
	deleteCode,
	getCodeById,
	getRedemptionHistoryList,
	listCodes,
	revokeCode,
	updateCode,
} from "./procedures/redemption-admin";

export const paymentsRouter = {
	createCheckoutLink,
	createCustomerPortalLink,
	listPurchases,
	// Redemption code user endpoints
	redeemCode,
	verifyCode,
	// Redemption code admin endpoints
	redemptionAdmin: {
		createCode: createRedemptionCode,
		createBatch: createRedemptionCodesBatch,
		createCampaign: createCampaignRedemptionCodes,
		listCodes,
		getCodeById,
		updateCode,
		revokeCode,
		deleteCode,
		getHistory: getRedemptionHistoryList,
	},
};
