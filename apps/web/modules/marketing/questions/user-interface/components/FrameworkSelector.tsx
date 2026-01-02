"use client";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ui/components/select";
import * as React from "react";
import type { Framework } from "./types";
import { useUICoding } from "./UICodingContext";

interface FrameworkSelectorProps {
	/**
	 * Current selected framework
	 */
	initialFramework?: Framework;
	/**
	 * Additional class names
	 */
	className?: string;
}

export const FrameworkSelector: React.FC<FrameworkSelectorProps> = ({
	initialFramework,
	className,
}) => {
	const { setFramework } = useUICoding();
	const [value, setValue] = React.useState<Framework>(
		initialFramework ?? "react",
	);

	const onChange = React.useCallback(
		(lang: Framework) => {
			setFramework(lang);
			setValue(lang);
		},
		[setFramework],
	);
	return (
		<Select value={value} onValueChange={onChange}>
			<SelectTrigger className={className}>
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="react">React</SelectItem>
			</SelectContent>
		</Select>
	);
};
