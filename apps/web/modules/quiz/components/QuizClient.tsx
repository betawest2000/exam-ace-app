"use client";

import { LocaleLink } from "@i18n/routing";
import { QuestionCard } from "@quiz/components/QuestionCard";
import { orpcClient } from "@shared/lib/orpc-client";
import { Button } from "@ui/components/button";
import { Progress } from "@ui/components/progress";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
	questions: Question[];
	isAuthenticated: boolean;
	initialFavoriteQuestions?: string[];
	favoriteOnly?: boolean;
}

export function QuizClient({
	examId,
	questions,
	isAuthenticated,
	initialFavoriteQuestions = [],
	favoriteOnly = false,
}: QuizClientProps) {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [isCompleted, setIsCompleted] = useState(false);
	const [FavoriteQuestions, setFavoriteQuestions] = useState<Set<string>>(
		new Set(initialFavoriteQuestions),
	);
	const [jumpToIndex, setJumpToIndex] = useState("");
	const router = useRouter();

	const currentQuestion = questions[currentQuestionIndex];
	const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

	const handleNext = () => {
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		} else {
			setIsCompleted(true);
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

	const handleJumpToQuestion = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			const index = Number.parseInt(jumpToIndex, 10);
			if (index >= 1 && index <= questions.length) {
				setCurrentQuestionIndex(index - 1);
				setJumpToIndex("");
			}
		}
	};

	if (isCompleted) {
		return (
			<div className="container flex min-h-[60vh] max-w-3xl flex-col items-center justify-center pt-32 pb-16 text-center">
				<div className="mb-8">
					<h1 className="mb-4 font-bold text-4xl">🎉 恭喜完成！</h1>
					<p className="text-lg text-muted-foreground">
						你已经完成了所有 {questions.length} 个
						{favoriteOnly ? "收藏的" : ""}问题
					</p>
				</div>
				<div className="flex flex-wrap justify-center items-center gap-4">
					<Button onClick={() => window.location.reload()}>
						重新开始
					</Button>
					{favoriteOnly && (
						<LocaleLink href={`/practice/${examId}`}>
							<Button variant="outline">查看所有问题</Button>
						</LocaleLink>
					)}

					<LocaleLink
						href={`/exams/${examId}`}
						className="text-sm text-muted-foreground hover:text-foreground items-center flex"
					>
						← 返回考试列表
					</LocaleLink>
					<div className="flex items-center gap-2">
						<span className="text-sm text-muted-foreground">
							跳转到第
						</span>
						<input
							type="number"
							min="1"
							max={questions.length}
							value={jumpToIndex}
							onChange={(e) => setJumpToIndex(e.target.value)}
							onKeyDown={handleJumpToQuestion}
							placeholder="1"
							className="w-16 rounded-md border border-input bg-background px-2 py-1 text-center text-sm focus:outline-none focus:ring-2 focus:ring-ring"
						/>
						<span className="text-sm text-muted-foreground">
							题
						</span>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="container max-w-4xl pt-16 pb-8">
			<div className="mb-2 flex items-center gap-2">
				<LocaleLink
					href={`/exams/${examId}`}
					className="mb-1 text-sm text-muted-foreground hover:text-foreground flex items-center"
				>
					← 返回考试列表
				</LocaleLink>
				<div className="flex items-center gap-2">
					<span className="text-sm text-muted-foreground">
						跳转到第
					</span>
					<input
						type="number"
						min="1"
						max={questions.length}
						value={jumpToIndex}
						onChange={(e) => setJumpToIndex(e.target.value)}
						onKeyDown={handleJumpToQuestion}
						placeholder="1"
						className="w-16 rounded-md border border-input bg-background px-2 py-1 text-center text-sm focus:outline-none focus:ring-2 focus:ring-ring"
					/>
					<span className="text-sm text-muted-foreground">题</span>
				</div>
			</div>

			<div className="mb-3">
				<div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
					<span>
						问题 {currentQuestionIndex + 1} / {questions.length}
						{favoriteOnly && " (收藏的问题)"}
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
					isLast={currentQuestionIndex === questions.length - 1}
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
