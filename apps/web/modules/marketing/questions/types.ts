export type Status = "initialising" | "idle" | "running" | "complete";
export type Language = "javascript" | "typescript";
export type Category =
	| "algorithms"
	| "javascript"
	| "user-interface"
	| "system-design";

export type Difficulty = "easy" | "medium" | "hard";

export interface Question {
	id: string;
	name: string;
	category: Category;
	description: string;
	difficulty: Difficulty;
	isPremium?: boolean;
	createdAt?: string;
	updatedAt?: string;
	relatedQuestions?: string[];
	companies?: string[];
	tags?: string[];
	topics?: string[];
}
export interface QuestionWithContent extends Question {
	questionTitle: string;
	solutionTitle: string;
	descriptionContent: string;
	solutionContent: string;
}
export interface UIQuestionFullData extends QuestionWithContent {
	reactStarterCode: Record<string, string>;
	reactSolutionCode: Record<string, string>;
}

export interface UIQuestionCodeData {
	starter: Record<string, string>;
	solution: Record<string, string>;
}

export interface UIQuestionCode {
	react: UIQuestionCodeData;
}

export interface QuestionFullData extends QuestionWithContent {
	jsCode: string;
	tsCode: string;
	jsTestCode: string;
	tsTestCode: string;
	jsTestFileName: string;
	tsTestFileName: string;
}

export type QuestionStats = {
	byCategory: Record<string, number>;
	byCompany: Record<string, number>;
};
