import { render, screen } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it, vi } from "vitest";
import type { QuestionCardProps } from "./QuestionCard";
import { QuestionSection } from "./QuestionSection";

// Mock QuestionCard component
vi.mock("./QuestionCard", () => ({
	QuestionCard: ({ title, href }: QuestionCardProps) =>
		createElement("div", { "data-testid": "question-card" }, title),
}));

describe("QuestionSection", () => {
	const mockIcon = createElement("svg", { "data-testid": "mock-icon" });

	const mockFormats: QuestionCardProps[] = [
		{
			title: "JavaScript Functions",
			href: "/questions/javascript",
			icon: mockIcon,
			questionCompleted: 5,
			totalQuestions: 10,
			type: "questions",
		},
		{
			title: "Algorithms",
			href: "/questions/algorithms",
			icon: mockIcon,
			questionCompleted: 3,
			totalQuestions: 8,
			type: "questions",
		},
	];

	it("should render section with title and description", () => {
		render(
			<QuestionSection
				title="Practice Questions"
				description="Learn by practicing"
				formats={mockFormats}
			/>,
		);

		expect(screen.getByText("Practice Questions")).toBeInTheDocument();
		expect(screen.getByText("Learn by practicing")).toBeInTheDocument();
	});

	it("should render all question cards", () => {
		render(
			<QuestionSection
				title="Practice Questions"
				description="Learn by practicing"
				formats={mockFormats}
			/>,
		);

		const cards = screen.getAllByTestId("question-card");
		expect(cards).toHaveLength(2);
		expect(screen.getByText("JavaScript Functions")).toBeInTheDocument();
		expect(screen.getByText("Algorithms")).toBeInTheDocument();
	});

	it("should render without title and description", () => {
		render(<QuestionSection formats={mockFormats} />);

		const cards = screen.getAllByTestId("question-card");
		expect(cards).toHaveLength(2);
	});

	it("should render empty formats array", () => {
		render(
			<QuestionSection
				title="No Questions"
				description="No questions available"
				formats={[]}
			/>,
		);

		expect(screen.getByText("No Questions")).toBeInTheDocument();
		expect(screen.queryByTestId("question-card")).not.toBeInTheDocument();
	});
});
