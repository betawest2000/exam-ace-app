import type { QuestionStats } from "@marketing/questions/types";
import { config } from "@repo/config";
import { getOrganizationList, getSession } from "@saas/auth/lib/server";
import { PageHeader } from "@saas/shared/components/PageHeader";
import UserStart from "@saas/start/UserStart";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

export default async function AppStartPage() {
	const session = await getSession();

	// if (!session) {
	// 	redirect("/auth/login");
	// }

	const organizations = session ? await getOrganizationList() : [];

	if (
		config.organizations.enable &&
		config.organizations.requireOrganization
	) {
		const organization =
			organizations.find(
				(org) => org.id === session?.session.activeOrganizationId,
			) || organizations[0];

		if (!organization) {
			redirect("/new-organization");
		}

		redirect(`/app/${organization.slug}`);
	}

	const t = await getTranslations();

	const questionStats = {
		byCategory: {
			javascript: 0,
			algorithms: 0,
			"user-interface": 0,
			"system-design": 0,
			quiz: 0,
			behavioral: 0,
		},
		byCompany: {
			Google: 12,
			Facebook: 10,
			Amazon: 8,
			Netflix: 5,
			Microsoft: 7,
		},
	} as QuestionStats;

	return (
		<div className="">
			<PageHeader
				title={t("start.welcome", { name: session?.user.name ?? "" })}
				subtitle={t("start.subtitle")}
			/>

			<UserStart questionStats={questionStats} />
		</div>
	);
}
