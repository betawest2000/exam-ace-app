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
import { useUICoding } from "./UICodingContext";

interface SettingsProps {
	initialFileContents?: Record<string, string>;
}

export function Settings({ initialFileContents = {} }: SettingsProps) {
	const t = useTranslations();

	const { framework, questionId, setFileContents } = useUICoding();
	const { resetCode } = useCodeCache();

	const handleResetCode = () => {
		// Get the cache key based on current language
		const cacheKey = `${framework}/${questionId}/`;

		// Clear the cached code
		for (const fileName in initialFileContents) {
			resetCode(`${cacheKey}${fileName}`);
		}

		// Reset the context state to initial values
		setFileContents(initialFileContents);
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
