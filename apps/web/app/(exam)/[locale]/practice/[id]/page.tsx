import { QuizClient } from "@quiz/components/QuizClient";
import { createPurchasesHelper } from "@repo/payments/lib/helper";
import { getSession } from "@saas/auth/lib/server";
import { getPurchases } from "@saas/payments/lib/server";
import { orpcClient } from "@shared/lib/orpc-client";
import { redirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

type Params = {
	id: string;
	locale: string;
};

type SearchParams = {
	favorite?: string;
};

export async function generateMetadata(props: { params: Promise<Params> }) {
	const params = await props.params;

	try {
		const exam = await orpcClient.quiz.exams.get({ id: params.id });
		return {
			title: exam.title,
			description: exam.description || "在线考试答题",
		};
	} catch {
		return {
			title: "考试",
		};
	}
}

export default async function QuizExamPage(props: {
	params: Promise<Params>;
	searchParams: Promise<SearchParams>;
}) {
	const { id, locale } = await props.params;
	const searchParams = await props.searchParams;
	const favoriteOnly = searchParams.favorite === "true";

	setRequestLocale(locale);
	const session = await getSession();

	if (!session) {
		redirect("/auth/login");
	}

	// 检查用户是否有 Pro 订阅
	const purchases = await getPurchases();
	const { hasPurchase } = createPurchasesHelper(purchases);
	if (!hasPurchase("pro")) {
		redirect("/upgrade");
	}

	return (
		<QuizClient
			examId={id}
			isAuthenticated={true}
			favoriteOnly={favoriteOnly}
		/>
	);
}
