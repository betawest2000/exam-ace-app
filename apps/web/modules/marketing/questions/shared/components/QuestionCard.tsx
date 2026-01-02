import { ArrowRight, MessageCircleQuestionMark } from "lucide-react";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

export interface QuestionCardProps {
	title: string;
	href: string;
	icon: ReactNode;
	questionCompleted: number;
	totalQuestions: number;
	type?: "questions" | "articles";
}

export function QuestionCard({
	title,
	href,
	icon,
	questionCompleted,
	totalQuestions,
	type = "questions",
}: QuestionCardProps) {
	const progress = (questionCompleted / totalQuestions) * 100;
	const t = useTranslations(
		"common.practiceMenu.practiceQuestionsSection.count",
	);
	const displayType = type === "articles" ? t("articles") : t("questions");

	return (
		<div className="group relative flex flex-1 flex-col gap-4 sm:flex-row sm:items-center rounded-lg px-6 py-4 transition bg-card border border-border isolate">
			<div className="flex items-center justify-center rounded-md size-10 shrink-0 bg-secondary glassbox border border-border">
				{icon}
			</div>

			<div className="flex flex-1 items-center gap-4">
				<div className="flex grow items-center gap-4">
					<div className="flex flex-1 flex-col gap-2">
						<div className="flex flex-1 flex-col gap-2">
							<span className="text-foreground text-base font-semibold">
								<a
									className="transition-colors underline-offset-[3.5px] wrap-break-word hover:underline font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring relative z-1"
									href={href}
								>
									{title}
								</a>
							</span>
						</div>

						<div className="flex flex-wrap items-center gap-x-8 gap-y-3">
							<div className="flex flex-wrap items-center gap-x-2 gap-y-3">
								<div className="flex shrink-0 items-center gap-1.5">
									<MessageCircleQuestionMark className="size-5 shrink-0 text-muted-foreground" />
									<span className="text-muted-foreground text-xs">
										{/* Not ready yet */}
										{/* <span className="text-foreground text-sm font-semibold">
											{questionCompleted}
										</span>
										/ */}{" "}
										{totalQuestions} {displayType}
									</span>
								</div>

								{/* Not ready yet */}
								<div className="w-[114px] hidden">
									<div
										aria-label={title}
										aria-valuemax={totalQuestions}
										aria-valuemin={0}
										aria-valuenow={questionCompleted}
										className="w-full rounded-full min-w-16 overflow-hidden bg-muted h-1.5"
										role="progressbar"
									>
										<div
											className="h-full rounded-full transition-[width] bg-[linear-gradient(90deg,#E9FE7C_0%,#95F464_100%)]"
											style={{ width: `${progress}%` }}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					<ArrowRight className="size-6 shrink-0 transition-colors text-muted-foreground group-hover:text-foreground" />
				</div>

				{/** biome-ignore lint/a11y/useAnchorContent: <explanation> */}
				<a
					className="transition-colors underline-offset-[3.5px] wrap-break-word text-foreground hover:text-primary underline dark:no-underline dark:hover:underline font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring absolute inset-0"
					href={href}
				/>
			</div>
		</div>
	);
}
