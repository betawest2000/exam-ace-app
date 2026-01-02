import type { Difficulty, Exam } from "@marketing/exams/types";
import { ArrowRight, Badge } from "lucide-react";
import { useTranslations } from "next-intl";

export interface ExamItemProps extends Exam {
	href: string;
	questionCount?: number;
	isCompleted?: boolean;
	onToggleComplete?: () => void;
	className?: string;
}

export function ExamItem({
	title,
	href,
	description,
	company,
	difficulty,
	questionCount,
	className,
}: ExamItemProps) {
	const t = useTranslations();
	const difficultyColors = {
		BEGINNER: "text-green-600",
		INTERMEDIATE: "text-[#fbbf24]",
		ADVANCED: "text-orange-600",
		EXPERT: "text-purple-600",
	} as Record<Difficulty, string>;

	return (
		<li
			className={`group relative focus-within:ring-primary focus-within:ring-2 focus-within:ring-inset [&:has(.progress-chip:focus)]:ring-0 transition-colors bg-card hover:bg-accent ${className || ""}`}
		>
			<div className="flex gap-x-4 px-6 py-5 md:py-4 isolate">
				{/* Complete button */}
				{/* <div className="flex items-center justify-center z-1">
					<Button
						aria-label={t(
							"common.practiceMenu.questionItem.markComplete",
						)}
						className={`inline-flex items-center justify-center rounded-full transition-colors border size-8 text-sm font-semibold progress-chip focus:ring-primary focus:ring-2 ${
							isCompleted
								? "bg-green-600 border-green-600 text-white hover:bg-secondary hover:border-secondary hover:text-muted-foreground"
								: "bg-secondary border-border text-muted-foreground hover:text-green-600"
						}`}
						onClick={onToggleComplete}
					>
						<Check className="shrink-0 size-5" />
					</Button>
				</div> */}

				{/* Content */}
				<div className="grow">
					<span className="text-foreground text-sm font-semibold inline-flex flex-wrap items-center gap-x-2 gap-y-3">
						<a
							className="transition-colors underline-offset-[3.5px] wrap-break-word font-medium focus:outline-none"
							href={href}
						>
							<span
								aria-hidden="true"
								className="absolute inset-0"
							/>
							{title}
						</a>
					</span>

					<span className="text-muted-foreground text-sm mt-2 block">
						{description}
					</span>

					{/* Metadata */}
					<div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3.5 relative z-10">
						{/* Company */}
						{company && (
							<span className="inline-flex">
								<button type="button">
									<span className="sr-only">
										{t(
											`common.examMenu.companies.${company.toLocaleLowerCase()}`,
										)}
									</span>
									<div className="flex items-center gap-x-1.5">
										<Badge className="size-4 shrink-0 text-muted-foreground" />
										<span className="text-xs whitespace-nowrap text-muted-foreground">
											{t(
												`common.examMenu.companies.${company.toLocaleLowerCase()}`,
											)}
										</span>
									</div>
								</button>
							</span>
						)}

						{/* Difficulty */}
						<span className="inline-flex">
							<button type="button">
								<span className="sr-only">
									{t("common.examMenu.difficulty.title")}
								</span>
								<div className="flex items-center gap-x-1.5">
									<svg
										stroke="currentColor"
										fill="currentColor"
										strokeWidth="0"
										viewBox="0 0 24 24"
										aria-hidden="true"
										className="size-5 shrink-0 text-muted-foreground"
										height="1em"
										width="1em"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M12 23C16.1421 23 19.5 19.6421 19.5 15.5C19.5 14.6345 19.2697 13.8032 19 13.0296C17.3333 14.6765 16.0667 15.5 15.2 15.5C19.1954 8.5 17 5.5 11 1.5C11.5 6.49951 8.20403 8.77375 6.86179 10.0366C5.40786 11.4045 4.5 13.3462 4.5 15.5C4.5 19.6421 7.85786 23 12 23ZM12.7094 5.23498C15.9511 7.98528 15.9666 10.1223 13.463 14.5086C12.702 15.8419 13.6648 17.5 15.2 17.5C15.8884 17.5 16.5841 17.2992 17.3189 16.9051C16.6979 19.262 14.5519 21 12 21C8.96243 21 6.5 18.5376 6.5 15.5C6.5 13.9608 7.13279 12.5276 8.23225 11.4932C8.35826 11.3747 8.99749 10.8081 9.02477 10.7836C9.44862 10.4021 9.7978 10.0663 10.1429 9.69677C11.3733 8.37932 12.2571 6.91631 12.7094 5.23498Z" />
									</svg>
									<span
										className={`text-xs ${difficultyColors[difficulty]}`}
									>
										{t(
											`common.examMenu.difficulty.${difficulty.toLowerCase()}`,
										)}
									</span>
								</div>
							</button>
						</span>

						{/* Question count */}
						<button type="button">
							<span className="sr-only">
								{t("common.examMenu.examItem.countQuestions")}
							</span>
							<div className="flex items-center gap-x-1.5">
								<svg
									stroke="currentColor"
									fill="currentColor"
									strokeWidth="0"
									viewBox="0 0 24 24"
									aria-hidden="true"
									className="size-5 shrink-0 text-muted-foreground"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" />
								</svg>
								<span className="text-xs whitespace-nowrap text-muted-foreground">
									{t(
										"common.examMenu.examItem.questionCount",
										{
											count: questionCount ?? "0",
										},
									)}
								</span>
							</div>
						</button>
					</div>
				</div>

				{/* Arrow */}
				<div className="flex items-center justify-center">
					<ArrowRight className="size-6 shrink-0 text-muted-foreground group-hover:text-foreground" />
				</div>
			</div>
		</li>
	);
}
