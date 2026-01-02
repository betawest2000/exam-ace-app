import { renderHook } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it, vi } from "vitest";
import { SessionContext } from "../lib/session-context";
import { useSession } from "./use-session";

describe("useSession Hook 测试", () => {
	it("应该在 Provider 中正确返回 session 数据", () => {
		const mockSessionData = {
			user: {
				id: "user-123",
				name: "Test User",
				email: "test@example.com",
			},
			session: {
				id: "session-123",
				expiresAt: new Date(),
			},
			isPending: false,
		};

		const wrapper = ({ children }: { children: React.ReactNode }) =>
			createElement(
				SessionContext.Provider,
				{ value: mockSessionData },
				children,
			);

		const { result } = renderHook(() => useSession(), { wrapper });

		expect(result.current).toEqual(mockSessionData);
		expect(result.current.user.id).toBe("user-123");
		expect(result.current.user.email).toBe("test@example.com");
	});

	it("应该在 Provider 外使用时抛出错误", () => {
		const originalError = console.error;
		console.error = vi.fn();

		expect(() => {
			renderHook(() => useSession());
		}).toThrow("useSession must be used within SessionProvider");

		console.error = originalError;
	});

	it("应该正确处理 isPending 状态", () => {
		const mockSessionData = {
			user: null,
			session: null,
			isPending: true,
		};

		const wrapper = ({ children }: { children: React.ReactNode }) =>
			createElement(
				SessionContext.Provider,
				{ value: mockSessionData },
				children,
			);

		const { result } = renderHook(() => useSession(), { wrapper });

		expect(result.current.isPending).toBe(true);
		expect(result.current.user).toBeNull();
		expect(result.current.session).toBeNull();
	});

	it("应该在用户未登录时返回 null", () => {
		const mockSessionData = {
			user: null,
			session: null,
			isPending: false,
		};

		const wrapper = ({ children }: { children: React.ReactNode }) =>
			createElement(
				SessionContext.Provider,
				{ value: mockSessionData },
				children,
			);

		const { result } = renderHook(() => useSession(), { wrapper });

		expect(result.current.user).toBeNull();
		expect(result.current.session).toBeNull();
		expect(result.current.isPending).toBe(false);
	});

	it("应该正确返回完整的 session 对象", () => {
		const mockSessionData = {
			user: {
				id: "user-789",
				name: "Full User",
				email: "full@example.com",
				image: "https://example.com/avatar.jpg",
				emailVerified: true,
			},
			session: {
				id: "session-789",
				userId: "user-789",
				expiresAt: new Date("2025-12-31"),
				token: "mock-token",
			},
			isPending: false,
		};

		const wrapper = ({ children }: { children: React.ReactNode }) =>
			createElement(
				SessionContext.Provider,
				{ value: mockSessionData },
				children,
			);

		const { result } = renderHook(() => useSession(), { wrapper });

		expect(result.current.user).toBeDefined();
		expect(result.current.user?.name).toBe("Full User");
		expect(result.current.user?.image).toBe(
			"https://example.com/avatar.jpg",
		);
		expect(result.current.session?.token).toBe("mock-token");
	});
});
