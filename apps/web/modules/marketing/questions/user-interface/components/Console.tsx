"use client";

import { useSandpackConsole } from "@codesandbox/sandpack-react";
import { cn } from "@ui/lib";
import * as React from "react";

export function Console() {
	const { logs /*reset */ } = useSandpackConsole({
		resetOnPreviewRestart: true,
	});

	return (
		<div className="h-full overflow-auto font-mono text-sm">
			<div className="p-4 space-y-2">
				{logs.length === 0 ? (
					<div className="text-muted-foreground italic">
						Console is empty
					</div>
				) : (
					logs.map((log, index) => (
						<div
							key={`${log.id}-${index}`}
							className={cn(
								"border-l-2 pl-3 py-1",
								log.method === "error" &&
									"border-destructive text-destructive",
								log.method === "warn" &&
									"border-yellow-500 text-yellow-600 dark:text-yellow-400",
								log.method === "info" &&
									"border-blue-500 text-blue-600 dark:text-blue-400",
								log.method === "log" &&
									"border-muted-foreground/30 text-foreground",
							)}
						>
							<div className="flex items-start gap-2">
								<span className="text-xs text-muted-foreground uppercase font-semibold min-w-12">
									{log.method}
								</span>
								<div className="flex-1">
									{log.data?.map((item, i) => (
										<div
											key={i}
											className="whitespace-pre-wrap"
										>
											{formatLogData(item)}
										</div>
									))}
								</div>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
}

function formatLogData(data: unknown): string {
	if (typeof data === "string") {
		return data;
	}
	if (typeof data === "number" || typeof data === "boolean") {
		return String(data);
	}
	if (data === null) {
		return "null";
	}
	if (data === undefined) {
		return "undefined";
	}
	try {
		return JSON.stringify(data, null, 2);
	} catch {
		return String(data);
	}
}
