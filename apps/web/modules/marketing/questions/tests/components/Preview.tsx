"use client";

import { useSandpackClient } from "@codesandbox/sandpack-react";
import { useTranslations } from "next-intl";
import * as React from "react";
import { Specs } from "./Specs";
import { Summary } from "./Summary";
import { useTests } from "./TestsContext";
import { getAllSuiteResults, getAllTestResults, getDuration } from "./utils";

interface PreviewProps {
	/**
	 * Hide the tests and supress logs
	 * If `true` the tests will be hidden and the logs will be supressed. This is useful when you want to run tests in the background and don't want to show the tests to the user.
	 * @default false
	 */
	hideTestsAndSupressLogs?: boolean;
	openSpec?: (file: string) => void;
	verbose?: boolean;
}

export const Preview: React.FC<PreviewProps> = ({
	hideTestsAndSupressLogs,
	openSpec,
	verbose,
}) => {
	const t = useTranslations();
	const { specs: allSpecs, status, testFileName } = useTests();
	// const testFileRegex = /.*\.(test|spec)\.[tj]s?$/;
	const { sandpack } = useSandpackClient();
	sandpack.bundlerState?.transpiledModules;
	const defaultOpenSpec = React.useCallback(
		(file: string) => {
			sandpack.openFile(file);
		},
		[sandpack],
	);

	const specs = allSpecs.filter((spec) => spec.name === `/${testFileName}`);

	const duration = getDuration(specs);
	const testResults = getAllTestResults(specs);
	const suiteResults = getAllSuiteResults(specs);

	return (
		<div className={containerClassName.toString()}>
			{specs.length === 0 && status === "complete" ? (
				<div className={fileErrorContainerClassName.toString()}>
					<p>{t("question.label.noTestFilesFound")}</p>
					{/* <p>
						Test match:{" "}
						<span className="text-destructive">
							{testFileRegex.toString()}
						</span>
					</p> */}
				</div>
			) : (
				<>
					<Specs
						hideTestsAndSupressLogs={hideTestsAndSupressLogs}
						openSpec={openSpec ?? defaultOpenSpec}
						specs={specs}
						status={status}
						verbose={verbose ?? false}
					/>

					{status === "complete" && testResults.total > 0 && (
						<Summary
							duration={duration}
							suites={suiteResults}
							tests={testResults}
						/>
					)}
				</>
			)}
		</div>
	);
};

const containerClassName =
	"p-4 h-full overflow-auto flex flex-col relative font-mono";

const fileErrorContainerClassName = "font-bold text-base";
