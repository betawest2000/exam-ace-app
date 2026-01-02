import { BookOpen } from "lucide-react";
import { useMemo } from "react";
import { EmptyQuestionItemList } from "./EmptyQuestionItemList";
import { QuestionItem, type QuestionItemProps } from "./QuestionItem";

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

export interface QuestionItemListProps {
	sortOption: SortOption;
	items: QuestionItemProps[];
}

export function QuestionItemList({ items, sortOption }: QuestionItemListProps) {
	const sortedItems = useMemo(() => {
		if (sortOption === "default") {
			return items;
		}

		const itemsCopy = [...items];

		switch (sortOption) {
			case "title-asc":
				return itemsCopy.sort((a, b) => a.name.localeCompare(b.name));
			case "title-desc":
				return itemsCopy.sort((a, b) => b.name.localeCompare(a.name));
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
	}, [items, sortOption]);

	if (sortedItems.length === 0) {
		return <EmptyQuestionItemList />;
	}

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-wrap items-center justify-between gap-4">
				<div className="flex gap-x-4 sm:gap-x-10">
					<button data-state="closed" className="" type="button">
						<span className="sr-only" id=":r10io:">
							Number of questions
						</span>
						<div className="flex items-center gap-x-1.5">
							<BookOpen className="size-5 shrink-0 text-muted-foreground" />
							<span className="text-xs whitespace-nowrap text-muted-foreground">
								{sortedItems.length} questions
							</span>
						</div>
					</button>
				</div>
			</div>
			<ul className="isolate rounded-lg divide-y divide-border border border-border">
				{sortedItems.map((item, index) => (
					<QuestionItem
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
