"use client";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ui/components/select";
import * as React from "react";

import { useTests } from "./TestsContext";
import type { Language } from "./types";

interface LanguageSelectorProps {
	/**
	 * Current selected language
	 */
	initialLanguage?: Language;
	/**
	 * Additional class names
	 */
	className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
	initialLanguage,
	className,
}) => {
	const { setLanguage } = useTests();
	const [value, setValue] = React.useState<Language>(
		initialLanguage ?? "typescript",
	);

	const onChange = React.useCallback(
		(lang: Language) => {
			setLanguage(lang);
			setValue(lang);
		},
		[setLanguage],
	);
	return (
		<Select value={value} onValueChange={onChange}>
			<SelectTrigger className={className}>
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="typescript">TypeScript</SelectItem>
				<SelectItem value="javascript">JavaScript</SelectItem>
			</SelectContent>
		</Select>
	);
};
