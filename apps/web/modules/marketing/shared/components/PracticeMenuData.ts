import { EXAMS } from "@repo/database/prisma/exams";
import { useTranslations } from "next-intl";
import type { CategoryItem, MenuData } from "./LocaleHierarchyNavMenu";

export function usePracticeMenuData() {
	const t = useTranslations();

	// 按公司分组考试
	const examsByCompany = EXAMS.data.reduce(
		(acc, exam) => {
			const company = exam.company;
			if (!company) {
				return acc;
			}
			if (!acc[company]) {
				acc[company] = [];
			}
			// acc[company].push(exam);
			return acc;
		},
		{} as Record<string, typeof EXAMS.data>,
	);

	// 创建 practiceMenuData
	const practiceMenuData: MenuData = {};

	// 为每个公司创建菜单项
	Object.entries(examsByCompany).forEach(([company, exams]) => {
		const companyKey = company.toLowerCase();
		practiceMenuData[companyKey] = {
			title: t(
				`common.examMenu.companies.${companyKey.toLocaleLowerCase()}`,
			),
			items: exams.map((exam) => ({
				title: exam.title,
				href: `/exams/${exam.id}`,
			})),
		};
	});

	// 添加 all 到最后
	practiceMenuData.all = {
		title: t("common.examMenu.companies.all"),
		items: [],
	};

	// 创建 practiceCategories
	const practiceCategories: CategoryItem[] = Object.keys(examsByCompany).map(
		(company) => ({
			id: company.toLowerCase(),
			label: t(`common.examMenu.companies.${company.toLowerCase()}`),
			...(examsByCompany[company]?.length > 0
				? {}
				: { href: `/exams/companies/${company.toLowerCase()}` }),
		}),
	);

	// 添加 all 到最后
	practiceCategories.push({
		id: "all",
		label: t("common.examMenu.companies.all"),
		href: "/exams",
	});

	return {
		practiceMenuData,
		practiceCategories,
	};
}
