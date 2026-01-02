import { defineConfig } from "vitest/config";

/**
 * 基础的 Vitest 配置
 * 用于纯 TypeScript/JavaScript 项目
 */
export const createBaseConfig = (overrides?: any) => {
	return defineConfig({
		test: {
			globals: true,
			environment: "node",
			coverage: {
				provider: "v8",
				reporter: ["text", "json", "html", "lcov"],
				exclude: [
					"node_modules/**",
					"dist/**",
					"**/*.d.ts",
					"**/*.config.{js,ts,mjs,cjs}",
					"**/*.test.{js,ts,jsx,tsx}",
					"**/*.spec.{js,ts,jsx,tsx}",
					"**/tests/**",
					"**/__tests__/**",
					".next/**",
					".turbo/**",
					"coverage/**",
				],
				thresholds: {
					lines: 60,
					functions: 60,
					branches: 60,
					statements: 60,
				},
			},
			include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
			exclude: [
				"**/node_modules/**",
				"**/dist/**",
				"**/.next/**",
				"**/.turbo/**",
				"**/coverage/**",
				"**/playwright/**",
				"**/*.e2e.{test,spec}.{js,ts,jsx,tsx}",
			],
			...overrides?.test,
		},
		...overrides,
	});
};

export default createBaseConfig();
