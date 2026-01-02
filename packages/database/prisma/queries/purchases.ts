import type { z } from "zod";
import { db } from "../client";
import type { PurchaseSchema } from "../zod";

const expirationFilter = {
	OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
};

export async function getPurchaseById(id: string, ignoreExpiry = false) {
	return db.purchase.findFirst({
		where: {
			id,
			...(ignoreExpiry ? {} : expirationFilter),
		},
	});
}

export async function getPurchasesByOrganizationId(
	organizationId: string,
	ignoreExpiry = false,
) {
	return db.purchase.findMany({
		where: {
			organizationId,
			...(ignoreExpiry ? {} : expirationFilter),
		},
	});
}

export async function getPurchasesByUserId(
	userId: string,
	productId?: string,
	ignoreExpiry = false,
) {
	return db.purchase.findMany({
		where: {
			userId,
			...(productId ? { productId } : {}),
			...(ignoreExpiry ? {} : expirationFilter),
		},
	});
}

export async function getPurchaseBySubscriptionId(subscriptionId: string) {
	return db.purchase.findFirst({
		where: {
			subscriptionId,
		},
	});
}

export async function createPurchase(
	purchase: Omit<
		z.infer<typeof PurchaseSchema>,
		"id" | "createdAt" | "updatedAt"
	>,
) {
	const created = await db.purchase.create({
		data: purchase,
	});

	return getPurchaseById(created.id);
}

export async function updatePurchase(
	purchase: Partial<
		Omit<z.infer<typeof PurchaseSchema>, "createdAt" | "updatedAt">
	> & { id: string },
) {
	const updated = await db.purchase.update({
		where: {
			id: purchase.id,
		},
		data: purchase,
	});

	return getPurchaseById(updated.id);
}

export async function deletePurchaseBySubscriptionId(subscriptionId: string) {
	await db.purchase.delete({
		where: {
			subscriptionId,
		},
	});
}
