import { defineConfig, mergeConfig } from "vitest/config";
import { createBaseConfig } from "./base";

/**
 * React 项目的 Vitest 配置
 * 包含 React Testing Library 的设置
 */
export const createReactConfig = (overrides?: any) => {
	const baseConfig = createBaseConfig();

	return mergeConfig(
		baseConfig,
		defineConfig({
			test: {
				environment: "happy-dom",
				globals: true,
				setupFiles: ["./vitest.setup.ts"],
				css: true,
				...overrides?.test,
			},
			...overrides,
		}),
	);
};

export default createReactConfig();
