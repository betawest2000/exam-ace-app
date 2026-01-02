import { QuestionSetCard } from "@quiz/components/QuestionSetCard";
import { getSession } from "@saas/auth/lib/server";
import { orpcClient } from "@shared/lib/orpc-client";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

type Params = {
	id: string;
	locale: string;
};

export async function generateMetadata() {
	const t = await getTranslations();
	return {
		title: "在线考试",
		description: "浏览所有可用的在线考试",
	};
}

export default async function QuizListPage(props: { params: Promise<Params> }) {
	const params = await props.params;
	const { id, locale } = params;
	const t = await getTranslations("common.examMenu");

	// 获取考试详情(不登录的情况)
	const { exams, total } = await orpcClient.quiz.exams.list({ id });
	if (!exams || exams.length === 0 || total === 0) {
		notFound();
	}
	const exam = exams[0];

	const session = await getSession();

	const isAuthenticated = !!session?.user;

	let favoriteCount = 0;
	let updatedAt = "";
	if (isAuthenticated) {
		const favoriteData = await orpcClient.quiz.favorites.count({
			examId: id,
		});
		favoriteCount = favoriteData.total;
		updatedAt = favoriteData.updatedAt
			? new Date(favoriteData.updatedAt).toLocaleDateString(
					locale === "zh" ? "zh-CN" : "en-US",
				)
			: "";
	}

	const favoriteData = {
		title: t("favorites.title"),
		description: t("favorites.description"),
		countString: t("examItem.questionCount", { count: favoriteCount }),
		updatedAt,
		extraParams: "favorite=true",
	};

	const defaultData = {
		title: t("defaultSet.title"),
		description: t("defaultSet.description"),
		countString: t("examItem.questionCount", {
			count: exam._count.questions,
		}),
		updatedAt: exam.updatedAt
			? new Date(exam.updatedAt).toLocaleDateString(
					locale === "zh" ? "zh-CN" : "en-US",
				)
			: "",
	};

	return (
		<div className="container max-w-6xl pt-32 pb-16">
			<div className="flex flex-col gap-y-8">
				<div className="flex flex-col gap-8">
					<div className="flex w-full flex-col items-start justify-between xl:flex-row gap-x-6 gap-y-8 sm:gap-y-6 min-[1186px]:flex-row">
						<div className="flex flex-col gap-8 xl:col-span-2">
							<div className="flex flex-col gap-3.5 xl:gap-4">
								<div className="flex items-center gap-6">
									<div className="flex items-center gap-4">
										<h1 className="text-pretty text-foreground xl:text-3xl xl:-tracking-1 text-2xl font-semibold">
											{exam.title}
										</h1>
									</div>
								</div>
								<span className="text-muted-foreground font-medium block text-sm xl:text-base max-w-2xl">
									{exam.description}
								</span>
							</div>
						</div>
					</div>
					<div className="h-px w-full bg-border" />
				</div>
				<div className="grid gap-8 md:grid-cols-2">
					{/* User favorites count: {favoriteCount} */}
					{isAuthenticated && favoriteCount > 0 && (
						<QuestionSetCard id={id} {...favoriteData} />
					)}
					<QuestionSetCard id={id} {...defaultData} />
				</div>
			</div>
		</div>
	);
}
