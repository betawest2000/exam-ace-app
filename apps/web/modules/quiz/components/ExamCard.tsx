import { LocaleLink } from "@i18n/routing";
import { Card, CardContent, CardHeader, CardTitle } from "@ui/components/card";

interface ExamCardProps {
	exam: {
		id: string;
		title: string;
		description: string | null;
		createdAt: Date;
		_count?: { questions: number };
	};
}

export function ExamCard({ exam }: ExamCardProps) {
	return (
		<LocaleLink href={`/exams/${exam.id}/practice`}>
			<Card className="transition-all hover:shadow-lg hover:scale-[1.02]">
				<CardHeader>
					<CardTitle>{exam.title}</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="mb-4 text-muted-foreground line-clamp-3">
						{exam.description}
					</p>
					<div className="flex items-center justify-between text-sm text-muted-foreground">
						<span>{exam._count?.questions ?? 0} 个问题</span>
						<span>
							{new Date(exam.createdAt).toLocaleDateString(
								"zh-CN",
							)}
						</span>
					</div>
				</CardContent>
			</Card>
		</LocaleLink>
	);
}
