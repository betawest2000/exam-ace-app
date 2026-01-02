import type { Difficulty, Question } from "@marketing/questions/types";
import { Button } from "@ui/components/button";
import { ArrowRight, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

export interface QuestionItemProps extends Question {
	href: string;
	languages: readonly ReactNode[];
	completedCount?: string;
	isCompleted?: boolean;
	onToggleComplete?: () => void;
	className?: string;
}

export function QuestionItem({
	name,
	href,
	description,
	category,
	difficulty,
	languages,
	completedCount,
	isPremium = false,
	isCompleted = false,
	onToggleComplete,
	className,
}: QuestionItemProps) {
	const t = useTranslations();
	const difficultyColors = {
		easy: "text-green-600",
		medium: "text-[#fbbf24]",
		hard: "text-destructive",
	} as Record<Difficulty, string>;

	return (
		<li
			className={`group relative focus-within:ring-primary focus-within:ring-2 focus-within:ring-inset [&:has(.progress-chip:focus)]:ring-0 transition-colors bg-card hover:bg-accent ${className || ""}`}
		>
			<div className="flex gap-x-4 px-6 py-5 md:py-4 isolate">
				{/* Complete button */}
				<div className="flex items-center justify-center z-1">
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
				</div>

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
							{name}
						</a>
						{isPremium && (
							<span className="relative inline-flex items-center rounded-full px-2 text-xs gap-1 bg-[#fbbf24] dark:bg-[#fbbf24] border border-[#fbbf24] dark:border-[#fbbf24] py-px">
								<svg
									stroke="currentColor"
									fill="currentColor"
									strokeWidth="0"
									viewBox="0 0 24 24"
									aria-hidden="true"
									className="shrink-0 text-foreground -ms-0.5 size-3"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M11.9996 0.5L16.2256 6.68342L23.4123 8.7918L18.8374 14.7217L19.053 22.2082L11.9996 19.6897L4.94617 22.2082L5.16179 14.7217L0.586914 8.7918L7.7736 6.68342L11.9996 0.5ZM9.99959 12H7.99959C7.99959 14.2091 9.79045 16 11.9996 16C14.1418 16 15.8907 14.316 15.9947 12.1996L15.9996 12H13.9996C13.9996 13.1046 13.1042 14 11.9996 14C10.9452 14 10.0814 13.1841 10.0051 12.1493L9.99959 12Z" />
								</svg>
								<span className="whitespace-nowrap font-medium text-xs text-foreground">
									{t(
										"common.practiceMenu.questionItem.premium",
									)}
								</span>
							</span>
						)}
					</span>

					<span className="text-muted-foreground text-sm mt-2 block">
						{description}
					</span>

					{/* Metadata */}
					<div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3.5 relative z-10">
						{/* Category */}
						<span className="inline-flex">
							<button type="button">
								<span className="sr-only">
									{t(
										`common.practiceMenu.questionItem.category.${category}`,
									)}
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
										<path d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM13.3344 16.055C14.0531 16.6343 14.7717 16.9203 15.4904 16.913C15.9304 16.913 16.2677 16.8323 16.5024 16.671C16.7297 16.517 16.8434 16.297 16.8434 16.011C16.8434 15.7177 16.7297 15.4683 16.5024 15.263C16.2677 15.0577 15.8241 14.8523 15.1714 14.647C14.3867 14.4197 13.7817 14.1263 13.3564 13.767C12.9384 13.4077 12.7257 12.9053 12.7184 12.26C12.7184 11.6513 12.9824 11.1417 13.5104 10.731C14.0237 10.3203 14.6801 10.115 15.4794 10.115C16.5941 10.115 17.4887 10.3863 18.1634 10.929L17.3934 12.128C17.1221 11.9153 16.8104 11.7613 16.4584 11.666C16.1064 11.556 15.7911 11.501 15.5124 11.501C15.1311 11.501 14.8267 11.5707 14.5994 11.71C14.3721 11.8493 14.2584 12.0327 14.2584 12.26C14.2584 12.5093 14.3977 12.722 14.6764 12.898C14.9551 13.0667 15.4317 13.2537 16.1064 13.459C16.9204 13.701 17.4997 14.0237 17.8444 14.427C18.1891 14.8303 18.3614 15.3437 18.3614 15.967C18.3614 16.605 18.1157 17.155 17.6244 17.617C17.1404 18.0717 16.4364 18.31 15.5124 18.332C14.3024 18.332 13.2904 17.969 12.4764 17.243L13.3344 16.055ZM7.80405 16.693C8.03872 16.8397 8.32105 16.913 8.65105 16.913C8.99572 16.913 9.28172 16.814 9.50905 16.616C9.73639 16.4107 9.85005 16.055 9.85005 15.549V10.247H11.3351V15.835C11.3131 16.7003 11.0637 17.3237 10.5871 17.705C10.3157 17.9323 10.0187 18.0937 9.69605 18.189C9.37339 18.2843 9.06172 18.332 8.76105 18.332C8.21105 18.332 7.72339 18.2367 7.29805 18.046C6.84339 17.8407 6.46205 17.4777 6.15405 16.957L7.18805 16.11C7.37872 16.3667 7.58405 16.561 7.80405 16.693Z" />
									</svg>
									<span className="text-xs whitespace-nowrap text-muted-foreground">
										{t(
											`common.practiceMenu.questionItem.category.${category}`,
										)}
									</span>
								</div>
							</button>
						</span>

						{/* Difficulty */}
						<span className="inline-flex">
							<button type="button">
								<span className="sr-only">
									{t(
										"common.practiceMenu.questionItem.difficulty",
									)}
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
										{t(`question.difficulty.${difficulty}`)}
									</span>
								</div>
							</button>
						</span>

						{/* Languages */}
						{languages.length > 0 && (
							<div className="flex items-center gap-x-1.5">
								<span className="sr-only">
									{t(
										"common.practiceMenu.questionItem.languages",
									)}
								</span>
								<div className="flex items-center gap-x-2">
									{languages}
								</div>
							</div>
						)}

						{/* Completed count */}
						<button type="button">
							<span className="sr-only">
								{t(
									"common.practiceMenu.questionItem.usersCompleted",
								)}
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
										"common.practiceMenu.questionItem.completedCount",
										{
											count: completedCount ?? "0",
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
