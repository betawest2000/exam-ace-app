import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import React from "react";
import { afterEach, vi } from "vitest";

// 每个测试后清理
afterEach(() => {
	cleanup();
});

// Mock Next.js router
vi.mock("next/navigation", () => ({
	useRouter: () => ({
		push: vi.fn(),
		replace: vi.fn(),
		prefetch: vi.fn(),
		back: vi.fn(),
		pathname: "/",
		query: {},
	}),
	usePathname: () => "/",
	useSearchParams: () => new URLSearchParams(),
	useParams: () => ({}),
}));

// Mock Next.js Image
vi.mock("next/image", () => ({
	default: (props: any) => {
		// eslint-disable-next-line jsx-a11y/alt-text
		return React.createElement("img", props);
	},
}));
