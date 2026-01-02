import type { TestError } from "@codesandbox/sandpack-client";
import React from "react";

type TestStatus = "idle" | "running" | "pass" | "fail";

export interface Test {
	name: string;
	blocks: string[];
	status: TestStatus;
	path: string;
	errors: TestError[];
	duration?: number | undefined;
}

interface SandpackTests extends React.HtmlHTMLAttributes<HTMLDivElement> {
	tests: Test[];
}

export const Tests: React.FC<SandpackTests> = ({ tests }) => {
	return (
		// className: "test"
		<div className="ml-4">
			{tests.map((test) => (
				// className: "test-result"
				<div key={test.name} className="mb-2">
					{test.status === "pass" && (
						<span className="text-success mr-2">✓</span>
					)}
					{test.status === "fail" && (
						<span className="text-destructive mr-2">✕</span>
					)}
					{test.status === "idle" && (
						<span className="text-muted mr-2">○</span>
					)}
					{/* test-name-text, $colors$clickable */}
					<span className="mb-2">{test.name}</span>
					{test.duration !== undefined && (
						<span className="text-foreground ml-2">
							({test.duration} ms)
						</span>
					)}
				</div>
			))}
		</div>
	);
};
