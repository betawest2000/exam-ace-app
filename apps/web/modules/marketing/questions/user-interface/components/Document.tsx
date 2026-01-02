"use client";

import { SandpackProvider } from "@codesandbox/sandpack-react";
import { MDXContent } from "@content-collections/mdx/react";
import type { UIQuestionFullData } from "@marketing/questions/types";
import { SolutionPreviewButton } from "@marketing/questions/user-interface/components/SolutionPreviewButton";
import { Button } from "@ui/components/button";
import {
	Tabs as NewTabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@ui/components/tabs";
import { File, Files, Folder } from "fumadocs-ui/components/files";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import { SolutionPreview } from "./SolutionPreview";
import { useUICoding } from "./UICodingContext";
import { getTemplateFromFramework } from "./utils";

interface DocumentProps {
	questionFullData: UIQuestionFullData;
}

export function Document({ questionFullData }: DocumentProps) {
	const t = useTranslations();
	const [showSolution, setShowSolution] = React.useState(false);
	const [activeTab, setActiveTab] = React.useState<string>("description");
	const { solution, framework } = useUICoding();
	const template = React.useMemo<"react" | "vue" | "vanilla" | "svelte">(
		() => getTemplateFromFramework(framework),
		[framework],
	);

	return (
		<NewTabs
			value={activeTab}
			onValueChange={setActiveTab}
			className="h-full flex flex-col"
		>
			<TabsList className="mx-3 mt-2 justify-start">
				<TabsTrigger value="description">
					{t("question.tabs.description")}
				</TabsTrigger>
				<TabsTrigger value="solution">
					{t("question.tabs.solution")}
				</TabsTrigger>
				{showSolution && (
					<TabsTrigger value="preview" className="group" asChild>
						<div className="flex items-center">
							{t("question.tabs.preview")}
							<Button
								variant="ghost"
								onClick={(e) => {
									e.stopPropagation();
									setShowSolution(false);
									setActiveTab("description");
								}}
								className="ml-2 p-0.5 size-4 border-0 flex justify-center items-center rounded-sm opacity-70 [&>svg]:mr-0"
							>
								<X className="h-3 w-3" />
								<span className="sr-only">
									Close preview tab
								</span>
							</Button>
						</div>
					</TabsTrigger>
				)}
			</TabsList>
			<TabsContent
				value="description"
				className="flex-1 overflow-auto p-6 mt-0"
			>
				<div className="space-y-4 prose dark:prose-invert max-w-full prose-a:text-foreground prose-p:text-foreground/80">
					<h1>{questionFullData.questionTitle}</h1>
					<MDXContent
						code={questionFullData.descriptionContent}
						// @ts-expect-error
						components={{
							...defaultMdxComponents,
							Tabs,
							Tab,
							Steps,
							Step,
							File,
							Folder,
							Files,
							img: (props) => (
								<ImageZoom
									{...(props as any)}
									className="rounded-lg border-4 border-secondary/10"
								/>
							),
						}}
					/>
					<SolutionPreviewButton
						onClick={() => {
							setShowSolution(true);
							setActiveTab("preview");
						}}
					/>
				</div>
			</TabsContent>
			<TabsContent
				value="solution"
				className="flex-1 overflow-auto p-6 mt-0"
			>
				<div className="space-y-4 prose dark:prose-invert max-w-full prose-a:text-foreground prose-p:text-foreground/80">
					<h1>{questionFullData.solutionTitle}</h1>
					<MDXContent
						code={questionFullData.solutionContent}
						// @ts-expect-error
						components={{
							...defaultMdxComponents,
							Tabs,
							Tab,
							Steps,
							Step,
							File,
							Folder,
							Files,
							img: (props) => (
								<ImageZoom
									{...(props as any)}
									className="rounded-lg border-4 border-secondary/10"
								/>
							),
						}}
					/>
				</div>
			</TabsContent>
			{showSolution && (
				<div
					className={`h-full overflow-auto ${activeTab === "preview" ? "block" : "hidden"}`}
				>
					<SandpackProvider
						template={template}
						files={solution}
						options={
							{
								// bundlerURL: SANDPACK_BUNDLER_URL,
								// id: `solution-${questionFullData.id}-${framework}`,
							}
						}
					>
						<SolutionPreview />
					</SandpackProvider>
				</div>
			)}
		</NewTabs>
	);
}
