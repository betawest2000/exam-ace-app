import { LocaleLink } from "@i18n/routing";
import { Card, CardContent, CardHeader, CardTitle } from "@ui/components/card";
import { StarIcon } from "lucide-react";

interface FavoriteCardProps {
	favorite: {
		questionId: string;
		question: {
			questionText: string;
			questionType: string;
		};
		exam: {
			id: string;
			title: string;
		};
	};
}

export function FavoriteCard({ favorite }: FavoriteCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center gap-2 text-base">
					<StarIcon className="size-4 fill-yellow-500 text-yellow-500" />
					{favorite.exam.title}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="mb-2 text-sm text-muted-foreground line-clamp-2">
					{favorite.question.questionText}
				</p>
				<LocaleLink
					href={`/exams/${favorite.exam.id}/practice?favoriteOnly=true`}
					className="text-primary text-sm hover:underline"
				>
					查看考试 →
				</LocaleLink>
			</CardContent>
		</Card>
	);
}
