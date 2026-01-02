import type { TestError } from "@codesandbox/sandpack-client";
import { Button } from "@ui/components/button";
import { cn } from "@ui/lib";
import * as React from "react";

import type { Describe } from "./Describes";
import { Describes } from "./Describes";
import { FormattedError } from "./FormattedError";
import { type Test, Tests } from "./Tests";
import type { Status } from "./types";
import { getFailingTests, getSpecTestResults, isEmpty } from "./utils";

export type Spec = { error?: TestError } & Describe;

interface Props {
	specs: Spec[];
	verbose: boolean;
	status: Status;
	openSpec: (name: string) => void;
	hideTestsAndSupressLogs?: boolean;
}

// const fileContainer = css({
// 	display: "flex",
// 	flexDirection: "row",
// 	alignItems: "center",
// 	marginBottom: "$space$2",
// });
const fileContainer = "flex flex-row items-center mb-2";

// const gapBottomClassName = css({
// 	marginBottom: "$space$2",
// });
const gapBottomClassName = "mb-2";

// const failTestClassName = css({
// 	fontWeight: "bold",
// });
const failTestClassName = "font-bold";

// const labelClassName = css({
// 	borderRadius: "calc($border$radius / 2)",
// });
const labelClassName = "rounded-sm";

// const specLabelClassName = css({
// 	padding: "$space$1 $space$2",
// 	fontFamily: "$font$mono",
// 	textTransform: "uppercase",
// 	marginRight: "$space$2",
// });
const specLabelClassName = "px-2 py-1 font-mono uppercase mr-2";

// const filePathButtonClassName = css({
// 	fontFamily: "$font$mono",
// 	cursor: "pointer",
// 	display: "inline-block",
// });
const filePathButtonClassName =
	"font-mono cursor-pointer inline-block bg-background";

// const filePathClassName = css({
// 	color: "$colors$clickable",
// 	textDecorationStyle: "dotted",
// 	textDecorationLine: "underline",
// });
const filePathClassName = "text-clickable underline decoration-dotted";

// const fileNameClassName = css({
// 	color: "$colors$hover",
// 	fontWeight: "bold",
// 	textDecorationStyle: "dotted",
// 	textDecorationLine: "underline",
// });
const fileNameClassName = "text-hover font-bold underline decoration-dotted";

export const Specs: React.FC<Props> = ({
	specs,
	openSpec,
	status,
	verbose,
	hideTestsAndSupressLogs,
}) => {
	return (
		<>
			{specs.map((spec) => {
				if (spec.error) {
					// test-spec
					return (
						<div key={spec.name} className={gapBottomClassName}>
							{/* test-spec-error */}
							<SpecLabel
								className={cn(labelClassName, "bg-destructive")}
							>
								Error
							</SpecLabel>
							<FilePath
								onClick={(): void => openSpec(spec.name)}
								path={spec.name}
							/>
							<FormattedError
								error={spec.error}
								path={spec.name}
							/>
						</div>
					);
				}

				if (isEmpty(spec)) {
					return null;
				}

				const tests = Object.values(spec.tests);
				const describes = Object.values(spec.describes);
				const stats = getSpecTestResults(spec);

				return (
					//* test-spec-name*/
					<div key={spec.name} className={gapBottomClassName}>
						{/* test-spec-name-container */}
						<div className={fileContainer}>
							{status === "complete" ? (
								// test-spec-complete
								stats.fail > 0 ? (
									<SpecLabel
										className={cn(
											labelClassName,
											"bg-destructive",
											"text-destructive-foreground",
										)}
									>
										Fail
									</SpecLabel>
								) : (
									// test-spec-pass
									<SpecLabel
										className={cn(
											labelClassName,
											"bg-success",
											"text-success-foreground",
										)}
									>
										Pass
									</SpecLabel>
								)
							) : (
								// test-spec-run
								<SpecLabel
									className={cn(
										labelClassName,
										"bg-background",
									)}
								>
									Run
								</SpecLabel>
							)}

							<FilePath
								onClick={(): void => {
									if (!hideTestsAndSupressLogs) {
										openSpec(spec.name);
									}
								}}
								path={spec.name}
							/>
						</div>

						{verbose && !hideTestsAndSupressLogs && (
							<Tests tests={tests} />
						)}

						{verbose && !hideTestsAndSupressLogs && (
							<Describes describes={describes} />
						)}

						{!hideTestsAndSupressLogs &&
							getFailingTests(spec).map(
								(test: Test, index: number) => {
									return (
										// test-spec-error
										<div
											key={`failing-${index}-${test.name}`}
											className={cn(gapBottomClassName)}
										>
											{/* test-spec-error-text */}
											<div
												className={cn(
													failTestClassName,
													"text-destructive",
												)}
											>
												● {test.blocks.join(" › ")} ›{" "}
												{test.name}
											</div>
											{test.errors.map((e: TestError) => (
												<FormattedError
													key={`failing-${test.name}-error`}
													error={e}
													path={test.path}
												/>
											))}
										</div>
									);
								},
							)}
					</div>
				);
			})}
		</>
	);
};

const SpecLabel: React.FC<{ className: string; children: React.ReactNode }> = ({
	children,
	className,
}) => {
	// test-spec-label
	return (
		<span className={cn(specLabelClassName, className)}>{children}</span>
	);
};

const FilePath: React.FC<{ onClick: () => void; path: string }> = ({
	onClick,
	path,
}) => {
	const parts = path.split("/");
	const basePath = `${parts.slice(0, parts.length - 1).join("/")}/`;
	const fileName = parts[parts.length - 1];

	return (
		// test-filename
		<Button className={filePathButtonClassName} onClick={onClick}>
			{/* test-filename-base */}
			<span className={filePathClassName}>{basePath}</span>
			{/* test-filename-file */}
			<span className={fileNameClassName}>{fileName}</span>
		</Button>
	);
};
