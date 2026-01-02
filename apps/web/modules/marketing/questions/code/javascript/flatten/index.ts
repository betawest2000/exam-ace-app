// JS Starter Code
const jsStarterCode = "/**\n * @param {Array<*|Array>} value\n * @return {Array}\n */\nexport default function flatten(value) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "type ArrayValue = any | Array<ArrayValue>;\n\nexport default function flatten(value: Array<ArrayValue>): Array<any> {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import flatten from \"./flatten\";\n\ndescribe(\"flatten array\", () => {\n  test(\"empty array\", () => {\n    expect(flatten([])).toEqual([]);\n    expect(flatten([[], [[]], [[], [[[]]]]])).toEqual([]);\n  });\n\n  test(\"single-element array\", () => {\n    expect(flatten([1])).toEqual([1]);\n    expect(flatten([\"foo\"])).toEqual([\"foo\"]);\n    expect(flatten([undefined])).toEqual([undefined]);\n  });\n\n  test(\"array with only one level\", () => {\n    expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);\n    expect(flatten([\"foo\", \"bar\"])).toEqual([\"foo\", \"bar\"]);\n    expect(flatten([null, true, undefined])).toEqual([null, true, undefined]);\n  });\n\n  test(\"array with multiple levels of nesting\", () => {\n    expect(flatten([0, 1, 2, [3, 4]])).toEqual([0, 1, 2, 3, 4]);\n    expect(flatten([1, [2, [3]]])).toEqual([1, 2, 3]);\n    expect(\n      flatten([\n        [1, 2],\n        [3, 4],\n      ]),\n    ).toEqual([1, 2, 3, 4]);\n    expect(flatten([\"foo\", [\"bar\"]])).toEqual([\"foo\", \"bar\"]);\n    expect(flatten([[null, [true]], undefined])).toEqual([\n      null,\n      true,\n      undefined,\n    ]);\n  });\n\n  test(\"list-style array\", () => {\n    expect(flatten([1, [2, [3, [4, [5]]]]])).toEqual([1, 2, 3, 4, 5]);\n    expect(flatten([[[[[1], 2], 3], 4], 5])).toEqual([1, 2, 3, 4, 5]);\n  });\n\n  test(\"deeply-nested single-element array\", () => {\n    expect(flatten([[[[1]]]])).toEqual([1]);\n  });\n});\n";

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
