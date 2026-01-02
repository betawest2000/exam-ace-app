"use client";

import { Button } from "@ui/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@ui/components/card";
import { Checkbox } from "@ui/components/checkbox";
import { Label } from "@ui/components/label";
import { RadioGroup, RadioGroupItem } from "@ui/components/radio-group";
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

interface QuestionCardProps {
	question: Question;
	index: number;
	onNext: () => void;
	isLast: boolean;
	isFavorite?: boolean;
	onToggleFavorite?: () => void;
}

const OPTIONS = ["A", "B", "C", "D", "E", "F", "G", "H"];

export function QuestionCard({
	question,
	index,
	onNext,
	isLast,
	isFavorite,
	onToggleFavorite,
}: QuestionCardProps) {
	const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);
	const [showAnswer, setShowAnswer] = useState(false);

	useEffect(() => {
		setSelectedAnswer([]);
		setShowAnswer(false);
	}, [question]);

	const handleCheckAnswer = () => {
		setShowAnswer(true);
	};

	const handleNext = () => {
		setSelectedAnswer([]);
		setShowAnswer(false);
		onNext();
	};

	const isCorrect = () => {
		if (selectedAnswer.length === 0) {
			return false;
		}
		// 检查数量是否一致
		if (selectedAnswer.length !== question.correctAnswer.length) {
			return false;
		}
		// 检查所有选中的答案是否都在正确答案中
		return selectedAnswer.every((answer) =>
			question.correctAnswer.includes(answer),
		);
	};

	return (
		<Card className="w-full max-w-3xl">
			<CardHeader className="p-3">
				<div className="flex items-start justify-between">
					<CardTitle className="flex-1 text-sm lg:text-base font-medium">
						问题 {index + 1}: {question.questionText}
					</CardTitle>
				</div>
				<p className="text-sm lg:text-base text-muted-foreground">
					{question.questionType === "SINGLE_CHOICE" && "单选题"}
					{question.questionType === "MULTIPLE_CHOICE" && "多选题"}
					{question.questionType === "FILL_IN_BLANK" && "填空题"}
					{question.questionType === "TRUE_FALSE" && "判断题"}
					{question.questionType === "SHORT_ANSWER" && "简答题"}
				</p>
			</CardHeader>
			<CardContent className="space-y-4">
				{question.questionType === "SINGLE_CHOICE" && (
					<RadioGroup
						key={question.id}
						value={selectedAnswer[0] || ""}
						onValueChange={(value: string) =>
							setSelectedAnswer([value])
						}
						disabled={showAnswer}
					>
						{question.options.map((option, idx) => (
							<div
								key={idx}
								className="flex items-center space-x-2"
							>
								<RadioGroupItem
									value={OPTIONS[idx]}
									id={`option-${idx}`}
								/>
								<Label
									htmlFor={`option-${idx}`}
									className={
										showAnswer &&
										question.correctAnswer.includes(
											OPTIONS[idx],
										)
											? "font-bold text-green-600 text-sm lg:text-base"
											: "text-sm lg:text-base"
									}
								>
									{option}
								</Label>
							</div>
						))}
					</RadioGroup>
				)}

				{question.questionType === "MULTIPLE_CHOICE" && (
					<div className="space-y-2" key={question.id}>
						{question.options.map((option: string, idx: number) => (
							<div
								key={idx}
								className="flex items-center space-x-2"
							>
								<Checkbox
									id={`option-${idx}`}
									checked={selectedAnswer.includes(
										OPTIONS[idx],
									)}
									onCheckedChange={(checked: boolean) => {
										if (checked) {
											setSelectedAnswer([
												...selectedAnswer,
												OPTIONS[idx],
											]);
										} else {
											setSelectedAnswer(
												selectedAnswer.filter(
													(a) => a !== OPTIONS[idx],
												),
											);
										}
									}}
									disabled={showAnswer}
								/>
								<Label
									htmlFor={`option-${idx}`}
									className={
										showAnswer &&
										question.correctAnswer.includes(
											OPTIONS[idx],
										)
											? "font-bold text-green-600 text-sm lg:text-base"
											: "text-sm lg:text-base"
									}
								>
									{option}
								</Label>
							</div>
						))}
					</div>
				)}

				<div className="flex gap-2">
					{!showAnswer && (
						<Button
							onClick={handleCheckAnswer}
							disabled={selectedAnswer.length === 0}
						>
							检查答案
						</Button>
					)}
					{showAnswer && (
						<Button onClick={handleNext}>
							{isLast ? "完成" : "下一题"}
						</Button>
					)}

					{onToggleFavorite && (
						<Button
							onClick={onToggleFavorite}
							className={
								isFavorite ? "bg-yellow-600 text-white" : ""
							}
						>
							{isFavorite ? "已收藏" : "收藏"}
						</Button>
					)}
				</div>

				{showAnswer && (
					<div className="space-y-2 rounded-lg border p-4">
						<div
							className={`font-semibold ${
								isCorrect() ? "text-green-600" : "text-red-600"
							}`}
						>
							{isCorrect() ? "✓ 回答正确！" : "✗ 回答错误"}
						</div>
						<div className="text-sm lg:text-base">
							<strong>正确答案：</strong>
							{question.correctAnswer.join(", ")}
						</div>
						{question.explanation && (
							<div className="text-sm lg:text-base text-muted-foreground">
								<strong>解析：</strong>
								<div className="mt-1 space-y-2">
									{question.explanation
										.split("\n")
										.filter((line) => line.trim())
										.map((line, idx) => (
											<p key={idx}>{line}</p>
										))}
								</div>
							</div>
						)}
					</div>
				)}
			</CardContent>
		</Card>
	);
}
