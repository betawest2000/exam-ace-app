"use client";

import { SandpackProvider } from "@codesandbox/sandpack-react";
import { SANDPACK_BUNDLER_URL } from "@marketing/questions/shared/lib/constants";
import type { Category } from "@marketing/questions/types";
import * as React from "react";
import type { Spec } from "./Specs";
import type { Language, Status } from "./types";

interface TestsContextValue {
	specs: Spec[];
	status: Status;
	language: Language;
	javascriptCode: string;
	typescriptCode: string;
	questionId: string;
	category: Category;
	testFileName: string;
	testFileContent: string;
	javascriptTestFileName: string;
	typescriptTestFileName: string;
	javascriptTestFileContent: string;
	typescriptTestFileContent: string;
	setSpecs: (specs: Spec[]) => void;
	setStatus: (status: Status) => void;
	setLanguage: (language: Language) => void;
	setJavascriptCode: (code: string) => void;
	setTypescriptCode: (code: string) => void;
	setJavascriptTestFileName: (name: string) => void;
	setTypescriptTestFileName: (name: string) => void;
	setJavascriptTestFileContent: (content: string) => void;
	setTypescriptTestFileContent: (content: string) => void;
}

const TestsContext = React.createContext<TestsContextValue | undefined>(
	undefined,
);

export const TestsProvider: React.FC<{
	children: React.ReactNode;
	className?: string;
	questionId: string;
	category: Category;
	initialLanguage?: Language;
	initialJavascriptTestFileName: string;
	initialTypescriptTestFileName: string;
	initialJavascriptTestFileContent: string;
	initialTypescriptTestFileContent: string;
	initialJavaScriptCode?: string;
	initialTypeScriptCode?: string;
	style?: React.CSSProperties;
}> = ({
	children,
	className,
	style,
	questionId,
	category,
	initialLanguage,
	initialJavascriptTestFileName,
	initialTypescriptTestFileName,
	initialJavascriptTestFileContent,
	initialTypescriptTestFileContent,
	initialJavaScriptCode,
	initialTypeScriptCode,
}) => {
	const [specs, setSpecs] = React.useState<Spec[]>([]);
	const [status, setStatus] = React.useState<Status>("idle");
	const [language, setLanguage] = React.useState<Language>(
		initialLanguage ?? "javascript",
	);
	const [javascriptCode, setJavascriptCode] = React.useState<string>(
		initialJavaScriptCode ?? "",
	);
	const [typescriptCode, setTypescriptCode] = React.useState<string>(
		initialTypeScriptCode ?? "",
	);
	const [javascriptTestFileName, setJavascriptTestFileName] =
		React.useState<string>(initialJavascriptTestFileName);
	const [typescriptTestFileName, setTypescriptTestFileName] =
		React.useState<string>(initialTypescriptTestFileName);
	const [javascriptTestFileContent, setJavascriptTestFileContent] =
		React.useState<string>(initialJavascriptTestFileContent);
	const [typescriptTestFileContent, setTypescriptTestFileContent] =
		React.useState<string>(initialTypescriptTestFileContent);

	const testFileName = React.useMemo(
		() =>
			language === "typescript"
				? typescriptTestFileName
				: javascriptTestFileName,
		[language, typescriptTestFileName, javascriptTestFileName],
	);
	const testFileContent = React.useMemo(
		() =>
			language === "typescript"
				? typescriptTestFileContent
				: javascriptTestFileContent,
		[language, typescriptTestFileContent, javascriptTestFileContent],
	);

	const value = React.useMemo(
		() => ({
			specs,
			status,
			setSpecs,
			setStatus,
			language,
			setLanguage,
			javascriptCode,
			setJavascriptCode,
			typescriptCode,
			setTypescriptCode,
			questionId,
			category,
			testFileName,
			testFileContent,
			javascriptTestFileName,
			typescriptTestFileName,
			javascriptTestFileContent,
			typescriptTestFileContent,
			setJavascriptTestFileName,
			setTypescriptTestFileName,
			setJavascriptTestFileContent,
			setTypescriptTestFileContent,
		}),
		[
			specs,
			status,
			language,
			category,
			javascriptCode,
			typescriptCode,
			questionId,
			testFileName,
			testFileContent,
			javascriptTestFileName,
			typescriptTestFileName,
			javascriptTestFileContent,
			typescriptTestFileContent,
		],
	);

	const files = React.useMemo(() => {
		const starterFiles = {} as Record<string, string>;
		// Add the code file based on the question name and language
		if (questionId) {
			const codeFileName =
				language === "typescript"
					? `/${questionId}.ts`
					: `/${questionId}.js`;
			const codeFileContent =
				language === "typescript" ? typescriptCode : javascriptCode;
			starterFiles[`${codeFileName}`] = codeFileContent;
		}

		// Add the test file if provided
		if (testFileName) {
			starterFiles[`/${testFileName}`] = testFileContent;
		}

		return starterFiles;
	}, [
		language,
		typescriptCode,
		javascriptCode,
		questionId,
		testFileName,
		testFileContent,
	]);

	return (
		<SandpackProvider
			template="test-ts"
			files={files}
			options={{
				bundlerURL: SANDPACK_BUNDLER_URL,
				visibleFiles: Object.keys(files),
				activeFile: `/${testFileName}`,
			}}
			className={className}
			style={style}
		>
			<TestsContext.Provider value={value}>
				{children}
			</TestsContext.Provider>
		</SandpackProvider>
	);
};

export const useTests = (): TestsContextValue => {
	const context = React.useContext(TestsContext);
	if (context === undefined) {
		throw new Error("useTests must be used within a TestsProvider");
	}
	return context;
};
