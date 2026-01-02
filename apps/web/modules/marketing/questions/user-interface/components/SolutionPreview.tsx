"use client";

import type { SandpackMessage } from "@codesandbox/sandpack-client";
import {
	Navigator,
	SandpackStack,
	useSandpack,
	useSandpackClient,
} from "@codesandbox/sandpack-react";
import React from "react";

export function SolutionPreview({ startRoute }: { startRoute?: string }) {
	const { clientId, iframe } = useSandpackClient();
	const { listen } = useSandpack();

	const [iframeComputedHeight, setComputedAutoHeight] = React.useState<
		number | null
	>(null);

	React.useEffect(() => {
		const unsubscribe = listen((message: SandpackMessage) => {
			if (message.type === "resize") {
				setComputedAutoHeight(message.height);
			}
		}, clientId);

		return unsubscribe;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [clientId]);

	const handleNewURL = React.useCallback(
		(newUrl: string): void => {
			if (!iframe.current) {
				return;
			}

			iframe.current.src = newUrl;
			// eslint-disable-next-line react-hooks/exhaustive-deps
		},
		[iframe],
	);

	return (
		<SandpackStack className="flex flex-col h-full">
			<Navigator
				clientId={clientId}
				onURLChange={handleNewURL}
				startRoute={startRoute}
			/>

			<div className="container">
				<iframe
					ref={iframe}
					className="min-h-40 max-height-[1200px] w-full flex-1 border-0"
					style={{
						// set height based on the content only in auto mode
						// and when the computed height was returned by the bundler
						height: iframeComputedHeight
							? iframeComputedHeight
							: undefined,
					}}
					title="Sandpack Preview"
				/>
			</div>
		</SandpackStack>
	);
}
