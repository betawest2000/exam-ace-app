import fs from "node:fs";
import path from "node:path";

import { db } from "./client";

interface QuestionPrompt {
	question: string;
	answers: string[];
	correctAnswer: string[];
	explanation?: string | null;
}

interface RawQuestion {
	id: number | string;
	question_plain: string;
	prompt: QuestionPrompt;
	correct_response?: unknown;
}

interface QuizFile {
	quiz_id?: number | string;
	quiz_title?: string;
	questions: RawQuestion[];
}

function cleanAnswer(value: unknown): string {
	if (typeof value !== "string") {
		return "";
	}
	let text = value.trim();
	text = text.replace(/^<p>/i, "");
	text = text.replace(/<\/p>$/i, "");
	return text.trim();
}

function getOptions(raw: RawQuestion): string[] {
	const answers = raw.prompt?.answers;

	if (!answers) {
		return [];
	}

	// answers can be an array of strings or an object map (e.g. { a: "<p>..." })
	if (Array.isArray(answers)) {
		return answers.map((a) => cleanAnswer(a)).filter((a) => a.length > 0);
	}

	if (typeof answers === "object") {
		return Object.keys(answers)
			.sort()
			.map((key) =>
				cleanAnswer((answers as Record<string, unknown>)[key]),
			)
			.filter((a) => a.length > 0);
	}

	return [];
}

function getCorrectAnswers(raw: RawQuestion): string[] {
	const value = raw.correct_response;

	if (!value) {
		return [];
	}

	if (Array.isArray(value)) {
		return value
			.map((v) => String(v).toUpperCase())
			.filter((v) => v.length > 0);
	}

	// single value fallback
	return [String(value).toUpperCase()];
}

function getQuestionType(
	correctAnswers: string[],
): "SINGLE_CHOICE" | "MULTIPLE_CHOICE" {
	return correctAnswers.length > 1 ? "MULTIPLE_CHOICE" : "SINGLE_CHOICE";
}

async function main() {
	const [, , examIdArg, jsonPathArg, sourceArg] = process.argv;

	if (!examIdArg || !jsonPathArg) {
		console.error(
			"Usage: tsx ./prisma/add-questions.ts <examId> <jsonPath> [source]",
		);
		process.exit(1);
	}

	const examId = examIdArg;
	const source = sourceArg ?? "udemy";

	const jsonPath = path.resolve(process.cwd(), jsonPathArg);

	if (!fs.existsSync(jsonPath)) {
		console.error(`JSON file not found at path: ${jsonPath}`);
		process.exit(1);
	}

	const rawText = fs.readFileSync(jsonPath, "utf8");
	// 兼容可能以分号结尾的“类 JSON”文件
	const normalizedText = rawText.trim().replace(/;\s*$/, "");

	let data: QuizFile;
	try {
		data = JSON.parse(normalizedText) as QuizFile;
	} catch (error) {
		console.error("Failed to parse JSON file:", error);
		process.exit(1);
	}

	if (!data.questions || !Array.isArray(data.questions)) {
		console.error("Invalid JSON: 'questions' array is missing");
		process.exit(1);
	}

	console.log(
		`Importing ${data.questions.length} questions for examId='${examId}' from source='${source}'...`,
	);

	let successCount = 0;
	let skipCount = 0;

	for (const raw of data.questions) {
		const questionText = raw.prompt.question?.trim();
		if (!questionText) {
			skipCount += 1;
			continue;
		}

		const options = getOptions(raw);
		const correctAnswer = getCorrectAnswers(raw);
		const explanation = raw.prompt?.explanation ?? null;
		const externalId = `${source}-${raw.id}`;
		const externalSource = source;
		const questionType = getQuestionType(correctAnswer);

		try {
			await db.question.upsert({
				where: { externalId },
				update: {
					examId,
					questionText,
					options,
					correctAnswer,
					explanation,
					externalSource,
					questionType,
				},
				create: {
					examId,
					questionText,
					options,
					correctAnswer,
					explanation,
					externalId,
					externalSource,
					questionType,
				},
			});

			successCount += 1;
		} catch (error) {
			console.error(
				`Failed to upsert question externalId='${externalId}':`,
				error,
			);
		}
	}

	console.log(
		`Done. Imported/updated ${successCount} questions. Skipped ${skipCount} questions without text.`,
	);
}

main()
	.catch((error) => {
		console.error("Unexpected error:", error);
		process.exit(1);
	})
	.finally(async () => {
		await db.$disconnect();
	});
