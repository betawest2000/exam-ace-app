"use client";

import Editor from "@monaco-editor/react";
import { useTheme } from "next-themes";
import * as React from "react";
import { useTests } from "./TestsContext";

interface TestCasesEditorProps {
	readOnly?: boolean;
}

export const TestCasesEditor: React.FC<TestCasesEditorProps> = ({
	readOnly = true,
}) => {
	const { testFileContent, testFileName } = useTests();
	const { resolvedTheme: appTheme } = useTheme();

	// Handle theme based on system preference
	const [theme, setTheme] = React.useState<string>("vs-dark");
	const language = testFileName.endsWith(".ts") ? "typescript" : "javascript";

	React.useEffect(() => {
		if (appTheme === "dark") {
			setTheme("vs-dark");
		} else {
			setTheme("vs-light");
		}
	}, [appTheme, setTheme]);

	return (
		<Editor
			height="100%"
			defaultLanguage={language}
			language={language}
			theme={theme}
			value={testFileContent}
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
