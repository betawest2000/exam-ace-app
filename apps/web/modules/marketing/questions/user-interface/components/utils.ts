export const getTemplateFromFramework = (
	framework: string,
): "react" | "vue" | "vanilla" | "svelte" => {
	switch (framework) {
		case "react":
			return "react";
		case "vue":
			return "vue";
		case "svelte":
			return "svelte";
		case "javascript":
			return "vanilla";
		default:
			return "react";
	}
};
