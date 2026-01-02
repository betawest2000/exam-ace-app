import { LocaleLink } from "@i18n/routing";
import { Card, CardContent, CardHeader, CardTitle } from "@ui/components/card";

interface QuestionSetCardProps {
	id: string;
	title: string;
	description: string | null;
	updatedAt: string;
	countString: string;
	extraParams?: string;
}

export function QuestionSetCard(questionSet: QuestionSetCardProps) {
	const extraParams = questionSet.extraParams
		? `?${questionSet.extraParams}`
		: "";
	return (
		<LocaleLink href={`/practice/${questionSet.id}${extraParams}`}>
			<Card className="transition-all hover:shadow-lg hover:scale-[1.02]">
				<CardHeader>
					<CardTitle>{questionSet.title}</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="mb-4 text-muted-foreground line-clamp-3">
						{questionSet.description}
					</p>
					<div className="flex items-center justify-between text-sm text-muted-foreground">
						<span>{questionSet.countString}</span>
						<span>{questionSet.updatedAt}</span>
					</div>
				</CardContent>
			</Card>
		</LocaleLink>
	);
}
