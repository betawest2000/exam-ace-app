"use client";

import { SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react";
import { SANDPACK_BUNDLER_URL } from "@marketing/questions/shared/lib/constants";
import { useUICoding } from "@marketing/questions/user-interface/components/UICodingContext";
import { Tabs, TabsList, TabsTrigger } from "@ui/components/tabs";
import { useTranslations } from "next-intl";
import React from "react";
import { Console } from "./Console";
import { getTemplateFromFramework } from "./utils";

export const Preview: React.FC = () => {
	const { framework, fileContents } = useUICoding();
	const [activeTab, setActiveTab] = React.useState<string>("preview");
	const template = React.useMemo<"react" | "vue" | "vanilla" | "svelte">(
		() => getTemplateFromFramework(framework),
		[framework],
	);
	const t = useTranslations();
	return (
		<SandpackProvider
			template={template}
			files={fileContents}
			options={{ bundlerURL: SANDPACK_BUNDLER_URL }}
		>
			<Tabs
				value={activeTab}
				onValueChange={setActiveTab}
				className="h-full flex flex-col"
			>
				<TabsList className="mx-3 mt-2 justify-start">
					<TabsTrigger value="preview">
						{t("question.tabs.preview")}
					</TabsTrigger>
					<TabsTrigger value="console">
						{t("question.tabs.console")}
					</TabsTrigger>
				</TabsList>
				<div
					className={`flex-1 overflow-auto p-6 mt-0 ${
						activeTab === "preview" ? "block" : "hidden"
					}`}
				>
					<SandpackPreview showOpenInCodeSandbox={false} />
				</div>
				<div
					className={`flex-1 overflow-auto p-6 mt-0 ${
						activeTab === "console" ? "block" : "hidden"
					}`}
				>
					<Console />
				</div>
			</Tabs>
		</SandpackProvider>
	);
};
