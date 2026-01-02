"use client";

import { useCodeCache } from "@marketing/questions/shared/hooks/useCodeCache";
import { Button } from "@ui/components/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@ui/components/dropdown-menu";
import { RotateCcw, Settings as SettingsIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTests } from "./TestsContext";

interface SettingsProps {
	initialJavaScriptCode?: string;
	initialTypeScriptCode?: string;
}

export function Settings({
	initialJavaScriptCode = "",
	initialTypeScriptCode = "",
}: SettingsProps) {
	const t = useTranslations();

	const { language, questionId, setJavascriptCode, setTypescriptCode } =
		useTests();
	const { resetCode } = useCodeCache();

	const handleResetCode = () => {
		// Get the cache key based on current language
		const cacheKey = `js/${questionId}.${language === "javascript" ? "js" : "ts"}`;

		// Clear the cached code
		resetCode(cacheKey);

		// Reset the context state to initial values
		if (language === "javascript") {
			setJavascriptCode(initialJavaScriptCode);
		} else if (language === "typescript") {
			setTypescriptCode(initialTypeScriptCode);
		}
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon" className="size-8">
					<SettingsIcon className="size-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="start">
				{/* <DropdownMenuItem>
					<LayoutGrid className="h-4 w-4 mr-2" />
					{t("question.label.layout")}
				</DropdownMenuItem> */}
				<DropdownMenuItem onClick={handleResetCode}>
					<RotateCcw className="h-4 w-4 mr-2" />
					{t("question.label.resetQuestionCodeToDefault")}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
