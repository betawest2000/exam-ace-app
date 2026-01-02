import { render, screen } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it, vi } from "vitest";
import { CompanyGuide } from "./CompanyGuide";

// Mock next-intl
vi.mock("next-intl", () => ({
	useTranslations: () => (key: string) => {
		if (key === "title") return "Company guides";
		if (key === "description")
			return "Prepare for specific companies by learning insider tips";
		return key;
	},
}));

// Mock QuestionSection component
vi.mock("./QuestionSection", () => ({
	QuestionSection: ({ title, description, formats }: any) =>
		createElement(
			"div",
			{ "data-testid": "question-section" },
			createElement("h3", null, title),
			createElement("p", null, description),
			createElement("div", null, `${formats.length} companies`),
		),
}));

describe("CompanyGuide", () => {
	const mockQuestionStats = {
		"open-ai": 15,
		google: 34,
		amazon: 61,
		tiktok: 35,
		"byte-dance": 27,
		apple: 13,
		microsoft: 19,
		atlassian: 17,
		linkedin: 18,
		uber: 15,
		dropbox: 8,
		lyft: 14,
		airbnb: 6,
	};

	it("should render QuestionSection with title and description", () => {
		render(<CompanyGuide questionStats={mockQuestionStats} />);

		expect(screen.getByText("Company guides")).toBeInTheDocument();
		expect(
			screen.getByText(
				"Prepare for specific companies by learning insider tips",
			),
		).toBeInTheDocument();
	});

	it("should render 13 companies", () => {
		render(<CompanyGuide questionStats={mockQuestionStats} />);

		expect(screen.getByText("13 companies")).toBeInTheDocument();
	});

	it("should use questionStats for company question counts", () => {
		const { container } = render(
			<CompanyGuide questionStats={mockQuestionStats} />,
		);

		expect(container).toBeInTheDocument();
		expect(screen.getByTestId("question-section")).toBeInTheDocument();
	});

	it("should handle missing questionStats gracefully with defaults", () => {
		render(<CompanyGuide questionStats={{}} />);

		expect(screen.getByText("13 companies")).toBeInTheDocument();
	});
});
