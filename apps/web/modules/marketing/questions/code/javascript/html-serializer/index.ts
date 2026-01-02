// JS Starter Code
const jsStarterCode = "/**\n * @param {Object} element\n * @return {string}\n */\nexport default function serializeHTML(element) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "type Element = { tag: string; children: Array<string | Element> };\n\nexport default function serializeHTML(element: Element): string {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import serializeHTML from \"./html-serializer\";\n\ndescribe(\"HTML serializer\", () => {\n  describe(\"single tag\", () => {\n    test(\"single children\", () => {\n      expect(\n        serializeHTML({\n          tag: \"div\",\n          children: [\"foo\"],\n        }),\n      ).toEqual(\"<div>\\n\\tfoo\\n</div>\");\n    });\n\n    test(\"single tag two children\", () => {\n      expect(\n        serializeHTML({ children: [\"bar1\", \"bar2\"], tag: \"span\" }),\n      ).toEqual(\"<span>\\n\\tbar1\\n\\tbar2\\n</span>\");\n    });\n  });\n\n  test(\"deeply nested\", () => {\n    expect(\n      serializeHTML({\n        tag: \"body\",\n        children: [\n          { tag: \"div\", children: [{ tag: \"span\", children: [\"foo\", \"bar\"] }] },\n          { tag: \"div\", children: [\"baz\"] },\n        ],\n      }),\n    ).toEqual(\n      \"<body>\\n\\t<div>\\n\\t\\t<span>\\n\\t\\t\\tfoo\\n\\t\\t\\tbar\\n\\t\\t</span>\\n\\t</div>\\n\\t<div>\\n\\t\\tbaz\\n\\t</div>\\n</body>\",\n    );\n  });\n});\n";

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
