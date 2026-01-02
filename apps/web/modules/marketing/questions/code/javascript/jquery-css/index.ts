// JS Starter Code
const jsStarterCode = "/**\n * @param {string} selector\n * @return {{css: Function}}\n */\nexport default function $(selector) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "interface JQuery {\n  css: (\n    prop: string,\n    value?: boolean | string | number,\n  ) => JQuery | string | undefined;\n}\n\nexport default function $(selector: string): JQuery {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import $ from \"./jquery-css\";\n\ndescribe(\"jQuery.css\", () => {\n  describe(\"get property\", () => {\n    beforeEach(() => {\n      document.body.innerHTML = '<button style=\"color: blue\">Click me</button>';\n    });\n\n    test(\"get existing style\", () => {\n      expect($(\"button\").css(\"color\")).toBe(\"blue\");\n    });\n\n    test(\"get non-existent style\", () => {\n      expect($(\"button\").css(\"fontSize\")).toBe(undefined);\n    });\n\n    test(\"non-existent element\", () => {\n      expect($(\"no-such-thing\").css(\"fontSize\")).toBe(undefined);\n    });\n  });\n\n  describe(\"set property\", () => {\n    beforeEach(() => {\n      document.body.innerHTML = \"<button>Click me</button>\";\n    });\n\n    test(\"no elements match the selector\", () => {\n      expect(() => {\n        // @ts-ignore\n        $(\"no-such-thing\").css(\"color\", \"red\").css(\"fontSize\", \"12px\");\n      }).not.toThrow();\n    });\n\n    test(\"set css\", () => {\n      $(\"button\").css(\"color\", \"red\");\n      $(\"button\").css(\"backgroundColor\", \"tomato\");\n      $(\"button\").css(\"fontSize\", \"12px\");\n\n      expect(document.querySelector(\"button\")!.style.color).toBe(\"red\");\n      expect(document.querySelector(\"button\")!.style.backgroundColor).toBe(\n        \"tomato\",\n      );\n      expect(document.querySelector(\"button\")!.style.fontSize).toBe(\"12px\");\n\n      $(\"button\").css(\"color\", \"orange\");\n      expect(document.querySelector(\"button\")!.style.color).toBe(\"orange\");\n    });\n\n    test(\"chain calls\", () => {\n      // @ts-ignore\n      $(\"button\")\n        .css(\"color\", \"red\")\n        // @ts-ignore\n        .css(\"backgroundColor\", \"tomato\")\n        .css(\"fontSize\", \"12px\");\n\n      expect(document.querySelector(\"button\")!.style.color).toBe(\"red\");\n      expect(document.querySelector(\"button\")!.style.backgroundColor).toBe(\n        \"tomato\",\n      );\n      expect(document.querySelector(\"button\")!.style.fontSize).toBe(\"12px\");\n    });\n\n    test(\"overwrites previous styles\", () => {\n      // @ts-ignore\n      $(\"button\")\n        .css(\"color\", \"red\")\n        // @ts-ignore\n        .css(\"backgroundColor\", \"tomato\")\n        .css(\"fontSize\", \"12px\")\n        .css(\"color\", \"orange\");\n\n      expect(document.querySelector(\"button\")!.style.color).toBe(\"orange\");\n      expect(document.querySelector(\"button\")!.style.backgroundColor).toBe(\n        \"tomato\",\n      );\n      expect(document.querySelector(\"button\")!.style.fontSize).toBe(\"12px\");\n    });\n  });\n});\n";

// TS Test Cases
const tsTestCode = jsTestCode; 

// JS Test File Name
const jsTestFileName = "submission.spec.ts";

// TS Test File Name
const tsTestFileName = "submission.spec.ts";
// Additional Files
const additionalFiles = {} as Record<string, string>;

const code = {
  jsStarterCode,
  tsStarterCode,
  jsTestCode,
  tsTestCode,
  jsTestFileName,
  tsTestFileName,
  additionalFiles,
} as Record<string, string | Record<string, string>>;

// Export the code object
export default code;
