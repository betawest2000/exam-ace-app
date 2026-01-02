import { MDXContent } from "@content-collections/mdx/react";
import { TestsProvider } from "@marketing/questions/tests/components/TestsContext";
import type { Language } from "@marketing/questions/tests/components/types";
import { Workspace } from "@marketing/questions/tests/components/Workspace";
import type { Question, QuestionFullData } from "@marketing/questions/types";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@ui/components/resizable";
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
import { useTranslations } from "next-intl";
import { ToolBar } from "./ToolBar";

export function QuestionLayout({
	initialLanguage,
	questionFullData,
	allQuestions,
}: {
	initialLanguage?: Language;
	allQuestions: Question[];
	questionFullData: QuestionFullData;
}) {
	const t = useTranslations();

	return (
		<TestsProvider
			style={{
				height: "100vh",
				overflow: "hidden",
				paddingTop: "5rem",
			}}
			category={questionFullData.category}
			questionId={questionFullData.id}
			initialJavascriptTestFileName={questionFullData.jsTestFileName}
			initialTypescriptTestFileName={questionFullData.tsTestFileName}
			initialJavascriptTestFileContent={questionFullData.jsTestCode}
			initialTypescriptTestFileContent={questionFullData.tsTestCode}
			initialJavaScriptCode={questionFullData.jsCode}
			initialTypeScriptCode={questionFullData.tsCode}
			initialLanguage={initialLanguage}
		>
			<div className="flex flex-col h-full">
				{/* Resizable content area */}
				<div className="flex-1 overflow-hidden">
					<ResizablePanelGroup direction="horizontal">
						{/* Left panel - Description */}
						<ResizablePanel
							defaultSize={40}
							minSize={20}
							className="mr-1 ml-2"
						>
							<NewTabs
								defaultValue="description"
								className="h-full flex flex-col"
							>
								<TabsList className="mx-3 mt-2 justify-start">
									<TabsTrigger value="description">
										{t("question.tabs.description")}
									</TabsTrigger>
									<TabsTrigger value="solution">
										{t("question.tabs.solution")}
									</TabsTrigger>
								</TabsList>
								<TabsContent
									value="description"
									className="flex-1 overflow-auto p-6 mt-0"
								>
									<div className="space-y-4 prose dark:prose-invert max-w-full prose-a:text-foreground prose-p:text-foreground/80">
										<h1>
											{questionFullData.questionTitle}
										</h1>
										<MDXContent
											code={
												questionFullData.descriptionContent
											}
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
								<TabsContent
									value="solution"
									className="flex-1 overflow-auto p-6 mt-0"
								>
									<div className="space-y-4 prose dark:prose-invert max-w-full prose-a:text-foreground prose-p:text-foreground/80">
										<h1>
											{questionFullData.solutionTitle}
										</h1>
										<MDXContent
											code={
												questionFullData.solutionContent
											}
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
							</NewTabs>
							;
						</ResizablePanel>

						<ResizableHandle withHandle className="bg-background" />

						{/* Right panel - Code editor */}
						<ResizablePanel
							defaultSize={60}
							minSize={30}
							className="ml-1 mr-2"
						>
							<Workspace />
						</ResizablePanel>
					</ResizablePanelGroup>
				</div>

				{/* Fixed toolbar at bottom */}
				<ToolBar
					initialLanguage={initialLanguage}
					initialJavaScriptCode={questionFullData.jsCode}
					initialTypeScriptCode={questionFullData.tsCode}
					allQuestions={allQuestions}
				/>
			</div>
		</TestsProvider>
	);
}
