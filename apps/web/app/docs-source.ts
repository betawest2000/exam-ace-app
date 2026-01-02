import { createMDXSource } from "@fumadocs/content-collections";
import type { Question, QuestionStats } from "@marketing/questions/types";
import { config } from "@repo/config";
import {
	allDocs,
	allDocsMetas,
	allQuestions,
	allQuestionsMetas,
} from "content-collections";
import { loader } from "fumadocs-core/source";
import { Home } from "lucide-react";
import { createElement } from "react";

export const docsSource = loader({
	baseUrl: "/docs",
	i18n: {
		defaultLanguage: config.i18n.defaultLocale,
		languages: Object.keys(config.i18n.locales),
	},
	source: createMDXSource(allDocs, allDocsMetas),
	icon(icon) {
		if (!icon) {
			return;
		}

		const icons = {
			Home,
		};

		if (icon in icons) {
			return createElement(icons[icon as keyof typeof icons]);
		}
	},
});

export const questionsSource = loader({
	baseUrl: "/questions",
	i18n: {
		defaultLanguage: config.i18n.defaultLocale,
		languages: Object.keys(config.i18n.locales),
	},
	source: createMDXSource(allQuestions, allQuestionsMetas),
	icon(icon) {
		if (!icon) {
			return;
		}

		const icons = {
			Home,
		};

		if (icon in icons) {
			return createElement(icons[icon as keyof typeof icons]);
		}
	},
});

export const getAllQuestions = (
	locale: string | undefined,
	includeAllInfos = false,
): Question[] => {
	const questions = [] as Question[];
	questionsSource.getPages(locale).forEach((doc) => {
		const fileName = doc.data._meta.fileName;
		if (fileName.startsWith("description") && fileName.endsWith(".mdx")) {
			const paths = doc.data._meta.directory.split("/");
			const category = paths[0];
			const id = paths[paths.length - 1];
			const basicInfo = {
				id,
				category,
				name: doc.data.title,
				difficulty: doc.data.difficulty || "easy",
				description: doc.data.description || "",
				isPremium: doc.data.premium || false,
				createdAt: doc.data.createdAt,
				updatedAt: doc.data.updatedAt,
				relatedQuestions: doc.data.relatedQuestions ?? [],
				tags: doc.data.tags ?? [],
				topics: doc.data.topics ?? [],
			} as Question;

			// Add more infos if required
			if (includeAllInfos) {
				basicInfo.companies = doc.data.companies ?? [];
			}

			// Push to questions array
			questions.push(basicInfo);
		}
	});

	return questions;
};

export const getQuestionStats = (locale: string | undefined): QuestionStats => {
	const byCategory = {
		javascript: 0,
		algorithms: 0,
		"user-interface": 0,
		"system-design": 0,
		quiz: 0,
		behavioral: 0,
	} as Record<string, number>;

	const byCompany = {} as Record<string, number>;
	questionsSource.getPages(locale).forEach((doc) => {
		const fileName = doc.data._meta.fileName;
		if (fileName.startsWith("description") && fileName.endsWith(".mdx")) {
			const paths = doc.data._meta.directory.split("/");
			const category = paths[0];
			if (byCategory[category] !== undefined) {
				byCategory[category] = byCategory[category] + 1;
			}

			const companies: string[] = doc.data.companies ?? [];
			companies.forEach((company) => {
				if (byCompany[company] === undefined) {
					byCompany[company] = 1;
				} else {
					byCompany[company] = byCompany[company] + 1;
				}
			});
		}
	});

	return {
		byCategory,
		byCompany,
	};
};
