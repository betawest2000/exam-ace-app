import { BookOpen } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { EmptyExamItemList } from "./EmptyExamItemList";
import { ExamItem, type ExamItemProps } from "./ExamItem";

export type SortOption =
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

const difficultyOrder = {
	BEGINNER: 1,
	INTERMEDIATE: 2,
	ADVANCED: 3,
	EXPERT: 4,
};

export interface ExamItemListProps {
	sortOption: SortOption;
	items: ExamItemProps[];
}

export function ExamItemList({ items, sortOption }: ExamItemListProps) {
	const t = useTranslations();
	const sortedItems = useMemo(() => {
		if (sortOption === "default") {
			return items;
		}

		const itemsCopy = [...items];

		switch (sortOption) {
			case "title-asc":
				return itemsCopy.sort((a, b) => a.title.localeCompare(b.title));
			case "title-desc":
				return itemsCopy.sort((a, b) => b.title.localeCompare(a.title));
			case "difficulty-asc": {
				return itemsCopy.sort(
					(a, b) =>
						difficultyOrder[a.difficulty] -
						difficultyOrder[b.difficulty],
				);
			}
			case "difficulty-desc": {
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
	}, [items, sortOption]);

	if (sortedItems.length === 0) {
		return <EmptyExamItemList />;
	}

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-wrap items-center justify-between gap-4">
				<div className="flex gap-x-4 sm:gap-x-10">
					<button data-state="closed" className="" type="button">
						<span className="sr-only" id=":r10io:">
							{t("common.examMenu.examItem.countExams")}
						</span>
						<div className="flex items-center gap-x-1.5">
							<BookOpen className="size-5 shrink-0 text-muted-foreground" />
							<span className="text-xs whitespace-nowrap text-muted-foreground">
								{t("common.examMenu.examItem.examCount", {
									count: sortedItems.length ?? "0",
								})}
							</span>
						</div>
					</button>
				</div>
			</div>
			<ul className="isolate rounded-lg divide-y divide-border border border-border">
				{sortedItems.map((item, index) => (
					<ExamItem
						key={item.href || index}
						{...item}
						className={
							index === 0
								? "rounded-t-lg"
								: index === sortedItems.length - 1
									? "rounded-b-lg"
									: undefined
						}
					/>
				))}
			</ul>
		</div>
	);
}
