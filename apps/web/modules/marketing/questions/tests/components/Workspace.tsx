"use client";

import { CodeEditor } from "@marketing/questions/tests/components/CodeEditor";
import { Preview } from "@marketing/questions/tests/components/Preview";
import { TestCasesEditor } from "@marketing/questions/tests/components/TestCasesEditor";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@ui/components/resizable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/components/tabs";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { Console } from "./Console";
import { useTests } from "./TestsContext";

export function Workspace() {
	const t = useTranslations();
	const [activeTab, setActiveTab] = useState("code");
	const { testFileName } = useTests();

	const openTestCasesTab = React.useCallback(
		(file: string) => {
			if (file === `/${testFileName}`) {
				setActiveTab("testCases");
			}
		},
		[testFileName],
	);

	return (
		<ResizablePanelGroup direction="vertical">
			<ResizablePanel defaultSize={50} minSize={20} className="mb-1">
				<Tabs
					value={activeTab}
					onValueChange={setActiveTab}
					className="h-full flex flex-col"
				>
					<TabsList className="mx-3 mt-2 justify-start">
						<TabsTrigger value="code">
							{t("question.tabs.code")}
						</TabsTrigger>
						<TabsTrigger value="testCases">
							{t("question.tabs.testCases")}
						</TabsTrigger>
					</TabsList>
					<TabsContent
						value="code"
						className="flex-1 overflow-auto p-6 mt-0"
					>
						<CodeEditor />
					</TabsContent>
					<TabsContent
						value="testCases"
						className="flex-1 overflow-auto p-6 mt-0"
					>
						<TestCasesEditor />
					</TabsContent>
				</Tabs>
			</ResizablePanel>

			<ResizableHandle withHandle className="bg-background" />

			<ResizablePanel defaultSize={50} minSize={20} className="mt-1">
				<Tabs defaultValue="runTests" className="h-full flex flex-col">
					<TabsList className="mx-3 mt-2 justify-start">
						<TabsTrigger value="runTests">
							{t("question.tabs.runTests")}
						</TabsTrigger>
						<TabsTrigger value="console">
							{t("question.tabs.console")}
						</TabsTrigger>
					</TabsList>
					<TabsContent
						value="runTests"
						className="flex-1 overflow-auto p-6 mt-0"
					>
						<Preview openSpec={openTestCasesTab} />
					</TabsContent>
					<TabsContent
						value="console"
						className="flex-1 overflow-auto p-6 mt-0"
					>
						<Console />
					</TabsContent>
				</Tabs>
			</ResizablePanel>
		</ResizablePanelGroup>
	);
}
