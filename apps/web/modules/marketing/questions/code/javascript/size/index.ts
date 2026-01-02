// JS Starter Code
const jsStarterCode = "/**\n * Gets the size of `collection` by returning its length for array-like values or the number of own enumerable string keyed properties for objects.\n *\n * @param {Array | Object | Map | Set | string | null | undefined} collection The collection to inspect.\n * @returns {number} Returns the collection size.\n */\nexport default function size(collection) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function size(\n  collection:\n    | Array<any>\n    | Object\n    | Map<any, any>\n    | Set<any>\n    | string\n    | null\n    | undefined,\n): number {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import size from \"./size\";\n\ndescribe(\"size\", () => {\n  test(\"null\", () => {\n    expect(size(null)).toBe(0);\n  });\n\n  test(\"undefined\", () => {\n    expect(size(undefined)).toBe(0);\n  });\n\n  test(\"arrays\", () => {\n    expect(size([])).toBe(0);\n    expect(size([1])).toBe(1);\n    expect(size([1, 2])).toBe(2);\n    expect(size([1, 2, 3])).toBe(3);\n  });\n\n  test(\"objects\", () => {\n    expect(size({})).toBe(0);\n    expect(size({ a: 1 })).toBe(1);\n    expect(size({ a: 1, b: 2 })).toBe(2);\n    expect(size({ a: 1, b: 2, c: 3 })).toBe(3);\n  });\n\n  test(\"strings\", () => {\n    expect(size(\"\")).toBe(0);\n    expect(size(\"a\")).toBe(1);\n    expect(size(\"ab\")).toBe(2);\n    expect(size(\"hello\")).toBe(5);\n  });\n\n  test(\"sets\", () => {\n    expect(size(new Set([]))).toBe(0);\n    expect(size(new Set([1]))).toBe(1);\n    expect(size(new Set([1, 2]))).toBe(2);\n    expect(size(new Set([1, 2, 3]))).toBe(3);\n  });\n\n  test(\"maps\", () => {\n    expect(size(new Map([]))).toBe(0);\n    expect(size(new Map([[1, 2]]))).toBe(1);\n    expect(\n      size(\n        new Map([\n          [1, 2],\n          [3, 4],\n        ]),\n      ),\n    ).toBe(2);\n    expect(\n      size(\n        new Map([\n          [1, 2],\n          [3, 4],\n          [5, 6],\n        ]),\n      ),\n    ).toBe(3);\n  });\n\n  test(\"unsupported\", () => {\n    expect(size(new Date())).toBe(0);\n    expect(size(/hello/)).toBe(0);\n  });\n});\n";

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
