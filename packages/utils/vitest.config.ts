import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		environment: "node",
		globals: true,
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
				"coverage/**",
			],
			thresholds: {
				lines: 60,
				functions: 60,
				branches: 60,
				statements: 60,
			},
		},
		include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts}"],
		exclude: ["**/node_modules/**", "**/dist/**", "**/coverage/**"],
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./lib"),
		},
	},
});
