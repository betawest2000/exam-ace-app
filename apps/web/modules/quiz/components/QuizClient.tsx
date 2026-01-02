"use client";

import { LocaleLink } from "@i18n/routing";
import { QuestionCard } from "@quiz/components/QuestionCard";
import { orpcClient } from "@shared/lib/orpc-client";
import { Button } from "@ui/components/button";
import { Progress } from "@ui/components/progress";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

type QuestionType =
	| "SINGLE_CHOICE"
	| "MULTIPLE_CHOICE"
	| "FILL_IN_BLANK"
	| "TRUE_FALSE"
	| "SHORT_ANSWER";

interface Question {
	id: string;
	questionText: string;
	questionType: QuestionType;
	options: string[];
	correctAnswer: string[];
	explanation: string | null;
}

interface QuizClientProps {
	examId: string;
	isAuthenticated: boolean;
	favoriteOnly?: boolean;
}

export function QuizClient({
	examId,
	isAuthenticated,
	favoriteOnly = false,
}: QuizClientProps) {
	const t = useTranslations();
	const [questions, setQuestions] = useState<Question[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [isCompleted, setIsCompleted] = useState(false);
	const [FavoriteQuestions, setFavoriteQuestions] = useState<Set<string>>(
		new Set(),
	);
	const [totalQuestions, setTotalQuestions] = useState(0);
	const [isLoadingMore, setIsLoadingMore] = useState(false);
	const router = useRouter();

	const PAGE_SIZE = 100;
	const PREFETCH_THRESHOLD = 5; // 距离末尾5题时加载下一页

	// 获取localStorage key
	const getProgressKey = () => {
		return `quiz-progress-${examId}${favoriteOnly ? "-favorite" : ""}`;
	};

	// 保存进度到localStorage
	const saveProgress = (index: number) => {
		try {
			localStorage.setItem(getProgressKey(), index.toString());
		} catch (error) {
			console.error("Failed to save progress:", error);
		}
	};

	// 从localStorage恢复进度
	const loadProgress = (): number => {
		try {
			const saved = localStorage.getItem(getProgressKey());
			return saved ? Number.parseInt(saved, 10) : 0;
		} catch (error) {
			console.error("Failed to load progress:", error);
			return 0;
		}
	};

	// 加载指定页的题目
	const loadQuestionsPage = async (offset: number, limit: number) => {
		const { questions: loadedQuestions, total } =
			await orpcClient.quiz.exams.questions({
				id: examId,
				userFavorite: favoriteOnly,
				offset,
				limit,
			});
		return { questions: loadedQuestions, total };
	};

	// 初始化加载
	useEffect(() => {
		async function loadQuestions() {
			try {
				setIsLoading(true);
				const savedProgress = loadProgress();

				// 计算需要加载的初始页数（包含保存的进度）
				const initialOffset = 0;
				const initialLimit = Math.max(
					PAGE_SIZE,
					savedProgress + PAGE_SIZE,
				);

				const { questions: loadedQuestions, total } =
					await loadQuestionsPage(initialOffset, initialLimit);

				setQuestions(loadedQuestions);
				setTotalQuestions(total);
				setCurrentQuestionIndex(Math.min(savedProgress, total - 1));

				// 加载收藏信息
				let favoriteQuestionIds = loadedQuestions.map((q) => q.id);
				if (!favoriteOnly) {
					const favoriteData = await orpcClient.quiz.favorites.get({
						examId,
					});
					favoriteQuestionIds = favoriteData.favorites ?? [];
				}
				setFavoriteQuestions(new Set(favoriteQuestionIds));
			} catch (error) {
				console.error("Failed to load questions:", error);
			} finally {
				setIsLoading(false);
			}
		}

		loadQuestions();
	}, [examId, favoriteOnly]);

	const currentQuestion = questions[currentQuestionIndex];
	const progress =
		totalQuestions > 0
			? ((currentQuestionIndex + 1) / totalQuestions) * 100
			: 0;

	const handleNext = async () => {
		const nextIndex = currentQuestionIndex + 1;

		// 保存进度
		saveProgress(nextIndex);

		if (nextIndex < questions.length) {
			setCurrentQuestionIndex(nextIndex);

			// 检查是否需要加载下一页
			const remainingQuestions = questions.length - nextIndex;
			const hasMoreQuestions = questions.length < totalQuestions;

			if (
				remainingQuestions <= PREFETCH_THRESHOLD &&
				hasMoreQuestions &&
				!isLoadingMore
			) {
				setIsLoadingMore(true);
				try {
					const { questions: newQuestions } = await loadQuestionsPage(
						questions.length,
						PAGE_SIZE,
					);

					if (newQuestions.length > 0) {
						setQuestions((prev) => [...prev, ...newQuestions]);
					}
				} catch (error) {
					console.error("Failed to load more questions:", error);
				} finally {
					setIsLoadingMore(false);
				}
			}
		} else if (nextIndex >= totalQuestions) {
			setIsCompleted(true);
			// 完成后清除进度
			try {
				localStorage.removeItem(getProgressKey());
			} catch (error) {
				console.error("Failed to clear progress:", error);
			}
		}
	};

	const handleToggleFavorite = async (questionId: string) => {
		if (!isAuthenticated) {
			router.push("/sign-in");
			return;
		}

		try {
			const result = await orpcClient.quiz.favorites.toggle({
				examId: examId,
				questionId,
			});

			setFavoriteQuestions((prev) => {
				const newSet = new Set(prev);
				if (result.favorite) {
					newSet.add(questionId);
				} else {
					newSet.delete(questionId);
				}
				return newSet;
			});
		} catch (error) {
			console.error("Failed to toggle favorite:", error);
		}
	};

	if (isLoading) {
		return (
			<div className="container flex min-h-[60vh] max-w-3xl flex-col items-center justify-center pt-8 pb-4 text-center">
				<div className="text-lg text-muted-foreground">
					{t("common.loading")}
				</div>
			</div>
		);
	}

	if (questions.length === 0) {
		return (
			<div className="container flex min-h-[60vh] max-w-3xl flex-col items-center justify-center pt-8 pb-4 text-center">
				<div className="text-lg text-muted-foreground">
					{favoriteOnly
						? t("quiz.noFavoriteQuestions")
						: t("quiz.noQuestions")}
				</div>
				<LocaleLink href={`/exams/${examId}`} className="mt-4">
					<Button variant="outline">
						{t("quiz.backToExamList")}
					</Button>
				</LocaleLink>
			</div>
		);
	}

	if (isCompleted) {
		return (
			<div className="container flex min-h-[60vh] max-w-3xl flex-col items-center justify-center pt-8 pb-4 text-center">
				<div className="mb-8">
					<h1 className="mb-4 font-bold text-4xl">
						{t("quiz.congratulations")}
					</h1>
					<p className="text-lg text-muted-foreground">
						{favoriteOnly
							? t("quiz.completedAllFavoriteQuestions", {
									count: totalQuestions,
								})
							: t("quiz.completedAllQuestions", {
									count: totalQuestions,
								})}
					</p>
				</div>
				<div className="flex flex-wrap justify-center items-center gap-4">
					<Button
						onClick={() => {
							localStorage.removeItem(getProgressKey());
							window.location.reload();
						}}
					>
						{t("quiz.restart")}
					</Button>
					{favoriteOnly && (
						<LocaleLink href={`/practice/${examId}`}>
							<Button variant="outline">
								{t("quiz.viewAllQuestions")}
							</Button>
						</LocaleLink>
					)}

					<LocaleLink
						href={`/exams/${examId}`}
						className="text-sm text-muted-foreground hover:text-foreground items-center flex"
					>
						{t("quiz.backToExamList")}
					</LocaleLink>
				</div>
			</div>
		);
	}

	return (
		<div className="container max-w-4xl pt-8 pb-4">
			<div className="mb-2">
				<LocaleLink
					href={`/exams/${examId}`}
					className="text-sm lg:text-base font-medium text-muted-foreground hover:text-foreground flex items-center"
				>
					{t("quiz.backToExamList")}
				</LocaleLink>
			</div>

			<div className="mb-3">
				<div className="mb-2 flex items-center justify-between text-sm lg:text-base text-muted-foreground">
					<span>
						{t("quiz.questionProgress", {
							current: currentQuestionIndex + 1,
							total: totalQuestions,
						})}
						{favoriteOnly && ` (${t("quiz.favoriteQuestions")})`}
						{isLoadingMore && ` (${t("common.loading")})`}
					</span>
					<span>{Math.round(progress)}%</span>
				</div>
				<Progress value={progress} className="max-w-3xl" />
			</div>

			{currentQuestion && (
				<QuestionCard
					question={currentQuestion}
					index={currentQuestionIndex}
					onNext={handleNext}
					isLast={currentQuestionIndex === totalQuestions - 1}
					isFavorite={FavoriteQuestions.has(currentQuestion.id)}
					onToggleFavorite={
						isAuthenticated
							? () => handleToggleFavorite(currentQuestion.id)
							: undefined
					}
				/>
			)}
		</div>
	);
}
