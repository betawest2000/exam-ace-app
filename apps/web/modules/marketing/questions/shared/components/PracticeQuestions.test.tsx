import { render, screen } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it, vi } from "vitest";
import { PracticeQuestions } from "./PracticeQuestions";

// Mock next-intl
vi.mock("next-intl", () => ({
	useTranslations: () => (key: string) => {
		if (key === "title") return "Practice Questions";
		if (key === "description") return "Gain expertise";
		if (key === "formats.uiCoding") return "UI Coding";
		if (key === "formats.jsFunctions") return "JavaScript Functions";
		if (key === "formats.systemDesign") return "System Design";
		if (key === "formats.quiz") return "Quiz";
		if (key === "formats.algoCoding") return "Algo Coding";
		if (key === "formats.behavioral") return "Behavioral";
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
			createElement("div", null, `${formats.length} formats`),
		),
}));

// Mock lucide-react icons
vi.mock("lucide-react", () => ({
	BookOpen: (props: any) => createElement("svg", props),
	GitBranch: (props: any) => createElement("svg", props),
	LayoutTemplate: (props: any) => createElement("svg", props),
	MessageCircleQuestion: (props: any) => createElement("svg", props),
	Network: (props: any) => createElement("svg", props),
	SquareCode: (props: any) => createElement("svg", props),
}));

describe("PracticeQuestions", () => {
	const defaultProps = {
		jsFunctionsCount: 140,
		algoCodingCount: 92,
		userInterfaceCodingCount: 50,
		frontendSystemDesignCount: 30,
		quizCount: 100,
		behavioralGuidesCount: 20,
	};

	it("should render QuestionSection with title and description", () => {
		render(<PracticeQuestions {...defaultProps} />);

		expect(screen.getByText("Practice Questions")).toBeInTheDocument();
		expect(screen.getByText("Gain expertise")).toBeInTheDocument();
	});

	it("should render 6 question formats", () => {
		render(<PracticeQuestions {...defaultProps} />);

		expect(screen.getByText("6 formats")).toBeInTheDocument();
	});

	it("should pass correct counts to formats", () => {
		const { container } = render(<PracticeQuestions {...defaultProps} />);

		expect(container).toBeInTheDocument();
		expect(screen.getByTestId("question-section")).toBeInTheDocument();
	});
});
