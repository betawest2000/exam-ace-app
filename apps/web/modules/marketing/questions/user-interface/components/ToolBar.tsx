"use client";

import { QuestionSelector } from "@marketing/questions/shared/components/QuestionSelector";
import type { Question } from "@marketing/questions/types";
import React from "react";
import { FrameworkSelector } from "./FrameworkSelector";
import { Settings } from "./Settings";
import type { Framework } from "./types";
import { useUICoding } from "./UICodingContext";

interface ToolBarProps {
	initialFramework?: Framework;
	initialReactFileContents?: Record<string, string>;
	allQuestions: Question[];
}

export function ToolBar({
	initialFramework,
	initialReactFileContents,
	allQuestions,
}: ToolBarProps) {
	const { questionId } = useUICoding();
	const initialFileContents = React.useMemo(() => {
		if (initialFramework === "react") {
			return initialReactFileContents || {};
		}
		return {};
	}, [initialFramework, initialReactFileContents]);
	return (
		<div className="border-t bg-background">
			<div className="grid grid-cols-3 items-center px-4 py-2">
				<div className="flex items-center gap-2 justify-start">
					<Settings initialFileContents={initialFileContents} />
					<FrameworkSelector
						className="text-xs h-8 px-2 w-auto"
						initialFramework={initialFramework}
					/>
				</div>

				<div className="flex justify-center">
					<QuestionSelector
						questions={allQuestions}
						category="user-interface"
						questionId={questionId}
					/>
				</div>

				{/* <div className="flex items-center gap-2 justify-end">
					<RunButton />
				</div> */}
			</div>
		</div>
	);
}
