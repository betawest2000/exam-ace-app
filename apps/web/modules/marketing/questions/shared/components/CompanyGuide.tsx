import Image from "next/image";
import { useTranslations } from "next-intl";
import { QuestionSection } from "./QuestionSection";

export function CompanyGuide({
	questionStats,
}: {
	questionStats: Record<string, number>;
}) {
	const t = useTranslations("common.practiceMenu.companyGuideSection");
	const companies = [
		{
			title: "OpenAI",
			href: "/interviews/company/openai/questions-guides",
			icon: (
				<Image
					alt="OpenAI"
					src="https://www.gfecdn.net/img/company-logos/openai-logomark.svg"
					width={24}
					height={24}
					className="size-6"
					decoding="async"
					loading="lazy"
				/>
			),
			questionCompleted: 0,
			totalQuestions: questionStats["open-ai"] || 0,
			type: "questions" as const,
		},
		{
			title: "Google",
			href: "/interviews/company/google/questions-guides",
			icon: (
				<Image
					alt="Google"
					src="https://www.gfecdn.net/img/company-logos/google-logomark.svg"
					width={24}
					height={24}
					className="size-6"
					decoding="async"
					loading="lazy"
				/>
			),
			questionCompleted: 0,
			totalQuestions: questionStats.google || 0,
			type: "questions" as const,
		},
		{
			title: "Amazon",
			href: "/interviews/company/amazon/questions-guides",
			icon: (
				<Image
					alt="Amazon"
					src="https://www.gfecdn.net/img/company-logos/amazon-logomark.svg"
					width={24}
					height={24}
					className="size-6"
					decoding="async"
					loading="lazy"
				/>
			),
			questionCompleted: 0,
			totalQuestions: questionStats.amazon || 0,
			type: "questions" as const,
		},
		{
			title: "TikTok",
			href: "/interviews/company/tiktok/questions-guides",
			icon: (
				<Image
					alt="TikTok"
					src="https://www.gfecdn.net/img/company-logos/tiktok-logomark.svg"
					width={24}
					height={24}
					className="size-6"
					decoding="async"
					loading="lazy"
				/>
			),
			questionCompleted: 0,
			totalQuestions: questionStats.tiktok || 0,
			type: "questions" as const,
		},
		{
			title: "ByteDance",
			href: "/interviews/company/bytedance/questions-guides",
			icon: (
				<Image
					alt="ByteDance"
					src="https://www.gfecdn.net/img/company-logos/bytedance-logomark.svg"
					width={24}
					height={24}
					className="size-6"
					decoding="async"
					loading="lazy"
				/>
			),
			questionCompleted: 0,
			totalQuestions: questionStats["byte-dance"] || 0,
			type: "questions" as const,
		},
		{
			title: "Apple",
			href: "/interviews/company/apple/questions-guides",
			icon: (
				<Image
					alt="Apple"
					src="https://www.gfecdn.net/img/company-logos/apple-logomark.svg"
					width={24}
					height={24}
					className="size-6"
					decoding="async"
					loading="lazy"
				/>
			),
			questionCompleted: 0,
			totalQuestions: questionStats.apple || 0,
			type: "questions" as const,
		},
		{
			title: "Microsoft",
			href: "/interviews/company/microsoft/questions-guides",
			icon: (
				<Image
					alt="Microsoft"
					src="https://www.gfecdn.net/img/company-logos/microsoft-logomark.svg"
					width={24}
					height={24}
					className="size-6"
					decoding="async"
					loading="lazy"
				/>
			),
			questionCompleted: 0,
			totalQuestions: questionStats.microsoft || 0,
			type: "questions" as const,
		},
		{
			title: "Atlassian",
			href: "/interviews/company/atlassian/questions-guides",
			icon: (
				<Image
					alt="Atlassian"
					src="https://www.gfecdn.net/img/company-logos/atlassian-logomark.svg"
					width={24}
					height={24}
					className="size-6"
					decoding="async"
					loading="lazy"
				/>
			),
			questionCompleted: 0,
			totalQuestions: questionStats.atlassian || 0,
			type: "questions" as const,
		},
		{
			title: "LinkedIn",
			href: "/interviews/company/linkedin/questions-guides",
			icon: (
				<Image
					alt="LinkedIn"
					src="https://www.gfecdn.net/img/company-logos/linkedin-logomark.svg"
					width={24}
					height={24}
					className="size-6"
					decoding="async"
					loading="lazy"
				/>
			),
			questionCompleted: 0,
			totalQuestions: questionStats.linkedin || 0,
			type: "questions" as const,
		},
		{
			title: "Uber",
			href: "/interviews/company/uber/questions-guides",
			icon: (
				<Image
					alt="Uber"
					src="https://www.gfecdn.net/img/company-logos/uber-logomark.svg"
					width={24}
					height={24}
					className="size-6"
					decoding="async"
					loading="lazy"
				/>
			),
			questionCompleted: 0,
			totalQuestions: questionStats.uber || 0,
			type: "questions" as const,
		},
		{
			title: "Dropbox",
			href: "/interviews/company/dropbox/questions-guides",
			icon: (
				<Image
					alt="Dropbox"
					src="https://www.gfecdn.net/img/company-logos/dropbox-logomark.svg"
					width={24}
					height={24}
					className="size-6"
					decoding="async"
					loading="lazy"
				/>
			),
			questionCompleted: 0,
			totalQuestions: questionStats.dropbox || 0,
			type: "questions" as const,
		},
		{
			title: "Lyft",
			href: "/interviews/company/lyft/questions-guides",
			icon: (
				<Image
					alt="Lyft"
					src="https://www.gfecdn.net/img/company-logos/lyft-logomark.svg"
					width={24}
					height={24}
					className="size-6"
					decoding="async"
					loading="lazy"
				/>
			),
			questionCompleted: 0,
			totalQuestions: questionStats.lyft || 0,
			type: "questions" as const,
		},
		{
			title: "Airbnb",
			href: "/interviews/company/airbnb/questions-guides",
			icon: (
				<Image
					alt="Airbnb"
					src="https://www.gfecdn.net/img/company-logos/airbnb-logomark.svg"
					width={24}
					height={24}
					className="size-6"
					decoding="async"
					loading="lazy"
				/>
			),
			questionCompleted: 0,
			totalQuestions: questionStats.airbnb || 0,
			type: "questions" as const,
		},
	];

	return (
		<QuestionSection
			title={t("title")}
			description={t("description")}
			formats={companies}
		/>
	);
}
