import { getSession } from "@saas/auth/lib/server";
import { PageHeader } from "@saas/shared/components/PageHeader";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

export default async function DashboardPage() {
	const session = await getSession();

	if (!session) {
		redirect("/auth/login");
	}

	const t = await getTranslations();

	return (
		<div className="container max-w-4xl pt-32 pb-16">
			<PageHeader
				title={t("app.menu.dashboard")}
				// subtitle={t("start.subtitle")}
			/>
		</div>
	);
}
