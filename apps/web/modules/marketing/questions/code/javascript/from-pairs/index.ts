// JS Starter Code
const jsStarterCode = "/**\n * Creates an object from an array of key-value pairs.\n *\n * @param {Array} pairs - An array of key-value pairs.\n * @returns {Object} - The object composed from the key-value pairs.\n */\nexport default function fromPairs(pairs) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function fromPairs<T>(\n  pairs: Array<[string | number, T]>,\n): Record<string | number, T> {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import fromPairs from \"./from-pairs\";\n\ndescribe(\"fromPairs\", () => {\n  test(\"empty array\", () => {\n    expect(fromPairs([])).toEqual({});\n  });\n\n  test(\"single-element array\", () => {\n    expect(fromPairs([[\"a\", 1]])).toEqual({ a: 1 });\n  });\n\n  test(\"two-element array\", () => {\n    expect(\n      fromPairs([\n        [\"a\", 1],\n        [\"b\", 2],\n      ]),\n    ).toEqual({ a: 1, b: 2 });\n  });\n\n  test(\"multiple-element array\", () => {\n    expect(\n      fromPairs([\n        [\"a\", 1],\n        [\"b\", 2],\n        [\"c\", 3],\n      ]),\n    ).toEqual({ a: 1, b: 2, c: 3 });\n  });\n});\n";

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
