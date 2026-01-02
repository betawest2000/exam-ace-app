"use client";

import type { Category } from "@marketing/questions/types";
import { Button } from "@ui/components/button";
import { CirclePile, LayoutGrid, SquareCode } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useCallback, useState } from "react";

export interface QuestionCategoryItem {
	id: Category;
	label: string;
	icon: React.ElementType;
}

export interface QuestionCategoryFilterProps {
	categories?: QuestionCategoryItem[];
	initialSelectedCategories?: Category[];
	onCategoryChange?: (categoryIds: Category[]) => void;
}

export function QuestionCategoryFilter({
	categories,
	initialSelectedCategories,
	onCategoryChange,
}: QuestionCategoryFilterProps) {
	const t = useTranslations("common.practiceMenu.practiceQuestionsSection");
	const [selectedCategories, setSelectedCategories] = useState<Category[]>(
		initialSelectedCategories ?? [],
	);

	categories =
		categories ??
		([
			{
				id: "javascript",
				icon: SquareCode,
				label: t("formats.jsFunctions"),
			},
			{
				id: "user-interface",
				label: t("formats.uiCoding"),
				icon: LayoutGrid,
			},
			{
				id: "algorithms",
				label: t("formats.algorithmicCoding"),
				icon: CirclePile,
			},
		] as QuestionCategoryItem[]);

	const handleCategoryClick = useCallback(
		(categoryId: Category) => {
			const isSelected = selectedCategories.includes(categoryId);
			const newSelectedCategories = isSelected
				? selectedCategories.filter((id) => id !== categoryId)
				: [...selectedCategories, categoryId];

			setSelectedCategories(newSelectedCategories);
			onCategoryChange?.(newSelectedCategories);
		},
		[selectedCategories, onCategoryChange],
	);

	return (
		<div className="flex items-center gap-2 flex-wrap">
			{categories.map((category) => (
				<Button
					key={category.id}
					variant="outline"
					className={`h-8 text-xs text-foreground border border-border ${
						selectedCategories.includes(category.id)
							? "bg-primary text-primary-foreground border-primary hover:bg-primary/80"
							: ""
					}`}
					onClick={() => handleCategoryClick(category.id)}
				>
					<category.icon
						className={`size-4 ${selectedCategories.includes(category.id) ? "text-primary-foreground" : "text-foreground"}`}
					/>{" "}
					{category.label}
				</Button>
			))}
		</div>
	);
}
