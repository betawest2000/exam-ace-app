import { getSession } from "@saas/auth/lib/server";
import { RedeemCodeForm } from "@saas/payments/components/RedeemCodeForm";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
	title: "Redeem Code",
	description: "Redeem your code to activate membership",
};

export default async function RedeemCodePage({
	searchParams,
}: {
	searchParams: Promise<{
		redirectUrl?: string;
		organizationId?: string;
		productId?: string;
	}>;
}) {
	const session = await getSession();

	if (!session) {
		redirect("/auth/login");
	}

  const { redirectUrl, organizationId, productId } = await searchParams;

	const t = await getTranslations("payments.redeemCode");

	return (
		<div className="container max-w-3xl pt-32 pb-16">
			<div className="mb-4 text-center">
				<div className="space-y-2">
					<h1 className="text-3xl font-bold tracking-tight">
						{t("title")}
					</h1>
					<p className="text-muted-foreground">{t("description")}</p>
				</div>
			</div>

      <RedeemCodeForm
        redirectUrl={redirectUrl}
        organizationId={organizationId}
        productId={productId}
      />
		</div>
	);
}
