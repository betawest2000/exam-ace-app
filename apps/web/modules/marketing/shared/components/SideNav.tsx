"use client";
import { config } from "@repo/config";
import { useSession } from "@saas/auth/hooks/use-session";
import { UserMenu } from "@saas/shared/components/UserMenu";
import { Logo } from "@shared/components/Logo";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@ui/components/accordion";
import { cn } from "@ui/lib";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { usePracticeMenuData } from "./PracticeMenuData";

export function SideNav() {
	const t = useTranslations();
	const pathname = usePathname();
	const session = useSession();
	const user = session?.user;
	const { practiceMenuData, practiceCategories } = usePracticeMenuData();

	const { useSidebarLayout } = config.ui.saas;

	const basePath = user ? "/dashboard" : "/get-started";

	const menuItems = [
		{
			label: !user ? t("app.menu.start") : t("app.menu.dashboard"),
			href: basePath,
			icon: HomeIcon,
			isActive: pathname === basePath,
		},
	];

	return (
		<nav
			className={cn("w-full", {
				"w-full md:fixed md:top-0 md:left-0 md:h-full md:w-[280px]":
					useSidebarLayout,
			})}
		>
			<div
				className={cn("container max-w-6xl py-4", {
					"container max-w-6xl py-4 md:flex md:h-full md:flex-col md:px-6 md:pt-6 md:pb-0":
						useSidebarLayout,
				})}
			>
				<div className="flex flex-wrap items-center justify-between gap-4">
					<div
						className={cn("flex items-center gap-4 md:gap-2", {
							"md:flex md:w-full md:flex-col md:items-stretch md:align-stretch":
								useSidebarLayout,
						})}
					>
						<Link href="/" className="block">
							<Logo />
						</Link>
					</div>

					<div
						className={cn(
							"mr-0 ml-auto flex items-center justify-end gap-4",
							{
								"md:hidden": useSidebarLayout,
							},
						)}
					>
						<UserMenu />
					</div>
				</div>

				<ul
					className={cn(
						"no-scrollbar -mx-4 -mb-4 mt-6 flex list-none items-center justify-start gap-4 overflow-x-auto px-4 text-sm",
						{
							"md:mx-0 md:my-4 md:flex md:flex-col md:items-stretch md:gap-1 md:px-0":
								useSidebarLayout,
						},
					)}
				>
					{menuItems.map((menuItem) => (
						<li key={menuItem.href}>
							<Link
								href={menuItem.href}
								className={cn(
									"flex items-center gap-2 whitespace-nowrap border-b-2 px-1 pb-3",
									[
										menuItem.isActive
											? "border-primary font-bold"
											: "border-transparent",
									],
									{
										"md:-mx-6 md:border-b-0 md:border-l-2 md:px-6 md:py-2":
											useSidebarLayout,
									},
								)}
								prefetch
							>
								<menuItem.icon
									className={`size-4 shrink-0 ${
										menuItem.isActive
											? "text-primary"
											: "opacity-50"
									}`}
								/>
								<span>{menuItem.label}</span>
							</Link>
						</li>
					))}
				</ul>

				{/* Practice Accordion Menu */}
				<Accordion
					type="single"
					collapsible
					className={cn("w-full", {
						"md:px-0": useSidebarLayout,
					})}
				>
					{practiceCategories.map((category) => {
						const categoryData = practiceMenuData[category.id];
						return (
							<AccordionItem
								key={category.id}
								value={category.id}
								className="border-b-0"
							>
								<AccordionTrigger className="py-3 hover:no-underline">
									<span className="text-sm font-medium">
										{category.label}
									</span>
								</AccordionTrigger>
								<AccordionContent className="pb-2">
									<ul className="space-y-1">
										{categoryData?.items.map((item) => {
											const Icon = item.icon;
											return (
												<li key={item.href}>
													<Link
														href={item.href}
														className={cn(
															"flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
															pathname ===
																item.href
																? "bg-accent font-medium text-accent-foreground"
																: "text-foreground/80",
														)}
													>
														<Icon className="size-4 shrink-0" />
														<span>
															{item.title}
														</span>
													</Link>
												</li>
											);
										})}
									</ul>
								</AccordionContent>
							</AccordionItem>
						);
					})}
				</Accordion>

				<div
					className={cn(
						"-mx-4 md:-mx-6 mt-auto mb-0 hidden p-4 md:p-4",
						{
							"md:block": useSidebarLayout,
						},
					)}
				>
					<UserMenu showUserName />
				</div>
			</div>
		</nav>
	);
}
