"use client";

import { updateLocale } from "@i18n/lib/update-locale";
import { DropdownMenuSub } from "@radix-ui/react-dropdown-menu";
import { authClient } from "@repo/auth/client";
import { config } from "@repo/config";
import type { Locale } from "@repo/i18n";
import { useSession } from "@saas/auth/hooks/use-session";
import { UserAvatar } from "@shared/components/UserAvatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@ui/components/dropdown-menu";
import { cn } from "@ui/lib";
import {
	HardDriveIcon,
	HomeIcon,
	LanguagesIcon,
	LogInIcon,
	LogOutIcon,
	MoonIcon,
	MoreVerticalIcon,
	SettingsIcon,
	SunIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useState } from "react";

export function UserMenu({ showUserName }: { showUserName?: boolean }) {
	const t = useTranslations();
	const { user } = useSession();
	const { setTheme: setCurrentTheme, theme: currentTheme } = useTheme();
	const [theme, setTheme] = useState<string>(currentTheme ?? "system");
	const router = useRouter();
	const currentLocale = useLocale();
	const [locale, setLocale] = useState<string>(currentLocale);

	const { locales } = config.i18n;

	const colorModeOptions = [
		{
			value: "system",
			label: "System",
			icon: HardDriveIcon,
		},
		{
			value: "light",
			label: "Light",
			icon: SunIcon,
		},
		{
			value: "dark",
			label: "Dark",
			icon: MoonIcon,
		},
	];

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

	const { name, email, image } = user || {};

	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger asChild>
				<button
					type="button"
					className={cn(
						"flex cursor-pointer w-full items-center gap-2 rounded-lg outline-hidden focus-visible:ring-2 focus-visible:ring-primary md:w-[100%+1rem] md:px-2 md:py-1.5 md:hover:bg-primary/5",
						user ? "justify-between" : "justify-end",
					)}
					aria-label="User menu"
				>
					{!!user && (
						<span className="flex items-center gap-2">
							<UserAvatar name={name ?? ""} avatarUrl={image} className="size-6" />
							{showUserName && (
								<span className="text-left leading-tight">
									<span className="font-medium text-sm">
										{name}
									</span>
									<span className="block text-xs opacity-70">
										{email}
									</span>
								</span>
							)}
						</span>
					)}

					{showUserName && <MoreVerticalIcon className="size-4" />}
				</button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end">
				{!!user && (
					<>
						<DropdownMenuLabel>
							{name}
							<span className="block font-normal text-xs opacity-70">
								{email}
							</span>
						</DropdownMenuLabel>

						<DropdownMenuSeparator />
					</>
				)}

				{/* Color mode selection */}
				<DropdownMenuSub>
					<DropdownMenuSubTrigger>
						<SunIcon className="mr-2 size-4" />
						{t("app.userMenu.colorMode")}
					</DropdownMenuSubTrigger>
					<DropdownMenuPortal>
						<DropdownMenuSubContent>
							<DropdownMenuRadioGroup
								value={theme}
								onValueChange={(value) => {
									setTheme(value);
									setCurrentTheme(value);
								}}
							>
								{colorModeOptions.map((option) => (
									<DropdownMenuRadioItem
										key={option.value}
										value={option.value}
									>
										<option.icon className="mr-2 size-4 opacity-50" />
										{option.label}
									</DropdownMenuRadioItem>
								))}
							</DropdownMenuRadioGroup>
						</DropdownMenuSubContent>
					</DropdownMenuPortal>
				</DropdownMenuSub>

				{/* Language selection */}
				{config.i18n.enabled && (
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
							<LanguagesIcon className="mr-2 size-4" />
							{t("app.userMenu.language")}
						</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								<DropdownMenuRadioGroup
									value={locale}
									onValueChange={(value) => {
										setLocale(value);
										updateLocale(value as Locale);
										router.refresh();
									}}
								>
									{Object.entries(locales).map(
										([localeKey, { label }]) => (
											<DropdownMenuRadioItem
												key={localeKey}
												value={localeKey}
											>
												{label}
											</DropdownMenuRadioItem>
										),
									)}
								</DropdownMenuRadioGroup>
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
				)}

				<DropdownMenuSeparator />

				{!!user && (
					<DropdownMenuItem asChild>
						<Link href="/settings/general">
							<SettingsIcon className="mr-2 size-4" />
							{t("app.userMenu.accountSettings")}
						</Link>
					</DropdownMenuItem>
				)}

				{!!user && user.role === "admin" && (
					<DropdownMenuItem asChild>
						<Link href="/app/admin">
							<SettingsIcon className="mr-2 size-4" />
							{t("app.menu.admin")}
						</Link>
					</DropdownMenuItem>
				)}

				<DropdownMenuItem asChild>
					<Link href="/">
						<HomeIcon className="mr-2 size-4" />
						{t("app.userMenu.home")}
					</Link>
				</DropdownMenuItem>

				{user ? (
					<DropdownMenuItem onClick={onLogout}>
						<LogOutIcon className="mr-2 size-4" />
						{t("app.userMenu.logout")}
					</DropdownMenuItem>
				) : (
					<DropdownMenuItem asChild>
						<Link
							href="/auth/login"
							className="flex w-full px-2 py-1 text-sm"
						>
							<LogInIcon className="mr-2 size-4" />
							{t("common.menu.login")}
						</Link>
					</DropdownMenuItem>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
