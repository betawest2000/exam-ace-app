"use client";

import { useCodeCache } from "@marketing/questions/shared/hooks/useCodeCache";
import Editor from "@monaco-editor/react";
import { Tabs, TabsList, TabsTrigger } from "@ui/components/tabs";
import { useTheme } from "next-themes";
import * as React from "react";
import { useUICoding } from "./UICodingContext";

interface CodeEditorProps {
	readOnly?: boolean;
}

const getLanguageByFileName = (fileName: string): string => {
	const extension = fileName.split(".").pop();
	switch (extension) {
		case "js":
		case "jsx":
			return "javascript";
		case "ts":
		case "tsx":
			return "typescript";
		case "html":
			return "html";
		case "css":
			return "css";
		case "json":
			return "json";
		case "md":
			return "markdown";
		case "py":
			return "python";
		case "java":
			return "java";
		case "rb":
			return "ruby";
		case "go":
			return "go";
		default:
			return "plaintext";
	}
};

export const CodeEditor: React.FC<CodeEditorProps> = ({ readOnly = false }) => {
	const { framework, fileContents, questionId, updateFile } = useUICoding();

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

	const cacheKeyPrefix = React.useMemo(
		() => `${framework}/${questionId}`,
		[framework, questionId],
	);

	const { getCode, storeCode } = useCodeCache();

	// Merge code for different files by cache and initial contents
	const [code, setCode] = React.useState<Record<string, string>>({});

	// Update editor when context code changes (e.g., when reset is triggered)
	React.useEffect(() => {
		const allCode = {} as Record<string, string>;
		for (const [file, content] of Object.entries(fileContents)) {
			// Process each file here
			allCode[file] = getCode(`${cacheKeyPrefix}/${file}`) || content;
		}

		setCode(allCode);
	}, [framework, fileContents, cacheKeyPrefix, getCode]);

	const [activeFile, setActiveFile] = React.useState<string>(
		Object.keys(fileContents)[0] || "",
	);

	const updateCode = React.useCallback(
		(value: string | undefined) => {
			const newCode = value || "";

			updateFile(activeFile, newCode);

			// Update code in cache
			storeCode(`${cacheKeyPrefix}/${activeFile}`, newCode);
		},
		[setCode, framework, updateFile, activeFile, storeCode, cacheKeyPrefix],
	);

	return (
		<Tabs
			value={activeFile}
			onValueChange={setActiveFile}
			className="h-full flex flex-col"
		>
			<TabsList className="mx-3 mt-2 justify-start">
				{Object.keys(code).map((fileName) => (
					<TabsTrigger key={fileName} value={fileName}>
						{fileName.split("/").pop()}
					</TabsTrigger>
				))}
			</TabsList>
			<div className="flex-1 overflow-auto mt-2">
				<Editor
					height="100%"
					path={activeFile}
					defaultLanguage={getLanguageByFileName(activeFile)}
					language={getLanguageByFileName(activeFile)}
					theme={theme}
					value={code[activeFile]}
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
			</div>
		</Tabs>
	);
};
