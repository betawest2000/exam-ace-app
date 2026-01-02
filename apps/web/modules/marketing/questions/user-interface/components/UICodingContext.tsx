"use client";

import * as React from "react";
import type { Framework } from "./types";

interface UICodingContextValue {
	framework: Framework;
	setFramework: (framework: Framework) => void;
	questionId: string;
	fileContents: Record<string, string>;
	solution: Record<string, string>;
	setFileContents: (contents: Record<string, string>) => void;
	getFile: (fileName: string) => string;
	updateFile: (fileName: string, content: string) => void;
}

const UICodingContext = React.createContext<UICodingContextValue | undefined>(
	undefined,
);

export const UICodingProvider: React.FC<{
	children: React.ReactNode;
	initialFramework?: Framework;
	reactStarterCode?: Record<string, string>;
	reactSolutionCode?: Record<string, string>;
	questionId: string;
}> = ({
	children,
	initialFramework,
	reactStarterCode,
	reactSolutionCode,
	questionId,
}) => {
	const [framework, setFramework] = React.useState<Framework>(
		initialFramework ?? "react",
	);

	const initialFileContents = React.useMemo(() => {
		if (framework === "react") {
			return reactStarterCode || {};
		}
		return {};
	}, [framework, reactStarterCode]);

	const solution = React.useMemo(() => {
		if (framework === "react") {
			return reactSolutionCode || {};
		}
		return {};
	}, [framework, reactSolutionCode]);

	const [fileContents, setFileContents] =
		React.useState<Record<string, string>>(initialFileContents);

	const getFile = React.useCallback(
		(fileName: string): string => {
			return fileContents[fileName] || "";
		},
		[fileContents],
	);

	const updateFile = React.useCallback(
		(fileName: string, content: string): void => {
			setFileContents((prevContents) => ({
				...prevContents,
				[fileName]: content,
			}));
		},
		[],
	);
	const value = React.useMemo(
		() => ({
			framework,
			setFramework,
			questionId,
			fileContents,
			setFileContents,
			getFile,
			updateFile,
			solution,
		}),
		[
			framework,
			setFramework,
			questionId,
			fileContents,
			setFileContents,
			getFile,
			updateFile,
			solution,
		],
	);
	return (
		<UICodingContext.Provider value={value}>
			{children}
		</UICodingContext.Provider>
	);
};

export const useUICoding = (): UICodingContextValue => {
	const context = React.useContext(UICodingContext);
	if (context === undefined) {
		throw new Error("useUICoding must be used within a UICodingProvider");
	}
	return context;
};
