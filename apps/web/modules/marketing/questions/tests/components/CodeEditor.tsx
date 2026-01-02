"use client";

import { useCodeCache } from "@marketing/questions/shared/hooks/useCodeCache";
import Editor from "@monaco-editor/react";
import { useTheme } from "next-themes";
import * as React from "react";
import { useTests } from "./TestsContext";

interface CodeEditorProps {
	readOnly?: boolean;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ readOnly = false }) => {
	const {
		javascriptCode,
		typescriptCode,
		setJavascriptCode,
		setTypescriptCode,
		language,
		questionId,
	} = useTests();

	const { resolvedTheme: appTheme } = useTheme();

	// Handle theme based on system preference
	const [theme, setTheme] = React.useState<string>("vs-dark");

	React.useEffect(() => {
		if (appTheme === "dark") {
			setTheme("vs-dark");
		} else {
			setTheme("vs-light");
		}
	}, [appTheme, setTheme]);

	const catchKey = React.useMemo(() => {
		return `js/${questionId}.${language === "javascript" ? "js" : "ts"}`;
	}, [questionId, language]);

	const { getCode, storeCode } = useCodeCache();

	const [code, setCode] = React.useState(() => {
		const currentCode =
			language === "javascript" ? javascriptCode : typescriptCode;
		return getCode(catchKey) ?? currentCode;
	});

	// Update editor when context code changes (e.g., when reset is triggered)
	React.useEffect(() => {
		const currentCode =
			language === "javascript" ? javascriptCode : typescriptCode;
		const cachedCode = getCode(catchKey);

		// If there's no cached code, use the context code (e.g., after reset)
		if (!cachedCode) {
			setCode(currentCode);
		} else {
			setCode(cachedCode);
		}
	}, [language, javascriptCode, typescriptCode, catchKey, getCode]);

	const updateCode = React.useCallback(
		(value: string | undefined) => {
			const newCode = value || "";

			// Update local state
			setCode(newCode);

			// Update context state
			if (language === "javascript") {
				setJavascriptCode(newCode);
			} else if (language === "typescript") {
				setTypescriptCode(newCode);
			}

			// Update code in cache
			storeCode(catchKey, newCode);
		},
		[
			setCode,
			language,
			setJavascriptCode,
			setTypescriptCode,
			storeCode,
			catchKey,
		],
	);

	return (
		<Editor
			height="100%"
			defaultLanguage={language}
			language={language}
			theme={theme}
			value={code}
			onChange={updateCode}
			options={{
				minimap: { enabled: false },
				fontSize: 12,
				lineNumbers: "on",
				roundedSelection: false,
				scrollBeyondLastLine: false,
				readOnly,
				automaticLayout: true,
				tabSize: 2,
				wordWrap: "on",
			}}
		/>
	);
};
