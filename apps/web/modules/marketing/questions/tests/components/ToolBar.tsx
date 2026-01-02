"use client";

import { QuestionSelector } from "@marketing/questions/shared/components/QuestionSelector";
import type { Question } from "@marketing/questions/types";
import { useTests } from "../components/TestsContext";
import { LanguageSelector } from "./LanguageSelector";
import { RunButton } from "./RunButton";
import { Settings } from "./Settings";
import type { Language } from "./types";

interface ToolBarProps {
	initialLanguage?: Language;
	initialJavaScriptCode?: string;
	initialTypeScriptCode?: string;
	allQuestions: Question[];
}

export function ToolBar({
	initialLanguage,
	initialJavaScriptCode,
	initialTypeScriptCode,
	allQuestions,
}: ToolBarProps) {
	const { questionId, category } = useTests();
	return (
		<div className="border-t bg-background">
			<div className="grid grid-cols-3 items-center px-4 py-2">
				<div className="flex items-center gap-2 justify-start">
					<Settings
						initialJavaScriptCode={initialJavaScriptCode}
						initialTypeScriptCode={initialTypeScriptCode}
					/>
					<LanguageSelector
						className="text-xs h-8 px-2 w-auto bg-background text-foreground"
						initialLanguage={initialLanguage}
					/>
				</div>

				<div className="flex justify-center">
					<QuestionSelector
						questions={allQuestions}
						questionId={questionId}
						category={category}
					/>
				</div>

				<div className="flex items-center gap-2 justify-end">
					<RunButton />
				</div>
			</div>
		</div>
	);
}
