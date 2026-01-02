import { defineConfig, mergeConfig } from "vitest/config";
import { createBaseConfig } from "./base";

/**
 * Node.js 项目的 Vitest 配置
 * 适用于后端 API、工具函数等
 */
export const createNodeConfig = (overrides?: any) => {
	const baseConfig = createBaseConfig();

	return mergeConfig(
		baseConfig,
		defineConfig({
			test: {
				environment: "node",
				globals: true,
				...overrides?.test,
			},
			...overrides,
		}),
	);
};

export default createNodeConfig();
