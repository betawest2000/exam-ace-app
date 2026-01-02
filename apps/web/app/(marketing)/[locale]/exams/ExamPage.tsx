"use client";

import type { ExamItemListProps } from "@marketing/exams/components/ExamItemList";
import { ExamListPanel } from "@marketing/exams/components/ExamListPanel";
import { BadgeCheck, CircleFadingArrowUp, Save } from "lucide-react";
import { useTranslations } from "next-intl";

interface ExamPageProps {
	title: string;
	exams: ExamItemListProps["items"];
}

export function ExamPage({ title, exams }: ExamPageProps) {
	const t = useTranslations("common.examMenu");

	return (
		<div className="flex flex-col gap-y-8">
			<div className="flex flex-col gap-8">
				<div className="flex w-full flex-col items-start justify-between xl:flex-row gap-x-6 gap-y-8 sm:gap-y-6 min-[1186px]:flex-row">
					<div className="flex flex-col gap-8 xl:col-span-2">
						<div className="flex flex-col gap-3.5 xl:gap-4">
							<div className="flex items-center gap-6">
								<div className="flex items-center gap-4">
									<h1 className="text-pretty text-foreground xl:text-3xl xl:-tracking-1 text-2xl font-semibold">
										{title}
									</h1>
								</div>
							</div>
							{/* <span className="text-muted-foreground font-medium block text-sm xl:text-base max-w-2xl">
								{t("items.allPracticeQuestions.description")}
							</span> */}
						</div>
						<div className="flex flex-wrap sm:flex-row gap-x-12 gap-y-4">
							<div className="flex items-center gap-2">
								<BadgeCheck className="size-5 text-muted-foreground" />
								<span className="text-muted-foreground text-sm font-medium">
									{t("features.detailedExplanations")}
								</span>
							</div>
							<div className="flex items-center gap-2">
								<Save className="size-5 text-muted-foreground" />
								<span className="text-muted-foreground text-sm font-medium">
									{t("features.learningProgressTracking")}
								</span>
							</div>
							<div className="flex items-center gap-2">
								<CircleFadingArrowUp className="size-5 text-muted-foreground" />
								<span className="text-muted-foreground text-sm font-medium">
									{t("features.updateFrequently")}
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="h-px w-full bg-border" />
			</div>
			<div className="w-full">
				<ExamListPanel exams={exams} />
			</div>
		</div>
	);
}
