// JS Starter Code
const jsStarterCode = "/**\n * @param {...any} args\n * @return {number}\n */\nexport default function numberOfArguments() {\n  throw \"Not implemented\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function numberOfArguments(...args: Array<any>): number {\n  throw \"Not implemented\";\n}\n";

// JS Test Cases
const jsTestCode = "import numberOfArguments from \"./number-of-arguments\";\n\ndescribe(\"numberOfArguments\", () => {\n  test(\"no arguments\", () => {\n    expect(numberOfArguments()).toBe(0);\n  });\n\n  test(\"one argument\", () => {\n    expect(numberOfArguments(0)).toBe(1);\n    expect(numberOfArguments(null)).toBe(1);\n    expect(numberOfArguments(undefined)).toBe(1);\n    expect(numberOfArguments(NaN)).toBe(1);\n    expect(numberOfArguments(true)).toBe(1);\n    expect(numberOfArguments(false)).toBe(1);\n    expect(numberOfArguments([1, 2, 3])).toBe(1);\n    expect(numberOfArguments({})).toBe(1);\n  });\n\n  test(\"two arguments\", () => {\n    expect(numberOfArguments(0, 1)).toBe(2);\n    expect(numberOfArguments(true, false)).toBe(2);\n    expect(numberOfArguments([1, 2, 3], [4, 5, 6])).toBe(2);\n    expect(numberOfArguments({}, [])).toBe(2);\n  });\n\n  test(\"multiple arguments\", () => {\n    expect(numberOfArguments(0, 1, 2)).toBe(3);\n    expect(numberOfArguments(true, false, null)).toBe(3);\n    expect(numberOfArguments([1, 2, 3], [4, 5, 6], [7, 8, 9])).toBe(3);\n    expect(numberOfArguments(...[1, 2, 3])).toBe(3);\n    expect(numberOfArguments({}, [], new Set())).toBe(3);\n  });\n});\n";

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
