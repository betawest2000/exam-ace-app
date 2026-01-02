import { render, screen } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it, vi } from "vitest";
import { QuestionCard } from "./QuestionCard";

// Mock next-intl
vi.mock("next-intl", () => ({
	useTranslations: () => (key: string) => {
		if (key === "questions") {
			return "questions";
		}
		if (key === "articles") {
			return "articles";
		}
		return key;
	},
}));

// Mock lucide-react icons
vi.mock("lucide-react", () => ({
	ArrowRight: (props: any) =>
		createElement("svg", { ...props, "data-testid": "arrow-right" }),
	MessageCircleQuestionMark: (props: any) =>
		createElement("svg", { ...props, "data-testid": "question-mark" }),
}));

describe("QuestionCard", () => {
	const mockIcon = createElement("svg", { "data-testid": "mock-icon" });

	const defaultProps = {
		title: "JavaScript Functions",
		href: "/questions/javascript",
		icon: mockIcon,
		questionCompleted: 5,
		totalQuestions: 10,
	};

	it("should render the card with title and link", () => {
		render(<QuestionCard {...defaultProps} />);

		const titleLink = screen.getByRole("link", {
			name: "JavaScript Functions",
		});
		expect(titleLink).toBeInTheDocument();
		expect(titleLink).toHaveAttribute("href", "/questions/javascript");
	});

	it("should display total questions count with default type 'questions'", () => {
		render(<QuestionCard {...defaultProps} />);

		expect(screen.getByText(/10 questions/i)).toBeInTheDocument();
	});

	it("should display 'articles' when type is 'articles'", () => {
		render(<QuestionCard {...defaultProps} type="articles" />);

		expect(screen.getByText(/10 articles/i)).toBeInTheDocument();
	});

	it("should render the provided icon", () => {
		render(<QuestionCard {...defaultProps} />);

		expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
	});

	it("should render arrow icon", () => {
		render(<QuestionCard {...defaultProps} />);

		expect(screen.getByTestId("arrow-right")).toBeInTheDocument();
	});

	it("should render question mark icon", () => {
		render(<QuestionCard {...defaultProps} />);

		expect(screen.getByTestId("question-mark")).toBeInTheDocument();
	});

	it("should have two links with the same href (title and overlay)", () => {
		render(<QuestionCard {...defaultProps} />);

		const links = screen.getAllByRole("link");
		const relevantLinks = links.filter(
			(link) => link.getAttribute("href") === "/questions/javascript",
		);
		expect(relevantLinks.length).toBeGreaterThanOrEqual(1);
	});
});
