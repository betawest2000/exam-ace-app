import { LocaleLink } from "@i18n/routing";
import { Button } from "@ui/components/button";
import { Bot, Cloud, Database, Network, ShieldAlert } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import heroImage from "../../../../public/images/hero-image.png";
import heroImageDark from "../../../../public/images/hero-image-dark.png";

const PARTNER_LOGOS = [
	{
		name: "Clouds",
		Icon: Cloud,
	},
	{ name: "Security", Icon: ShieldAlert },
	{ name: "AI", Icon: Bot },
	{ name: "Network", Icon: Network },
	{ name: "Data", Icon: Database },
];

export function Hero() {
	const t = useTranslations("hero");
	return (
		<div className="relative max-w-full overflow-x-hidden bg-linear-to-b from-0% from-card to-[50vh] to-background">
			<div className="absolute left-1/2 z-10 ml-[-500px] h-[500px] w-[1000px] rounded-full bg-linear-to-r from-primary to-bg opacity-20 blur-[150px]" />
			<div className="container relative z-20 pt-44 pb-12 text-center lg:pb-16">
				{/* <div className="mb-4 flex justify-center">
					<div className="mx-auto flex flex-wrap items-center justify-center rounded-full border border-highlight/30 p-px px-4 py-1 font-normal text-highlight text-sm">
						<span className="flex items-center gap-2 rounded-full font-semibold text-highlight">
							<span className="size-2 rounded-full bg-highlight" />
							New:
						</span>
						<span className="ml-1 block font-medium text-foreground">
							Amazing feature of your SaaS
						</span>
					</div>
				</div> */}

				<h1 className="mx-auto max-w-3xl text-balance font-bold text-5xl lg:text-7xl">
					{t("title")}
				</h1>

				<p className="mx-auto mt-4 max-w-lg text-balance text-foreground/60 text-lg">
					{t("description")}
				</p>

				<div className="mt-6 flex flex-col items-center justify-center gap-3 md:flex-row">
					<Button size="lg" variant="primary" asChild>
						<Link href="/auth/login">{t("getStarted")}</Link>
					</Button>
					<Button variant="light" size="lg" asChild>
						<LocaleLink href="/exams">{t("allExams")}</LocaleLink>
					</Button>
				</div>

				<div className="mt-16 px-8 text-center">
					<h5 className="font-semibold text-foreground/50 text-xs uppercase tracking-wider">
						{t("realQuestions")}
					</h5>

					<div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-foreground/60">
						{PARTNER_LOGOS.map(({ name, Icon }) => {
							const content = (
								<div
									className="flex items-center gap-3 text-sm font-medium text-foreground/70"
									key={name}
								>
									<Icon
										className="h-8 w-auto text-foreground/60"
										aria-hidden
									/>
									<span className="text-lg">{name}</span>
								</div>
							);

							return <div key={name}>{content}</div>;
						})}
					</div>
				</div>

				<div className="mx-auto mt-16 max-w-5xl rounded-2xl border bg-card/50 p-2 shadow-lg dark:shadow-foreground/10">
					<Image
						src={heroImage}
						alt="Our application"
						className="block rounded-xl dark:hidden"
						priority
					/>
					<Image
						src={heroImageDark}
						alt="Our application"
						className="hidden rounded-xl dark:block"
						priority
					/>
				</div>
			</div>
		</div>
	);
}
