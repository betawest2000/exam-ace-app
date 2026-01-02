"use client";

import { LocaleLink, useLocalePathname } from "@i18n/routing";
import { authClient } from "@repo/auth/client";
import { config } from "@repo/config";
import { useSession } from "@saas/auth/hooks/use-session";
import { UserMenu } from "@saas/shared/components/UserMenu";
import { ColorModeToggle } from "@shared/components/ColorModeToggle";
import { LocaleSwitch } from "@shared/components/LocaleSwitch";
import { Logo } from "@shared/components/Logo";
import { Button } from "@ui/components/button";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@ui/components/sheet";
import { cn } from "@ui/lib";
import { MenuIcon } from "lucide-react";
import NextLink from "next/link";
import { useTranslations } from "next-intl";
import { Suspense, useEffect, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";
import { LocaleHierarchyNavMenu } from "./LocaleHierarchyNavMenu";
import { usePracticeMenuData } from "./PracticeMenuData";

export function NavBar() {
	const t = useTranslations();
	const { user } = useSession();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const localePathname = useLocalePathname();
	const [isTop, setIsTop] = useState(true);
	const { practiceMenuData, practiceCategories } = usePracticeMenuData();

	const handleMobileMenuClose = () => {
		setMobileMenuOpen(false);
	};

	const debouncedScrollHandler = useDebounceCallback(
		() => {
			setIsTop(window.scrollY <= 10);
		},
		150,
		{
			maxWait: 150,
		},
	);

	useEffect(() => {
		window.addEventListener("scroll", debouncedScrollHandler);
		debouncedScrollHandler();
		return () => {
			window.removeEventListener("scroll", debouncedScrollHandler);
		};
	}, [debouncedScrollHandler]);

	useEffect(() => {
		handleMobileMenuClose();
	}, [localePathname]);

	const isQuestionsPage = localePathname.startsWith("/questions");

	const menuItems: {
		label: string;
		href: string;
	}[] = [
		// {
		// 	label: t("common.menu.pricing"),
		// 	href: "/#pricing",
		// },
		// {
		// 	label: t("common.menu.faq"),
		// 	href: "/#faq",
		// },
		// {
		// 	label: t("common.menu.blog"),
		// 	href: "/blog",
		// },
		{
			label: t("common.menu.changelog"),
			href: "/changelog",
		},
		...(config.contactForm.enabled
			? [
					{
						label: t("common.menu.contact"),
						href: "/contact",
					},
				]
			: []),
		// {
		// 	label: t("common.menu.docs"),
		// 	href: "/docs",
		// },
	];

	const isMenuItemActive = (href: string) => localePathname.startsWith(href);

	const onLogout = () => {
		authClient.signOut({
			fetchOptions: {
				onSuccess: async () => {
					window.location.href = new URL(
						config.auth.redirectAfterLogout,
						window.location.origin,
					).toString();
				},
			},
		});
	};

	return (
		<nav
			className={cn(
				"fixed top-0 left-0 z-50 w-full transition-shadow duration-200",
				!isTop || isQuestionsPage
					? "bg-card/80 shadow-sm backdrop-blur-lg"
					: "shadow-none",
			)}
			data-test="navigation"
		>
			<div className="container">
				<div
					className={cn(
						"flex items-center justify-stretch gap-6 transition-[padding] duration-200",
						!isTop || isQuestionsPage ? "py-4" : "py-6",
					)}
				>
					<div className="flex flex-1 justify-start">
						<LocaleLink
							href="/"
							className="block hover:no-underline active:no-underline"
						>
							<Logo />
						</LocaleLink>
					</div>

					<div className="hidden flex-1 items-center justify-center lg:flex">
						{!!user && (
							<LocaleLink
								key={"dashboard"}
								href="/dashboard"
								className={
									"block px-3 py-2 font-medium text-foreground/80 text-sm"
								}
								prefetch
							>
								{t("common.menu.dashboard")}
							</LocaleLink>
						)}

						<LocaleHierarchyNavMenu
							label={t("common.menu.exams")}
							menuData={practiceMenuData}
							categories={practiceCategories}
							defaultCategory={Object.keys(practiceMenuData)[0]}
						/>

						{menuItems.map((menuItem) => (
							<LocaleLink
								key={menuItem.href}
								href={menuItem.href}
								className={cn(
									"block px-3 py-2 font-medium text-foreground/80 text-sm",
									isMenuItemActive(menuItem.href)
										? "font-bold text-foreground"
										: "",
								)}
								prefetch
							>
								{menuItem.label}
							</LocaleLink>
						))}
					</div>

					<div className="flex flex-1 items-center justify-end gap-3">
						<ColorModeToggle />
						{config.i18n.enabled && (
							<Suspense>
								<LocaleSwitch />
							</Suspense>
						)}

						<Sheet
							open={mobileMenuOpen}
							onOpenChange={(open) => setMobileMenuOpen(open)}
						>
							<SheetTrigger asChild>
								<Button
									className="lg:hidden"
									size="icon"
									variant="light"
									aria-label="Menu"
								>
									<MenuIcon className="size-4" />
								</Button>
							</SheetTrigger>
							<SheetContent className="w-[280px]" side="right">
								<SheetTitle />
								<div className="flex flex-col items-start justify-center">
									<LocaleLink
										key={"exams"}
										href={"/exams"}
										onClick={handleMobileMenuClose}
										className={
											"block px-3 py-2 font-medium text-base text-foreground/80"
										}
										prefetch
									>
										{t("common.menu.exams")}
									</LocaleLink>

									{menuItems.map((menuItem) => (
										<LocaleLink
											key={menuItem.href}
											href={menuItem.href}
											onClick={handleMobileMenuClose}
											className={cn(
												"block px-3 py-2 font-medium text-base text-foreground/80",
												isMenuItemActive(menuItem.href)
													? "font-bold text-foreground"
													: "",
											)}
											prefetch
										>
											{menuItem.label}
										</LocaleLink>
									))}

									{user ? (
										<NextLink
											key="logout"
											href="#"
											className="block px-3 py-2 text-base"
											onClick={() => {
												handleMobileMenuClose();
												onLogout();
											}}
										>
											{t("app.userMenu.logout")}
										</NextLink>
									) : (
										<NextLink
											key="login"
											href="/auth/login"
											className="block px-3 py-2 text-base"
											onClick={handleMobileMenuClose}
										>
											{t("common.menu.login")}
										</NextLink>
									)}
								</div>
							</SheetContent>
						</Sheet>

						{config.ui.saas.enabled &&
							(user ? (
								<div className="hidden lg:block">
									<UserMenu showUserName={false} />
								</div>
							) : (
								<Button
									key="login"
									className="hidden lg:flex"
									asChild
									variant="primary"
								>
									<NextLink href="/auth/login" prefetch>
										{t("common.menu.login")}
									</NextLink>
								</Button>
							))}
					</div>
				</div>
			</div>
		</nav>
	);
}
