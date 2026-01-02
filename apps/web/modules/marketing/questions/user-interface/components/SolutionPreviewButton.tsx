'use client";';

import { Button } from "@ui/components/button";
import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import type { ButtonHTMLAttributes } from "react";

interface SolutionPreviewButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	onClick?: () => void;
}

export function SolutionPreviewButton({
	onClick,
	...props
}: SolutionPreviewButtonProps) {
	const t = useTranslations("");
	return (
		<div className="hidden lg:block rounded-md p-4 text-center bg-muted w-full">
			<Button
				onClick={onClick}
				className="inline-flex items-center justify-center h-8 px-3 py-2 gap-x-1 text-xs whitespace-nowrap font-medium border rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 border-border text-muted-foreground hover:bg-muted/80"
				{...props}
			>
				<div>{t("question.label.seeWhatYouNeedToBuild")}</div>
				<ExternalLink className="shrink-0 size-4!" aria-hidden="true" />
			</Button>
		</div>
	);
}
