export type ExamCompany =
	| "Amazon"
	| "Microsoft"
	| "Google"
	| "CompTIA"
	| "Cisco"
	| "ITIL"
	| "PMI"
	| "Oracle"
	| "Salesforce";

export type Difficulty = "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "EXPERT";

export interface Exam {
	id: string;
	title: string;
	company?: ExamCompany;
	difficulty: Difficulty;
	description?: string;
	tags?: string[];
	createdAt?: string;
	updatedAt?: string;
}
