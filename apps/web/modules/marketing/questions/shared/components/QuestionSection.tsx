import { QuestionCard, type QuestionCardProps } from "./QuestionCard";

export interface QuestionSectionProps {
	title?: string;
	description?: string;
	formats: QuestionCardProps[];
}

export function QuestionSection({
	title,
	description,
	formats,
}: QuestionSectionProps) {
	return (
		<div className="flex flex-col gap-6 scroll-mt-40 lg:scroll-mt-20">
			<div className="flex flex-col gap-3">
				<h3 className="text-pretty text-foreground text-xl font-semibold">
					{title}
				</h3>
				<span className="text-muted-foreground text-body2">
					{description}
				</span>
			</div>

			<div className="grid sm:grid-cols-2 gap-6">
				{formats.map((format, index) => (
					<QuestionCard key={format.href || index} {...format} />
				))}
			</div>
		</div>
	);
}
