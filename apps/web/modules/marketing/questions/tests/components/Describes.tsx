import { cn } from "@ui/lib";
import { isEmpty } from "lodash";
import * as React from "react";
import type { Test } from "./Tests";
import { Tests } from "./Tests";

export interface Describe {
	name: string;
	tests: Record<string, Test>;
	describes: Record<string, Describe>;
}

// const nameClassName = css({
// 	color: "$colors$hover",
// 	marginBottom: "$space$2",
// });
const nameClassName = "text-hover mb-2";

// const containerClassName = css({
// 	marginLeft: "$space$4",
// });
const containerClassName = "ml-4";

export const Describes: React.FC<{ describes: Describe[] }> = ({
	describes,
}) => {
	return (
		<>
			{describes.map((describe) => {
				if (isEmpty(describe)) {
					return null;
				}

				const tests = Object.values(describe.tests ?? {});
				const describes = Object.values(describe.describes ?? {});

				return (
					<div
						key={describe.name}
						// test-describe
						className={cn(containerClassName)}
					>
						{/* test-name */}
						<div className={cn(nameClassName)}>{describe.name}</div>

						<Tests tests={tests} />

						<Describes describes={describes} />
					</div>
				);
			})}
		</>
	);
};
