import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	test: {
		environment: "happy-dom",
		globals: true,
		setupFiles: ["./vitest.setup.ts"],
		css: true,
		coverage: {
			provider: "v8",
			reporter: ["text", "json", "html", "lcov"],
			exclude: [
				"node_modules/**",
				".next/**",
				"dist/**",
				"**/*.d.ts",
				"**/*.config.{js,ts,mjs,cjs}",
				"**/*.test.{js,ts,jsx,tsx}",
				"**/*.spec.{js,ts,jsx,tsx}",
				"tests/**",
				"coverage/**",
				"app/**/layout.tsx",
				"app/**/page.tsx",
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
			"**/.next/**",
			"**/dist/**",
			"**/coverage/**",
			"**/tests/**", // Playwright E2E tests
		],
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./"),
			"~": path.resolve(__dirname, "./"),
			"@analytics": path.resolve(__dirname, "./modules/analytics"),
			"@marketing": path.resolve(__dirname, "./modules/marketing"),
			"@saas": path.resolve(__dirname, "./modules/saas"),
			"@ui": path.resolve(__dirname, "./modules/ui"),
			"@code": path.resolve(__dirname, "./modules/code"),
			"@i18n": path.resolve(__dirname, "./modules/i18n"),
			"@shared": path.resolve(__dirname, "./modules/shared"),
		},
	},
});
