import { orpcClient } from "@shared/lib/orpc-client";
import { getTranslations } from "next-intl/server";
import { ExamPage } from "./ExamPage";

export async function generateMetadata() {
	const t = await getTranslations("common.examMenu.companies");
	return {
		title: t("all"),
		description: "",
	};
}

export default async function QuizListPage() {
	const t = await getTranslations("common.examMenu.companies");

	// 获取考试列表
	const { exams } = await orpcClient.quiz.exams.list({});

	// 转换为 ExamItemListProps 格式
	const examItems = exams.map((exam) => ({
		id: exam.id,
		title: exam.title,
		href: `/exams/${exam.id}`,
		company: exam.company as any,
		difficulty: exam.difficulty,
		description: exam.description ?? undefined,
		tags: exam.tags,
		createdAt: exam.createdAt?.toISOString(),
		updatedAt: exam.updatedAt?.toISOString(),
	}));

	return (
		<div className="container max-w-6xl pt-32 pb-16">
			<ExamPage title={t("all")} exams={examItems} />
		</div>
	);
}
