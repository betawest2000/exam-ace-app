"use client";

import { LocaleLink } from "@i18n/routing";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@ui/components/navigation-menu";
import { cn } from "@ui/lib";
import { type JSXElementConstructor, useState } from "react";

export interface MenuItem {
	title: string;
	description?: string;
	tags?: string[];
	icon?: JSXElementConstructor<React.SVGProps<SVGSVGElement>>;
	href: string;
}

export interface MenuCategory {
	title: string;
	items: MenuItem[];
}

export interface MenuData {
	[key: string]: MenuCategory;
}

export interface CategoryItem {
	id: string;
	label: string;
	href?: string;
}

export interface LocaleHierarchyNavMenuProps {
	/** The label displayed on the navigation trigger */
	label: string;
	/** Menu data structure with categories and items */
	menuData: MenuData;
	/** Array of category definitions */
	categories: CategoryItem[];
	/** Default active category ID */
	defaultCategory?: string;
	/** Custom class name for the trigger */
	triggerClassName?: string;
	/** Width of the dropdown content */
	contentWidth?: string;
	/** Width of the left sidebar */
	sidebarWidth?: string;
}

export function LocaleHierarchyNavMenu({
	label,
	menuData,
	categories,
	defaultCategory,
	triggerClassName,
	contentWidth = "w-[200px]",
	sidebarWidth = "w-[200px]",
}: LocaleHierarchyNavMenuProps) {
	const [activeCategory, setActiveCategory] = useState(
		defaultCategory || categories[0]?.id || "",
	);

	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger
						className={cn(
							"bg-transparent px-3 py-2 font-medium text-foreground/80 text-sm",
							triggerClassName,
						)}
					>
						{label}
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className={cn("flex gap-3 p-4", contentWidth)}>
							{/* Left sidebar - Primary categories */}
							<div
								className={cn(
									"flex flex-col gap-2",
									sidebarWidth,
								)}
							>
								{categories.map((category) => {
									const hasItems =
										menuData[category.id]?.items &&
										menuData[category.id].items.length > 0;

									if (category.href && !hasItems) {
										return (
											<LocaleLink
												key={category.id}
												href={category.href}
												className={cn(
													"rounded-md px-3 py-2 text-left text-sm transition-colors",
													"text-foreground/80 hover:bg-accent/50 hover:text-accent-foreground",
												)}
											>
												{category.label}
											</LocaleLink>
										);
									}

									return (
										<button
											type="button"
											key={category.id}
											onMouseEnter={() =>
												setActiveCategory(category.id)
											}
											className={cn(
												"rounded-md px-3 py-2 text-left text-sm transition-colors",
												activeCategory === category.id
													? "bg-accent font-medium text-accent-foreground"
													: "text-foreground/80 hover:bg-accent/50 hover:text-accent-foreground",
											)}
										>
											{category.label}
										</button>
									);
								})}
							</div>

							{/* Right content - Secondary items */}
							<div className="flex-1 space-y-3">
								{menuData[activeCategory]?.items.map((item) => {
									return (
										<NavigationMenuLink
											key={item.title}
											asChild
										>
											<LocaleLink
												href={item.href}
												className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
											>
												<div className="flex items-start gap-3">
													<div className="flex-1">
														<div className="mb-1 font-medium text-sm leading-none">
															{item.title}
														</div>
													</div>
												</div>
											</LocaleLink>
										</NavigationMenuLink>
									);
								})}
							</div>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
