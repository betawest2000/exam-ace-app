import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { getBaseUrl } from "./base-url";

describe("getBaseUrl 工具函数测试", () => {
	const originalEnv = process.env;

	beforeEach(() => {
		// 重置环境变量
		vi.resetModules();
		process.env = { ...originalEnv };
	});

	afterEach(() => {
		process.env = originalEnv;
	});

	it("应该优先返回 NEXT_PUBLIC_SITE_URL", () => {
		process.env.NEXT_PUBLIC_SITE_URL = "https://example.com";
		process.env.NEXT_PUBLIC_VERCEL_URL = "vercel-app.vercel.app";
		process.env.PORT = "4000";

		expect(getBaseUrl()).toBe("https://example.com");
	});

	it("应该在没有 SITE_URL 时返回 VERCEL_URL", () => {
		delete process.env.NEXT_PUBLIC_SITE_URL;
		process.env.NEXT_PUBLIC_VERCEL_URL = "my-app.vercel.app";

		expect(getBaseUrl()).toBe("https://my-app.vercel.app");
	});

	it("应该在本地开发时使用默认端口 3000", () => {
		delete process.env.NEXT_PUBLIC_SITE_URL;
		delete process.env.NEXT_PUBLIC_VERCEL_URL;
		delete process.env.PORT;

		expect(getBaseUrl()).toBe("http://localhost:3000");
	});

	it("应该在本地开发时使用自定义端口", () => {
		delete process.env.NEXT_PUBLIC_SITE_URL;
		delete process.env.NEXT_PUBLIC_VERCEL_URL;
		process.env.PORT = "8080";

		expect(getBaseUrl()).toBe("http://localhost:8080");
	});

	it("应该正确处理空字符串的环境变量", () => {
		process.env.NEXT_PUBLIC_SITE_URL = "";
		process.env.NEXT_PUBLIC_VERCEL_URL = "";

		// 空字符串会被认为是 falsy，应该回退到 localhost
		expect(getBaseUrl()).toBe("http://localhost:3000");
	});

	it("应该正确处理带有路径的 SITE_URL", () => {
		process.env.NEXT_PUBLIC_SITE_URL = "https://example.com/app";

		expect(getBaseUrl()).toBe("https://example.com/app");
	});
});
