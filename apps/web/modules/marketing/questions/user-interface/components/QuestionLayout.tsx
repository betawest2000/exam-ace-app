import type { Question, UIQuestionFullData } from "@marketing/questions/types";
import { Preview } from "@marketing/questions/user-interface/components/Preview";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@ui/components/resizable";
import { useTranslations } from "next-intl";
import { CodeEditor } from "./CodeEditor";
import { Document } from "./Document";
import { ToolBar } from "./ToolBar";
import type { Framework } from "./types";
import { UICodingProvider } from "./UICodingContext";

export function QuestionLayout({
	initialFramework,
	questionFullData,
	allQuestions,
}: {
	initialFramework?: Framework;
	allQuestions: Question[];
	questionFullData: UIQuestionFullData;
}) {
	const t = useTranslations();

	return (
		<UICodingProvider
			questionId={questionFullData.id}
			initialFramework={initialFramework}
			reactStarterCode={questionFullData.reactStarterCode}
			reactSolutionCode={questionFullData.reactSolutionCode}
		>
			<div className="flex flex-col h-screen overflow-hidden pt-20">
				{/* Resizable content area */}
				<div className="flex-1 overflow-hidden">
					<ResizablePanelGroup direction="horizontal">
						{/* Left panel - Description */}
						<ResizablePanel
							defaultSize={33}
							minSize={15}
							className="mr-1 ml-2"
						>
							<Document questionFullData={questionFullData} />
						</ResizablePanel>

						<ResizableHandle withHandle className="bg-background" />

						{/* Middle panel - Code editor */}
						<ResizablePanel
							defaultSize={33}
							minSize={15}
							className="ml-1 mr-2"
						>
							<CodeEditor />
						</ResizablePanel>

						<ResizableHandle withHandle className="bg-background" />

						{/* Right panel - UI Preview */}
						<ResizablePanel
							defaultSize={34}
							minSize={15}
							className="ml-1 mr-2"
						>
							<Preview />
						</ResizablePanel>
					</ResizablePanelGroup>
				</div>

				{/* Fixed toolbar at bottom */}
				<ToolBar
					initialFramework={initialFramework}
					initialReactFileContents={questionFullData.reactStarterCode}
					allQuestions={allQuestions}
				/>
			</div>
		</UICodingProvider>
	);
}
