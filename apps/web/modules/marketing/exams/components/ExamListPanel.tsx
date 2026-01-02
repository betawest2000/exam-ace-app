"use client";

import { Button } from "@ui/components/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from "@ui/components/dropdown-menu";
import { Input } from "@ui/components/input";
import { ArrowUpDown } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useCallback, useMemo } from "react";
import {
	ExamItemList,
	type ExamItemListProps,
	type SortOption,
} from "./ExamItemList";

interface ExamListPanelProps {
	exams: ExamItemListProps["items"];
}

export function ExamListPanel({ exams }: ExamListPanelProps) {
	const t = useTranslations("common");

	const [searchQuery, setSearchQuery] = React.useState("");
	const [sortOption, setSortOption] = React.useState<SortOption>("default");

	const handleSortChange = useCallback((value: string) => {
		const option = value as SortOption;
		setSortOption(option);
	}, []);

	const filterBySearch = useCallback(
		(items: ExamItemListProps["items"], query: string) => {
			if (!query.trim()) {
				return items;
			}
			const lowerQuery = query.toLowerCase();
			return items.filter(
				(item) =>
					item.title.toLowerCase().includes(lowerQuery) ||
					item.description?.toLowerCase().includes(lowerQuery) ||
					item.company?.toLowerCase().includes(lowerQuery),
			);
		},
		[],
	);

	const filteredExams = useMemo(() => {
		return filterBySearch(exams, searchQuery);
	}, [exams, searchQuery, filterBySearch]);

	return (
		<div className="w-full">
			<div className="flex flex-col gap-5 xl:gap-6">
				<div className="flex items-center gap-2">
					<Input
						placeholder={t("practiceMenu.filters.inputPlaceholder")}
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
									{t("practiceMenu.sort.options.titleAsc")}
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value="title-desc">
									{t("practiceMenu.sort.options.titleDesc")}
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
			</div>

			<div className="mt-6">
				<ExamItemList items={filteredExams} sortOption={sortOption} />
			</div>
		</div>
	);
}
