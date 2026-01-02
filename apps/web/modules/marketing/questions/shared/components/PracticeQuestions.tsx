import {
	BookOpen,
	GitBranch,
	LayoutTemplate,
	MessageCircleQuestion,
	Network,
	SquareCode,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { QuestionSection } from "./QuestionSection";

export function PracticeQuestions({
	jsFunctionsCount,
	algoCodingCount,
	userInterfaceCodingCount,
	frontendSystemDesignCount,
	quizCount,
	behavioralGuidesCount,
}: {
	jsFunctionsCount: number;
	algoCodingCount: number;
	userInterfaceCodingCount: number;
	frontendSystemDesignCount: number;
	quizCount: number;
	behavioralGuidesCount: number;
}) {
	const t = useTranslations("common.practiceMenu.practiceQuestionsSection");

	const formats = [
		{
			title: t("formats.uiCoding"),
			href: "/questions",
			icon: (
				<LayoutTemplate className="size-5 text-foreground group-hover:text-primary transition-colors" />
			),
			questionCompleted: 0,
			totalQuestions: userInterfaceCodingCount,
			type: "questions" as const,
		},
		{
			title: t("formats.jsFunctions"),
			href: "/questions",
			icon: (
				<SquareCode className="size-5 text-foreground group-hover:text-primary transition-colors" />
			),
			questionCompleted: 0,
			totalQuestions: jsFunctionsCount,
			type: "questions" as const,
		},
		{
			title: t("formats.systemDesign"),
			href: "/questions/system-design",
			icon: (
				<Network className="size-5 text-foreground group-hover:text-primary transition-colors" />
			),
			questionCompleted: 0,
			totalQuestions: frontendSystemDesignCount,
			type: "questions" as const,
		},
		{
			title: t("formats.quiz"),
			href: "/questions/quiz",
			icon: (
				<MessageCircleQuestion className="size-5 text-foreground group-hover:text-primary transition-colors" />
			),
			questionCompleted: 0,
			totalQuestions: quizCount,
			type: "questions" as const,
		},
		{
			title: t("formats.algoCoding"),
			href: "/questions",
			icon: (
				<GitBranch className="size-5 text-foreground group-hover:text-primary transition-colors" />
			),
			questionCompleted: 0,
			totalQuestions: algoCodingCount,
			type: "questions" as const,
		},
		{
			title: t("formats.behavioral"),
			href: "/behavioral-interview-playbook",
			icon: (
				<BookOpen className="size-5 text-foreground group-hover:text-primary transition-colors" />
			),
			questionCompleted: 0,
			totalQuestions: behavioralGuidesCount,
			type: "articles" as const,
		},
	];

	return (
		<QuestionSection
			title={t("title")}
			description={t("description")}
			formats={formats}
		/>
	);
}
