// JS Starter Code
const jsStarterCode = "/**\n * @param {*} value\n * @return {string}\n */\nexport default function jsonStringify(value) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function jsonStringify(value: unknown): string {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import jsonStringify from \"./json-stringify\";\n\ndescribe(\"jsonStringify\", () => {\n  describe(\"primitives\", () => {\n    test(\"null\", () => {\n      expect(jsonStringify(null)).toEqual(\"null\");\n    });\n\n    test(\"boolean\", () => {\n      expect(jsonStringify(true)).toEqual(\"true\");\n      expect(jsonStringify(false)).toEqual(\"false\");\n    });\n\n    test(\"numbers\", () => {\n      expect(jsonStringify(1)).toEqual(\"1\");\n      expect(jsonStringify(-1)).toEqual(\"-1\");\n    });\n\n    test(\"strings\", () => {\n      expect(jsonStringify(\"123\")).toEqual('\"123\"');\n      expect(jsonStringify(\"foo\")).toEqual('\"foo\"');\n    });\n  });\n\n  describe(\"arrays\", () => {\n    test(\"empty\", () => {\n      expect(jsonStringify([])).toEqual(\"[]\");\n    });\n\n    test(\"non-nested\", () => {\n      expect(jsonStringify([1, 2, 3])).toEqual(\"[1,2,3]\");\n      expect(jsonStringify([true, false])).toEqual(\"[true,false]\");\n      expect(jsonStringify([\"1\", \"2\", \"3\"])).toEqual('[\"1\",\"2\",\"3\"]');\n      expect(jsonStringify([{}, {}])).toEqual(\"[{},{}]\");\n      expect(jsonStringify([null, null])).toEqual(\"[null,null]\");\n    });\n\n    test(\"nested\", () => {\n      expect(jsonStringify([[]])).toEqual(\"[[]]\");\n      expect(jsonStringify([[[]]])).toEqual(\"[[[]]]\");\n      expect(jsonStringify([[], []])).toEqual(\"[[],[]]\");\n      expect(jsonStringify([[1], [2]])).toEqual(\"[[1],[2]]\");\n      expect(jsonStringify([1, [2, [3, [4, []]]]])).toEqual(\n        \"[1,[2,[3,[4,[]]]]]\",\n      );\n      expect(jsonStringify([1, 2, [3, 4, [5, 6], 7, 8]])).toEqual(\n        \"[1,2,[3,4,[5,6],7,8]]\",\n      );\n    });\n\n    test(\"mixed\", () => {\n      expect(\n        jsonStringify([\n          42,\n          \"Hello, World!\",\n          true,\n          null,\n          { name: \"John\", age: 30 },\n          [1, 2, 3],\n        ]),\n      ).toEqual(\n        '[42,\"Hello, World!\",true,null,{\"name\":\"John\",\"age\":30},[1,2,3]]',\n      );\n    });\n  });\n\n  describe(\"objects\", () => {\n    test(\"empty\", () => {\n      expect(jsonStringify({})).toEqual(\"{}\");\n    });\n\n    test(\"non-nested\", () => {\n      expect(jsonStringify({ foo: 1 })).toEqual('{\"foo\":1}');\n      expect(jsonStringify({ foo: true })).toEqual('{\"foo\":true}');\n      expect(jsonStringify({ foo: false })).toEqual('{\"foo\":false}');\n      expect(jsonStringify({ foo: \"bar\" })).toEqual('{\"foo\":\"bar\"}');\n      expect(jsonStringify({ foo: [] })).toEqual('{\"foo\":[]}');\n      expect(jsonStringify({ foo: null })).toEqual('{\"foo\":null}');\n    });\n\n    test(\"nested\", () => {\n      expect(jsonStringify({ foo: { foo: true } })).toEqual(\n        '{\"foo\":{\"foo\":true}}',\n      );\n      expect(jsonStringify({ foo: true, bar: { foo: 2 } })).toEqual(\n        '{\"foo\":true,\"bar\":{\"foo\":2}}',\n      );\n    });\n\n    test(\"mixed\", () => {\n      expect(\n        jsonStringify({\n          name: \"foo\",\n          age: 18,\n          attr: [\"coding\", 123],\n        }),\n      ).toEqual('{\"name\":\"foo\",\"age\":18,\"attr\":[\"coding\",123]}');\n    });\n  });\n});\n";

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
