"use client";

import { LocaleLink } from "@i18n/routing";
import { Button } from "@ui/components/button";
import { ArrowRight, Lock, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export function PremiumLockCard({
	title,
	description,
	fullWidth = false,
}: {
	title: string;
	description: string;
	fullWidth?: boolean;
}) {
	const t = useTranslations("common.premium.lockCard");

	const features = [
		"allPremiumQuestions",
		"highQualitySolutions",
		"timeSavers",
		"systemDesignGuides",
	];

	return (
		<div
			className={`flex flex-col gap-6 py-6 text-center sm:py-8 ${
				fullWidth ? "w-full" : "mx-auto max-w-md"
			}`}
		>
			<Lock
				className="size-10 mx-auto shrink-0 text-muted-foreground"
				aria-hidden="true"
			/>
			<div>
				<h2 className="text-pretty text-foreground font-semibold text-base">
					{title}
				</h2>
				<span className="text-muted-foreground text-sm text-pretty mt-2 block">
					{description}
				</span>
			</div>
			<div className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-3">
				{features.map((feature) => (
					<div
						key={feature}
						className="w-fit rounded-md border border-border"
					>
						<div className="flex items-center gap-1 rounded-[inherit] px-2 py-1.5 bg-linear-to-r from-muted to-background">
							<Sparkles
								className="size-3 shrink-0 text-foreground"
								aria-hidden="true"
							/>
							<span className="text-foreground text-xs font-medium">
								{t(`features.${feature}`)}
							</span>
						</div>
					</div>
				))}
			</div>
			<div>
				<Button asChild>
					<LocaleLink
						href="/upgrade"
						type="button"
						className="inline-flex items-center justify-center h-8 px-3 py-2 gap-x-1 text-xs whitespace-nowrap font-medium border rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 border-transparent text-primary-foreground bg-primary hover:bg-primary/90 active:bg-primary/80 focus-visible:outline-ring"
					>
						<div>{t("viewPlans")}</div>
						<ArrowRight
							className="shrink-0 size-4"
							aria-hidden="true"
						/>
					</LocaleLink>
				</Button>
			</div>
		</div>
	);
}
