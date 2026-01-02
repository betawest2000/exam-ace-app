import { render, screen } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it, vi } from "vitest";
import { Footer } from "./Footer";

// Mock LocaleLink 组件
vi.mock("@i18n/routing", () => ({
	LocaleLink: ({
		href,
		children,
	}: {
		href: string;
		children: React.ReactNode;
	}) => createElement("a", { href }, children),
}));

// Mock cn 函数
vi.mock("@ui/lib", () => ({
	cn: (...classes: any[]) => classes.filter(Boolean).join(" "),
}));

describe("Footer 组件测试", () => {
	it("应该正确渲染 Footer 组件", () => {
		render(<Footer />);

		const footer = screen.getByRole("contentinfo");
		expect(footer).toBeInTheDocument();
	});

	it("应该显示版权信息", () => {
		render(<Footer />);

		expect(screen.getByText("All rights reserved")).toBeInTheDocument();
	});

	it("应该显示隐私政策链接", () => {
		render(<Footer />);

		const privacyLink = screen.getByText("Privacy policy");
		expect(privacyLink).toBeInTheDocument();
		expect(privacyLink).toHaveAttribute("href", "/legal/privacy-policy");
	});

	it("应该显示条款和条件链接", () => {
		render(<Footer />);

		const termsLink = screen.getByText("Terms and conditions");
		expect(termsLink).toBeInTheDocument();
		expect(termsLink).toHaveAttribute("href", "/legal/terms");
	});

	it("应该包含分隔符", () => {
		render(<Footer />);

		const separators = screen.getAllByText("|");
		expect(separators).toHaveLength(2);
	});

	it("应该应用正确的样式类", () => {
		render(<Footer />);

		const footer = screen.getByRole("contentinfo");
		expect(footer).toHaveClass(
			"container",
			"max-w-6xl",
			"py-6",
			"text-center",
		);
	});

	it("应该在分隔符上应用 opacity 样式", () => {
		const { container } = render(<Footer />);

		const separators = container.querySelectorAll(".opacity-50");
		expect(separators).toHaveLength(2);
	});

	it("应该渲染所有链接和文本元素", () => {
		render(<Footer />);

		// 检查所有链接
		const links = screen.getAllByRole("link");
		expect(links).toHaveLength(3); // All rights reserved, Privacy policy, Terms and conditions
	});

	it("版权链接应该指向首页", () => {
		render(<Footer />);

		const homeLink = screen.getByText("All rights reserved");
		expect(homeLink).toHaveAttribute("href", "/");
	});

	it("应该按正确顺序显示元素", () => {
		const { container } = render(<Footer />);

		const footer = container.querySelector("footer");
		const textContent = footer?.textContent;

		expect(textContent).toContain("All rights reserved");
		expect(textContent).toContain("Privacy policy");
		expect(textContent).toContain("Terms and conditions");

		// 验证顺序
		const allRightsIndex = textContent?.indexOf("All rights reserved");
		const privacyIndex = textContent?.indexOf("Privacy policy");
		const termsIndex = textContent?.indexOf("Terms and conditions");

		expect(allRightsIndex).toBeLessThan(privacyIndex!);
		expect(privacyIndex).toBeLessThan(termsIndex!);
	});
});
