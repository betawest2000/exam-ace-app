import { CompanyGuide } from "@marketing/questions/shared/components/CompanyGuide";
import { PracticeQuestions } from "@marketing/questions/shared/components/PracticeQuestions";
import type { QuestionStats } from "@marketing/questions/types";
import { config } from "@repo/config";
import { OrganizationsGrid } from "@saas/organizations/components/OrganizationsGrid";
import { Separator } from "@shared/components/Seperator";
import { Card } from "@ui/components/card";

export default function UserStart({
	questionStats,
}: {
	questionStats: QuestionStats;
}) {
	return (
		<div className="flex flex-col gap-12">
			{config.organizations.enable && <OrganizationsGrid />}

			<Card className="border-0">
				{/* <div className="flex h-64 items-center justify-center p-8 text-foreground/60">
					Place your content here...
				</div> */}
				<PracticeQuestions
					jsFunctionsCount={questionStats.byCategory.javascript}
					algoCodingCount={questionStats.byCategory.algorithms}
					userInterfaceCodingCount={
						questionStats.byCategory["user-interface"]
					}
					frontendSystemDesignCount={
						questionStats.byCategory["system-design"]
					}
					quizCount={questionStats.byCategory.quiz}
					behavioralGuidesCount={questionStats.byCategory.behavioral}
				/>
			</Card>

			<Separator />

			<Card className="border-0">
				{/* <div className="flex h-64 items-center justify-center p-8 text-foreground/60">
					Place your content here...
				</div> */}
				<CompanyGuide questionStats={questionStats.byCompany} />
			</Card>
		</div>
	);
}
