import * as React from "react";

export interface TestResults {
	pass: number;
	fail: number;
	skip: number;
	total: number;
}

export interface SuiteResults {
	pass: number;
	fail: number;
	total: number;
}

interface Props {
	suites: SuiteResults;
	tests: TestResults;
	duration: number;
}

export const Summary: React.FC<Props> = ({ suites, tests, duration }) => {
	const widestLabel = "Test suites: ";

	const withMargin = (label: string): string => {
		const difference = widestLabel.length - label.length;
		const margin = Array.from({ length: difference }, () => " ").join("");
		return label + margin;
	};

	return (
		// className: "test-summary"
		<div className={"font-bold text-clickable"}>
			{/* className: "test-summary"*/}
			<div className={"mb-2"}>
				{/*test-summary-suites-label */}
				<span className="font-bold text-hover whitespace-pre-wrap">
					{widestLabel}
				</span>
				{suites.fail > 0 && (
					// test-summary-suites-fail
					<span className="text-destructive">
						{suites.fail} failed,{" "}
					</span>
				)}
				{suites.pass > 0 && (
					// test-summary-suites-pass
					<span className="text-success">{suites.pass} passed, </span>
				)}
				<span>{suites.total} total</span>
			</div>
			{/* className: "test-summary-tests" */}
			<div className={"mb-2"}>
				{/* test-summary-tests-label */}
				<span className="white-space-pre-wrap font-bold text-hover">
					{withMargin("Tests:")}
				</span>
				{tests.fail > 0 && (
					// test-summary-fail
					<span className="text-destructive">
						{tests.fail} failed,{" "}
					</span>
				)}
				{tests.skip > 0 && (
					// test-summary-skip
					<span className="text-muted">{tests.skip} skipped, </span>
				)}
				{tests.pass > 0 && (
					// test-summary-pass
					<span className="text-success">{tests.pass} passed, </span>
				)}
				<span>{tests.total} total</span>
			</div>
			{/* test-summary-curation */}
			<div className="font-bold text-hover whitespace-pre-wrap">
				{withMargin("Time:")}
				{duration / 1000}s
			</div>
		</div>
	);
};
