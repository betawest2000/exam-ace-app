"use client";

import type { Category } from "@marketing/questions/types";
import { PremiumLockCard } from "@marketing/shared/components/PremiumLockCard";
import { Button } from "@ui/components/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from "@ui/components/dropdown-menu";
import { Input } from "@ui/components/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/components/tabs";
import { ArrowUpDown } from "lucide-react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import React, { useCallback, useMemo } from "react";
import { QuestionCategoryFilter } from "./QuestionCategoryFilter";
import {
	QuestionItemList,
	type QuestionItemListProps,
	type SortOption,
} from "./QuestionItemList";

type TabType = "coding" | "system-design" | "quiz";

interface QuestionListPanelProps {
	displayPremiumLocked?: boolean;
	codingQuestions: QuestionItemListProps["items"];
	systemDesignQuestions: QuestionItemListProps["items"];
	quizQuestions: QuestionItemListProps["items"];
}

export function QuestionListPanel({
	displayPremiumLocked,
	codingQuestions,
	systemDesignQuestions,
	quizQuestions,
}: QuestionListPanelProps) {
	const t = useTranslations("common");
	const params = useParams();
	const pathname = usePathname();
	const router = useRouter();
	const locale = params.locale as string;

	const getActiveTab = (): TabType => {
		if (pathname.endsWith("/system-design")) {
			return "system-design";
		}
		if (pathname.endsWith("/quiz")) {
			return "quiz";
		}
		return "coding";
	};

	const activeTab = getActiveTab();

	const [searchQuery, setSearchQuery] = React.useState("");
	const [selectedCategories, setSelectedCategories] = React.useState<
		Category[]
	>([]);
	const [sortOption, setSortOption] = React.useState<SortOption>("default");

	const handleSortChange = useCallback((value: string) => {
		const option = value as SortOption;
		setSortOption(option);
	}, []);

	const handleCategoryChange = useCallback((categoryIds: Category[]) => {
		setSelectedCategories(categoryIds);
	}, []);

	const filterBySearch = useCallback(
		(items: QuestionItemListProps["items"], query: string) => {
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
		},
		[],
	);

	const filterByCategory = useCallback(
		(items: QuestionItemListProps["items"], categories: Category[]) => {
			if (categories.length === 0) {
				return items;
			}
			return items.filter((item) =>
				categories.includes(item.category as Category),
			);
		},
		[],
	);

	const filteredCodingQuestions = useMemo(() => {
		let filtered = codingQuestions;
		filtered = filterByCategory(filtered, selectedCategories);
		filtered = filterBySearch(filtered, searchQuery);
		return filtered;
	}, [
		codingQuestions,
		selectedCategories,
		searchQuery,
		filterByCategory,
		filterBySearch,
	]);

	const filteredSystemDesignQuestions = useMemo(
		() => filterBySearch(systemDesignQuestions, searchQuery),
		[systemDesignQuestions, searchQuery, filterBySearch],
	);

	const filteredQuizQuestions = useMemo(
		() => filterBySearch(quizQuestions, searchQuery),
		[quizQuestions, searchQuery, filterBySearch],
	);

	const handleTabChange = (value: string) => {
		const baseUrl = `/${locale}/questions`;
		const tabRoutes: Record<TabType, string> = {
			coding: baseUrl,
			"system-design": `${baseUrl}/system-design`,
			quiz: `${baseUrl}/quiz`,
		};
		router.push(tabRoutes[value as TabType]);
	};

	return (
		<div className="w-full">
			<Tabs
				value={activeTab}
				onValueChange={handleTabChange}
				className="flex flex-col"
			>
				<div className="flex flex-col gap-5 xl:gap-6">
					<div className="flex items-center gap-2">
						<Input
							placeholder={t(
								"practiceMenu.filters.inputPlaceholder",
							)}
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="flex-1 text-xs"
						/>
						<DropdownMenu modal={false}>
							<DropdownMenuTrigger asChild>
								<Button
									variant="outline"
									size="sm"
									className="h-8 text-xs text-foreground border border-border"
								>
									<ArrowUpDown className="h-4 w-4" />
									{t("practiceMenu.sort.label")}
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end" className="w-56">
								<DropdownMenuRadioGroup
									value={sortOption}
									onValueChange={handleSortChange}
								>
									<DropdownMenuRadioItem value="default">
										{t("practiceMenu.sort.options.default")}
									</DropdownMenuRadioItem>
									<DropdownMenuRadioItem value="title-asc">
										{t(
											"practiceMenu.sort.options.titleAsc",
										)}
									</DropdownMenuRadioItem>
									<DropdownMenuRadioItem value="title-desc">
										{t(
											"practiceMenu.sort.options.titleDesc",
										)}
									</DropdownMenuRadioItem>
									<DropdownMenuRadioItem value="difficulty-asc">
										{t(
											"practiceMenu.sort.options.difficultyAsc",
										)}
									</DropdownMenuRadioItem>
									<DropdownMenuRadioItem value="difficulty-desc">
										{t(
											"practiceMenu.sort.options.difficultyDesc",
										)}
									</DropdownMenuRadioItem>
									<DropdownMenuRadioItem value="importance-high-low">
										{t(
											"practiceMenu.sort.options.importanceHighLow",
										)}
									</DropdownMenuRadioItem>
									<DropdownMenuRadioItem value="importance-low-high">
										{t(
											"practiceMenu.sort.options.importanceLowHigh",
										)}
									</DropdownMenuRadioItem>
									<DropdownMenuRadioItem value="duration-low-high">
										{t(
											"practiceMenu.sort.options.durationLowHigh",
										)}
									</DropdownMenuRadioItem>
									<DropdownMenuRadioItem value="duration-high-low">
										{t(
											"practiceMenu.sort.options.durationHighLow",
										)}
									</DropdownMenuRadioItem>
									<DropdownMenuRadioItem value="created-newest">
										{t(
											"practiceMenu.sort.options.createdNewest",
										)}
									</DropdownMenuRadioItem>
									<DropdownMenuRadioItem value="created-oldest">
										{t(
											"practiceMenu.sort.options.createdOldest",
										)}
									</DropdownMenuRadioItem>
								</DropdownMenuRadioGroup>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
					<TabsList className="mb-6 gap-2 w-full border-b justify-start">
						<TabsTrigger value="coding" className="cursor-pointer">
							{t("practiceMenu.tags.coding")}
						</TabsTrigger>
						<TabsTrigger
							value="system-design"
							className="cursor-pointer"
						>
							{t("practiceMenu.tags.systemDesign")}
						</TabsTrigger>
						<TabsTrigger value="quiz" className="cursor-pointer">
							{t("practiceMenu.tags.quiz")}
						</TabsTrigger>
					</TabsList>
				</div>

				<TabsContent value="coding" className="flex flex-col gap-8">
					<QuestionCategoryFilter
						onCategoryChange={handleCategoryChange}
					/>
					{displayPremiumLocked ? (
						<PremiumLockCard
							fullWidth
							title={t("premium.lockCard.title.companies")}
							description={t(
								"premium.lockCard.description.companies",
							)}
						/>
					) : (
						<QuestionItemList
							items={filteredCodingQuestions}
							sortOption={sortOption}
						/>
					)}
				</TabsContent>

				<TabsContent value="system-design">
					{displayPremiumLocked ? (
						<PremiumLockCard
							fullWidth
							title={t("premium.lockCard.title.companies")}
							description={t(
								"premium.lockCard.description.companies",
							)}
						/>
					) : (
						<QuestionItemList
							items={filteredSystemDesignQuestions}
							sortOption={sortOption}
						/>
					)}
				</TabsContent>

				<TabsContent value="quiz">
					{displayPremiumLocked ? (
						<PremiumLockCard
							fullWidth
							title={t("premium.lockCard.title.companies")}
							description={t(
								"premium.lockCard.description.companies",
							)}
						/>
					) : (
						<QuestionItemList
							items={filteredQuizQuestions}
							sortOption={sortOption}
						/>
					)}
				</TabsContent>
			</Tabs>
		</div>
	);
}
