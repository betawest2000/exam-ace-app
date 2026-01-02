// JS Starter Code
const jsStarterCode = "/**\n * @param {number} value The number to check.\n * @param {number} [start=0] The start of the range.\n * @param {number} end The end of the range.\n * @returns {boolean} Returns `true` if `number` is in the range, else `false`.\n */\nexport default function inRange(value, start, end) {\n  throw \"Not implemented\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function inRange(\n  value: number,\n  start: number,\n  end?: number,\n): boolean {\n  throw \"Not implemented\";\n}\n";

// JS Test Cases
const jsTestCode = "import inRange from \"./in-range\";\n\ndescribe(\"inRange\", () => {\n  test(\"both `start` and `end` specified\", () => {\n    expect(inRange(1, 1, 5)).toBe(true);\n    expect(inRange(3, 1, 5)).toBe(true);\n    expect(inRange(0, 1, 5)).toBe(false);\n    expect(inRange(5, 1, 5)).toBe(false);\n  });\n\n  test(\"differently signed `start` and positive `end`\", () => {\n    expect(inRange(-1, -2, 5)).toBe(true);\n    expect(inRange(5, -2, 5)).toBe(false);\n    expect(inRange(-1, 5, -2)).toBe(true);\n  });\n\n  test(\"only 2 arguments specified\", () => {\n    expect(inRange(3, 5)).toBe(true);\n    expect(inRange(5, 5)).toBe(false);\n    expect(inRange(6, 5)).toBe(false);\n  });\n\n  test(\"swap `start` and `end` when `start` > `end`\", () => {\n    expect(inRange(2, 5, 1)).toBe(true);\n    expect(inRange(-3, -2, -6)).toBe(true);\n  });\n\n  test(\"floating point value\", () => {\n    expect(inRange(0.5, 5)).toBe(true);\n    expect(inRange(1.2, 1, 5)).toBe(true);\n    expect(inRange(5.2, 5)).toBe(false);\n    expect(inRange(0.5, 1, 5)).toBe(false);\n    expect(inRange(-4.5, -2, -6)).toBe(true);\n  });\n});\n";

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
