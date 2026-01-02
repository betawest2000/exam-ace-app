"use client";

import type { SandpackMessage } from "@codesandbox/sandpack-client";
import { useSandpackClient } from "@codesandbox/sandpack-react";

import { Button } from "@ui/components/button";
import { flatMap } from "lodash";
import { Loader, PlayCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import * as React from "react";
import type { Spec } from "./Specs";
import type { Test } from "./Tests";
import { useTests } from "./TestsContext";
import type { Status } from "./types";
import { set, splitTail } from "./utils";

interface State {
	specs: Record<string, Spec>;
	status: Status;
	suiteOnly: boolean;
	specsCount: number;
}

const INITIAL_STATE: State = {
	specs: {},
	status: "initialising",
	suiteOnly: false,
	specsCount: 0,
};

export const RunButton: React.FC<
	{
		onComplete?: (specs: Record<string, Spec>) => void;
	} & React.HtmlHTMLAttributes<HTMLDivElement>
> = ({ onComplete }) => {
	const t = useTranslations();
	const { getClient, iframe, listen, sandpack } = useSandpackClient();
	const { setSpecs, setStatus } = useTests();

	const [state, setState] = React.useState<State>({
		...INITIAL_STATE,
	});

	const runAllTests = React.useCallback((): void => {
		setState((oldState) => ({
			...oldState,
			status: "running",
			specs: {},
		}));

		const client = getClient();
		if (client) {
			client.dispatch({ type: "run-all-tests" });
		}
	}, [getClient]);

	const runSpec = React.useCallback((): void => {
		setState((oldState) => ({
			...oldState,
			status: "running",
			specs: {},
		}));

		const client = getClient();
		if (client) {
			client.dispatch({ type: "run-tests", path: sandpack.activeFile });
		}
	}, [getClient, sandpack.activeFile]);

	const testFileRegex = /.*\.(test|spec)\.[tj]s?$/;

	React.useEffect(() => {
		let currentDescribeBlocks: string[] = [];
		let currentSpec = "";

		const unsubscribe = listen((data: SandpackMessage): void => {
			// Note: short-circuit if message isn't for the currently active spec when `suiteOnly` is true
			if (
				state.suiteOnly &&
				(("path" in data && data.path !== sandpack.activeFile) ||
					("test" in data &&
						"path" in data.test &&
						data.test.path !== sandpack.activeFile))
			) {
				return;
			}

			if (
				data.type === "action" &&
				data.action === "clear-errors" &&
				data.source === "jest"
			) {
				currentSpec = data.path;
				return;
			}

			if (data.type === "test") {
				if (data.event === "initialize_tests") {
					currentDescribeBlocks = [];
					currentSpec = "";
					setState((oldState) => ({
						...oldState,
						specs: {},
						status: "complete",
					}));
					// runAllTests();
					return;
				}

				if (data.event === "test_count") {
					setState((oldState) => ({
						...oldState,
						specsCount: data.count,
					}));
					return;
				}

				if (data.event === "total_test_start") {
					currentDescribeBlocks = [];
					setState((oldState) => ({
						...oldState,
						status: "running",
					}));
					return;
				}

				if (data.event === "total_test_end") {
					setState((oldState) => {
						if (onComplete !== undefined) {
							onComplete(oldState.specs);
						}
						return {
							...oldState,
							status: "complete",
						};
					});

					return;
				}

				if (data.event === "add_file") {
					setState(
						set(["specs", data.path], {
							describes: {},
							tests: {},
							name: data.path,
						}),
					);

					return;
				}

				if (data.event === "remove_file") {
					setState((oldState) => {
						const specs = Object.entries(oldState.specs).reduce(
							(acc, [key, value]) => {
								if (key === data.path) {
									return acc;
								}
								acc[key] = value;
								return acc;
							},
							{} as Record<string, Spec>,
						);

						return { ...oldState, specs };
					});

					return;
				}

				if (data.event === "file_error") {
					setState(set(["specs", data.path, "error"], data.error));
					return;
				}

				if (data.event === "describe_start") {
					currentDescribeBlocks.push(data.blockName);
					const [describePath, currentDescribe] = splitTail(
						currentDescribeBlocks,
					);
					const spec = currentSpec;

					if (currentDescribe === undefined) {
						return;
					}

					setState(
						set(
							[
								"specs",
								spec,
								"describes",
								...flatMap(describePath, (name) => [
									name,
									"describes",
								]),
								currentDescribe,
							],
							{
								name: data.blockName,
								tests: {},
								describes: {},
							},
						),
					);
					return;
				}

				if (data.event === "describe_end") {
					currentDescribeBlocks.pop();
					return;
				}

				if (data.event === "add_test") {
					const [describePath, currentDescribe] = splitTail(
						currentDescribeBlocks,
					);
					const test: Test = {
						status: "idle",
						errors: [],
						name: data.testName,
						blocks: [...currentDescribeBlocks],
						path: data.path,
					};
					if (currentDescribe === undefined) {
						setState(
							set(
								["specs", data.path, "tests", data.testName],
								test,
							),
						);
					} else {
						setState(
							set(
								[
									"specs",
									data.path,
									"describes",
									...flatMap(describePath, (name) => [
										name,
										"describes",
									]),
									currentDescribe,
									"tests",
									data.testName,
								],
								test,
							),
						);
					}
					return;
				}

				if (data.event === "test_start") {
					const { test } = data;
					const [describePath, currentDescribe] = splitTail(
						test.blocks,
					);

					const startedTest: Test = {
						status: "running",
						name: test.name,
						blocks: test.blocks,
						path: test.path,
						errors: [],
					};

					if (currentDescribe === undefined) {
						setState(
							set(
								["specs", test.path, "tests", test.name],
								startedTest,
							),
						);
						return;
					}
					setState(
						set(
							[
								"specs",
								test.path,
								"describes",
								...flatMap(describePath, (name) => [
									name,
									"describes",
								]),
								currentDescribe,
								"tests",
								test.name,
							],
							startedTest,
						),
					);

					return;
				}

				if (data.event === "test_end") {
					const { test } = data;
					const [describePath, currentDescribe] = splitTail(
						test.blocks,
					);
					const endedTest = {
						status: test.status,
						errors: test.errors,
						duration: test.duration,
						name: test.name,
						blocks: test.blocks,
						path: test.path,
					};

					if (currentDescribe === undefined) {
						setState(
							set(
								["specs", test.path, "tests", test.name],
								endedTest,
							),
						);
						return;
					}
					setState(
						set(
							[
								"specs",
								test.path,
								"describes",
								...flatMap(describePath, (name) => [
									name,
									"describes",
								]),
								currentDescribe,
								"tests",
								test.name,
							],
							endedTest,
						),
					);
				}
				return;
			}
		});

		return unsubscribe;
	}, [state.suiteOnly, sandpack.activeFile]);

	React.useEffect(() => {
		setSpecs(Object.values(state.specs));
		setStatus(state.status);
	}, [state.specs, state.status]);

	const onClick = React.useCallback(() => {
		const isSpecOpen = sandpack.activeFile.match(testFileRegex) !== null;
		// Clean up test files before running tests
		if (isSpecOpen) {
			runSpec();
		} else {
			runAllTests();
		}
	}, [sandpack.activeFile, sandpack.deleteFile, runAllTests, runSpec]);

	return (
		<Button
			disabled={
				state.status === "running" || state.status === "initialising"
			}
			onClick={onClick}
		>
			<iframe
				ref={iframe}
				style={{ display: "none" }}
				title="Sandpack Tests"
			/>
			{state.status === "running" || state.status === "initialising" ? (
				<Loader className="h-4 w-4 mr-1 animate-spin" />
			) : (
				<PlayCircle className="h-4 w-4 mr-1" />
			)}
			{state.status === "initialising"
				? t("question.label.initialising")
				: t("question.label.run")}
		</Button>
	);
};
