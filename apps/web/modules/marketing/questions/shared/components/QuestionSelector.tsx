"use client";

import { LocaleLink } from "@i18n/routing";
import { QuestionCategoryFilter } from "@marketing/questions/shared/components/QuestionCategoryFilter";
import type { Category, Question } from "@marketing/questions/types";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Button } from "@ui/components/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@ui/components/dialog";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from "@ui/components/dropdown-menu";
import { Input } from "@ui/components/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/components/tabs";
import { ArrowUpDown, ChevronLeft, ChevronRight, List } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useCallback, useMemo, useState } from "react";

type SortOption =
	| "default"
	| "title-asc"
	| "title-desc"
	| "difficulty-asc"
	| "difficulty-desc"
	| "importance-high-low"
	| "importance-low-high"
	| "duration-low-high"
	| "duration-high-low"
	| "created-newest"
	| "created-oldest";

type TabType = "coding" | "system-design" | "quiz";

interface QuestionSelectorProps {
	questions: Question[];
	questionId: string;
	category: string;
}

export function QuestionSelector({
	questions,
	questionId,
	category,
}: QuestionSelectorProps) {
	const [open, setOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [sortOption, setSortOption] = useState<SortOption>("default");
	const [activeTab, setActiveTab] = useState<TabType>("coding");
	const [selectedCategories, setSelectedCategories] = useState<Category[]>(
		[],
	);
	const t = useTranslations();

	const handleSortChange = useCallback((value: string) => {
		const option = value as SortOption;
		setSortOption(option);
	}, []);

	const handleTabChange = useCallback((value: string) => {
		const tab = value as TabType;
		setActiveTab(tab);
	}, []);

	const handleCategoryChange = useCallback((categoryIds: Category[]) => {
		setSelectedCategories(categoryIds);
	}, []);

	const filterBySearch = useCallback((items: Question[], query: string) => {
		if (!query.trim()) {
			return items;
		}
		const lowerQuery = query.toLowerCase();
		return items.filter(
			(item) =>
				item.name.toLowerCase().includes(lowerQuery) ||
				item.description.toLowerCase().includes(lowerQuery) ||
				item.category.toLowerCase().includes(lowerQuery),
		);
	}, []);

	const filterByCategory = useCallback(
		(items: Question[], categories: Category[]) => {
			if (categories.length === 0) {
				return items;
			}
			return items.filter((item) =>
				categories.includes(item.category as Category),
			);
		},
		[],
	);

	const sortQuestions = useCallback(
		(items: Question[], option: SortOption) => {
			if (option === "default") {
				return items;
			}

			const itemsCopy = [...items];

			switch (option) {
				case "title-asc":
					return itemsCopy.sort((a, b) =>
						a.name.localeCompare(b.name),
					);
				case "title-desc":
					return itemsCopy.sort((a, b) =>
						b.name.localeCompare(a.name),
					);
				case "difficulty-asc": {
					const difficultyOrder = { easy: 1, medium: 2, hard: 3 };
					return itemsCopy.sort(
						(a, b) =>
							difficultyOrder[a.difficulty] -
							difficultyOrder[b.difficulty],
					);
				}
				case "difficulty-desc": {
					const difficultyOrder = { easy: 1, medium: 2, hard: 3 };
					return itemsCopy.sort(
						(a, b) =>
							difficultyOrder[b.difficulty] -
							difficultyOrder[a.difficulty],
					);
				}
				case "created-newest":
					return itemsCopy.sort((a, b) => {
						const dateA = a.createdAt
							? new Date(a.createdAt).getTime()
							: 0;
						const dateB = b.createdAt
							? new Date(b.createdAt).getTime()
							: 0;
						return dateB - dateA;
					});
				case "created-oldest":
					return itemsCopy.sort((a, b) => {
						const dateA = a.createdAt
							? new Date(a.createdAt).getTime()
							: 0;
						const dateB = b.createdAt
							? new Date(b.createdAt).getTime()
							: 0;
						return dateA - dateB;
					});
				default:
					return itemsCopy;
			}
		},
		[],
	);

	const codingQuestions = useMemo(
		() => questions.filter((q) => q.category === "javascript"),
		[questions],
	);

	const systemDesignQuestions = useMemo(
		() => questions.filter((q) => q.category === "system-design"),
		[questions],
	);

	const quizQuestions = useMemo(
		() => questions.filter((q) => q.category === "algorithms"),
		[questions],
	);

	const filteredCodingQuestions = useMemo(() => {
		let filtered = codingQuestions;
		filtered = filterByCategory(filtered, selectedCategories);
		filtered = filterBySearch(filtered, searchQuery);
		return sortQuestions(filtered, sortOption);
	}, [
		codingQuestions,
		selectedCategories,
		searchQuery,
		sortOption,
		filterByCategory,
		filterBySearch,
		sortQuestions,
	]);

	const filteredSystemDesignQuestions = useMemo(() => {
		let filtered = systemDesignQuestions;
		filtered = filterBySearch(filtered, searchQuery);
		return sortQuestions(filtered, sortOption);
	}, [
		systemDesignQuestions,
		searchQuery,
		sortOption,
		filterBySearch,
		sortQuestions,
	]);

	const filteredQuizQuestions = useMemo(() => {
		let filtered = quizQuestions;
		filtered = filterBySearch(filtered, searchQuery);
		return sortQuestions(filtered, sortOption);
	}, [quizQuestions, searchQuery, sortOption, filterBySearch, sortQuestions]);

	const currentTabQuestions = useMemo(() => {
		switch (activeTab) {
			case "coding":
				return filteredCodingQuestions;
			case "system-design":
				return filteredSystemDesignQuestions;
			case "quiz":
				return filteredQuizQuestions;
			default:
				return filteredCodingQuestions;
		}
	}, [
		activeTab,
		filteredCodingQuestions,
		filteredSystemDesignQuestions,
		filteredQuizQuestions,
	]);

	const filteredQuestions = currentTabQuestions;

	const currentIndex = React.useMemo(() => {
		return filteredQuestions.findIndex(
			(q) => q.id === questionId && q.category === category,
		);
	}, [filteredQuestions, questionId, category]);

	const handleOpenChange = React.useCallback(
		(newOpen: boolean) => {
			if (!newOpen) {
				// If closing the dialog, check if there are no filtered questions
				// and prevent closing
				if (filteredQuestions.length === 0) {
					return;
				}

				if (currentIndex === -1 && filteredQuestions.length > 0) {
					// Redirect to the first question if current question is not found
					window.location.href = `/questions/${filteredQuestions[0].category}/${filteredQuestions[0].id}`;
				}
			}
			setOpen(newOpen);
		},
		[filteredQuestions.length, currentIndex],
	);

	// React.useEffect(() => {
	// 	if (!open && currentIndex === -1 && filteredQuestions.length > 0) {
	// 		// Redirect to the first question if current question is not found
	// 		window.location.href = `/questions/${filteredQuestions[0].category}/${filteredQuestions[0].id}`;
	// 	}
	// }, [open, currentIndex, filteredQuestions.length]);

	return (
		<div className="flex items-center gap-2">
			<Button variant="ghost" size="icon" disabled={currentIndex <= 0}>
				{currentIndex <= 0 ? (
					<ChevronLeft className="size-4" />
				) : (
					<LocaleLink
						href={`/questions/${filteredQuestions[currentIndex - 1].category}/${filteredQuestions[currentIndex - 1].id}`}
						className="block hover:no-underline active:no-underline"
					>
						<ChevronLeft className="size-4" />
					</LocaleLink>
				)}
			</Button>

			<Dialog open={open} onOpenChange={handleOpenChange}>
				<DialogTrigger asChild>
					<Button
						variant="outline"
						className="min-w-[200px] flex justify-between gap-2"
					>
						<span className="flex items-center gap-2 text-foreground">
							<List className="h-4 w-4" />
							{t("question.label.allPracticeQuestions")}
						</span>
						<span className="text-muted-foreground">
							{currentIndex + 1}/{questions.length}
						</span>
					</Button>
				</DialogTrigger>
				<DialogContent className="max-w-[600px] h-screen px-4 gap-0 translate-x-0! translate-y-0! left-0 top-0 flex flex-col">
					{/* Header with close button */}
					<DialogHeader>
						<DialogTitle>
							<Button
								variant="outline"
								className="min-w-[100px] bg-background flex p-0 gap-2"
							>
								<List className="h-4 w-4 text-foreground" />
								<span className="text-foreground text-sm font-medium">
									{t("question.label.allPracticeQuestions")}
								</span>
							</Button>
						</DialogTitle>
					</DialogHeader>
					<DialogDescription>{""}</DialogDescription>

					<Tabs
						value={activeTab}
						onValueChange={handleTabChange}
						className="flex flex-col flex-1 overflow-hidden"
					>
						<div className="flex flex-col gap-3 py-3 border-b">
							{/* Search and sort */}
							<div className="flex items-center gap-2">
								<Input
									placeholder={t(
										"common.practiceMenu.filters.inputPlaceholder",
									)}
									value={searchQuery}
									onChange={(e) =>
										setSearchQuery(e.target.value)
									}
									className="flex-1 text-xs border-border"
								/>
								<DropdownMenu modal={false}>
									<DropdownMenuTrigger asChild>
										<Button
											variant="outline"
											size="sm"
											className="h-8 text-xs text-foreground border border-border"
										>
											<ArrowUpDown className="h-4 w-4" />
											{t(
												"common.practiceMenu.sort.label",
											)}
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent
										align="end"
										className="w-56"
									>
										<DropdownMenuRadioGroup
											value={sortOption}
											onValueChange={handleSortChange}
										>
											<DropdownMenuRadioItem value="default">
												{t(
													"common.practiceMenu.sort.options.default",
												)}
											</DropdownMenuRadioItem>
											<DropdownMenuRadioItem value="title-asc">
												{t(
													"common.practiceMenu.sort.options.titleAsc",
												)}
											</DropdownMenuRadioItem>
											<DropdownMenuRadioItem value="title-desc">
												{t(
													"common.practiceMenu.sort.options.titleDesc",
												)}
											</DropdownMenuRadioItem>
											<DropdownMenuRadioItem value="difficulty-asc">
												{t(
													"common.practiceMenu.sort.options.difficultyAsc",
												)}
											</DropdownMenuRadioItem>
											<DropdownMenuRadioItem value="difficulty-desc">
												{t(
													"common.practiceMenu.sort.options.difficultyDesc",
												)}
											</DropdownMenuRadioItem>
											<DropdownMenuRadioItem value="importance-high-low">
												{t(
													"common.practiceMenu.sort.options.importanceHighLow",
												)}
											</DropdownMenuRadioItem>
											<DropdownMenuRadioItem value="importance-low-high">
												{t(
													"common.practiceMenu.sort.options.importanceLowHigh",
												)}
											</DropdownMenuRadioItem>
											<DropdownMenuRadioItem value="duration-low-high">
												{t(
													"common.practiceMenu.sort.options.durationLowHigh",
												)}
											</DropdownMenuRadioItem>
											<DropdownMenuRadioItem value="duration-high-low">
												{t(
													"common.practiceMenu.sort.options.durationHighLow",
												)}
											</DropdownMenuRadioItem>
											<DropdownMenuRadioItem value="created-newest">
												{t(
													"common.practiceMenu.sort.options.createdNewest",
												)}
											</DropdownMenuRadioItem>
											<DropdownMenuRadioItem value="created-oldest">
												{t(
													"common.practiceMenu.sort.options.createdOldest",
												)}
											</DropdownMenuRadioItem>
										</DropdownMenuRadioGroup>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
							{/* Tabs */}
							<TabsList className="gap-2 w-full border-b justify-start h-auto p-0 bg-transparent">
								<TabsTrigger
									value="coding"
									className="cursor-pointer"
								>
									{t("common.practiceMenu.tags.coding")}
								</TabsTrigger>
								<TabsTrigger
									value="system-design"
									className="cursor-pointer"
								>
									{t("common.practiceMenu.tags.systemDesign")}
								</TabsTrigger>
								<TabsTrigger
									value="quiz"
									className="cursor-pointer"
								>
									{t("common.practiceMenu.tags.quiz")}
								</TabsTrigger>
							</TabsList>
						</div>

						<TabsContent
							value="coding"
							className="flex flex-col flex-1 overflow-hidden mt-0"
						>
							{/* Categories - only for coding tab */}
							<div className="py-2 border-b">
								<QuestionCategoryFilter
									onCategoryChange={handleCategoryChange}
								/>
							</div>

							{/* Questions list */}
							<div className="flex-1 overflow-y-auto">
								<div className="relative size-full">
									<div className="divide-y divide-border">
										{/* Header */}
										<div className="flex gap-x-4 max-sm:hidden px-6 py-3">
											<span className="text-muted-foreground text-xs grow">
												Name
											</span>
											<span className="text-muted-foreground text-xs w-[106px]">
												Format
											</span>
											<span className="text-muted-foreground text-xs w-[68px]">
												Difficulty
											</span>
										</div>

										{/* Question items */}
										{filteredQuestions.map((question) => (
											<div
												key={question.id}
												className={`group relative flex px-6 gap-4 transition-colors hover:bg-accent ${
													question.id ===
														questionId &&
													question.category ===
														category
														? "bg-accent"
														: ""
												}`}
											>
												<LocaleLink
													href={`/questions/${question.category}/${question.id}`}
													className="grow py-3 no-underline"
												>
													<div className="flex items-center gap-x-3">
														{/* Completion status */}
														<div className="flex items-center justify-center z-1">
															<button
																aria-label="Not completed"
																className="inline-flex items-center justify-center rounded-full transition-colors border border-border size-6 bg-background text-sm font-semibold text-muted-foreground"
																type="button"
															/>
														</div>

														{/* Content */}
														<div className="flex grow items-center gap-x-4 gap-y-1.5 max-sm:flex-wrap">
															<div className="flex grow items-center gap-x-2 max-sm:w-full">
																<span className="text-foreground text-xs font-medium">
																	{
																		question.name
																	}
																</span>
																{question.isPremium && (
																	<span className="relative inline-flex items-center rounded-full px-1.5 text-xs gap-1 bg-primary border border-primary py-px">
																		<span className="whitespace-nowrap text-xs font-semibold text-primary-foreground">
																			Premium
																		</span>
																	</span>
																)}
															</div>

															<div className="flex gap-x-4">
																{/* Format */}
																<div className="sm:w-[106px]">
																	<div className="flex items-center gap-x-1.5">
																		<span className="text-xs whitespace-nowrap text-muted-foreground">
																			{
																				question.category
																			}
																		</span>
																	</div>
																</div>

																{/* Difficulty */}
																<div className="sm:w-[68px]">
																	<div className="flex items-center gap-x-1.5">
																		<span
																			className={`text-xs ${
																				question.difficulty ===
																				"easy"
																					? "text-green-600"
																					: question.difficulty ===
																							"medium"
																						? "text-yellow-500"
																						: "text-red-600"
																			}`}
																		>
																			{
																				question.difficulty
																			}
																		</span>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</LocaleLink>
											</div>
										))}
									</div>
								</div>
							</div>
						</TabsContent>

						<TabsContent
							value="system-design"
							className="flex-1 overflow-y-auto mt-0"
						>
							<div className="relative size-full">
								<div className="divide-y divide-border">
									{/* Header */}
									<div className="flex gap-x-4 max-sm:hidden px-6 py-3">
										<span className="text-muted-foreground text-xs grow">
											Name
										</span>
										<span className="text-muted-foreground text-xs w-[106px]">
											Format
										</span>
										<span className="text-muted-foreground text-xs w-[68px]">
											Difficulty
										</span>
									</div>

									{/* Question items */}
									{filteredQuestions.map((question) => (
										<div
											key={question.id}
											className={`group relative flex px-6 gap-4 transition-colors hover:bg-accent ${
												question.id === questionId &&
												question.category === category
													? "bg-accent"
													: ""
											}`}
										>
											<LocaleLink
												href={`/questions/${question.category}/${question.id}`}
												className="grow py-3 no-underline"
											>
												<div className="flex items-center gap-x-3">
													{/* Completion status */}
													<div className="flex items-center justify-center z-1">
														<button
															aria-label="Not completed"
															className="inline-flex items-center justify-center rounded-full transition-colors border border-border size-6 bg-background text-sm font-semibold text-muted-foreground"
															type="button"
														/>
													</div>

													{/* Content */}
													<div className="flex grow items-center gap-x-4 gap-y-1.5 max-sm:flex-wrap">
														<div className="flex grow items-center gap-x-2 max-sm:w-full">
															<span className="text-foreground text-xs font-medium">
																{question.name}
															</span>
															{question.isPremium && (
																<span className="relative inline-flex items-center rounded-full px-1.5 text-xs gap-1 bg-primary border border-primary py-px">
																	<span className="whitespace-nowrap text-xs font-semibold text-primary-foreground">
																		Premium
																	</span>
																</span>
															)}
														</div>

														<div className="flex gap-x-4">
															{/* Format */}
															<div className="sm:w-[106px]">
																<div className="flex items-center gap-x-1.5">
																	<span className="text-xs whitespace-nowrap text-muted-foreground">
																		{
																			question.category
																		}
																	</span>
																</div>
															</div>

															{/* Difficulty */}
															<div className="sm:w-[68px]">
																<div className="flex items-center gap-x-1.5">
																	<span
																		className={`text-xs ${
																			question.difficulty ===
																			"easy"
																				? "text-green-600"
																				: question.difficulty ===
																						"medium"
																					? "text-yellow-500"
																					: "text-red-600"
																		}`}
																	>
																		{
																			question.difficulty
																		}
																	</span>
																</div>
															</div>
														</div>
													</div>
												</div>
											</LocaleLink>
										</div>
									))}
								</div>
							</div>
						</TabsContent>

						<TabsContent
							value="quiz"
							className="flex-1 overflow-y-auto mt-0"
						>
							<div className="relative size-full">
								<div className="divide-y divide-border">
									{/* Header */}
									<div className="flex gap-x-4 max-sm:hidden px-6 py-3">
										<span className="text-muted-foreground text-xs grow">
											Name
										</span>
										<span className="text-muted-foreground text-xs w-[106px]">
											Format
										</span>
										<span className="text-muted-foreground text-xs w-[68px]">
											Difficulty
										</span>
									</div>

									{/* Question items */}
									{filteredQuestions.map((question) => (
										<div
											key={question.id}
											className={`group relative flex px-6 gap-4 transition-colors hover:bg-accent ${
												question.id === questionId &&
												question.category === category
													? "bg-accent"
													: ""
											}`}
										>
											<LocaleLink
												href={`/questions/${question.category}/${question.id}`}
												className="grow py-3 no-underline"
											>
												<div className="flex items-center gap-x-3">
													{/* Completion status */}
													<div className="flex items-center justify-center z-1">
														<button
															aria-label="Not completed"
															className="inline-flex items-center justify-center rounded-full transition-colors border border-border size-6 bg-background text-sm font-semibold text-muted-foreground"
															type="button"
														/>
													</div>

													{/* Content */}
													<div className="flex grow items-center gap-x-4 gap-y-1.5 max-sm:flex-wrap">
														<div className="flex grow items-center gap-x-2 max-sm:w-full">
															<span className="text-foreground text-xs font-medium">
																{question.name}
															</span>
															{question.isPremium && (
																<span className="relative inline-flex items-center rounded-full px-1.5 text-xs gap-1 bg-primary border border-primary py-px">
																	<span className="whitespace-nowrap text-xs font-semibold text-primary-foreground">
																		Premium
																	</span>
																</span>
															)}
														</div>

														<div className="flex gap-x-4">
															{/* Format */}
															<div className="sm:w-[106px]">
																<div className="flex items-center gap-x-1.5">
																	<span className="text-xs whitespace-nowrap text-muted-foreground">
																		{
																			question.category
																		}
																	</span>
																</div>
															</div>

															{/* Difficulty */}
															<div className="sm:w-[68px]">
																<div className="flex items-center gap-x-1.5">
																	<span
																		className={`text-xs ${
																			question.difficulty ===
																			"easy"
																				? "text-green-600"
																				: question.difficulty ===
																						"medium"
																					? "text-yellow-500"
																					: "text-red-600"
																		}`}
																	>
																		{
																			question.difficulty
																		}
																	</span>
																</div>
															</div>
														</div>
													</div>
												</div>
											</LocaleLink>
										</div>
									))}
								</div>
							</div>
						</TabsContent>
					</Tabs>
				</DialogContent>
			</Dialog>

			<Button
				variant="ghost"
				size="icon"
				disabled={
					currentIndex === filteredQuestions.length - 1 ||
					currentIndex === -1
				}
			>
				{currentIndex === filteredQuestions.length - 1 ||
				currentIndex === -1 ? (
					<ChevronRight className="size-4" />
				) : (
					<LocaleLink
						href={`/questions/${filteredQuestions[currentIndex + 1].category}/${filteredQuestions[currentIndex + 1].id}`}
						className="block hover:no-underline active:no-underline"
					>
						<ChevronRight className="size-4" />
					</LocaleLink>
				)}
			</Button>
		</div>
	);
}
