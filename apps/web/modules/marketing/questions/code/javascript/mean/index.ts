// JS Starter Code
const jsStarterCode = "/**\n * @param {Array} array - Array from which the elements are all numbers.\n * @return {Number} Returns mean.\n */\nexport default function mean(array) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "/**\n * @param {Array<number>} array - Array from which the elements are all numbers.\n * @return {number} Returns mean.\n */\nexport default function mean(array: number[]): number {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import mean from \"./mean\";\n\ndescribe(\"mean\", () => {\n  test(\"empty input array\", () => {\n    expect(mean([])).toBeNaN();\n  });\n\n  test(\"single value\", () => {\n    expect(mean([0])).toEqual(0);\n    expect(mean([1])).toEqual(1);\n  });\n\n  test(\"two values\", () => {\n    expect(mean([0, 0])).toEqual(0);\n    expect(mean([1, 3])).toEqual(2);\n    expect(mean([0, 6])).toEqual(3);\n  });\n\n  test(\"positive values\", () => {\n    expect(mean([4, 2, 8, 6])).toEqual(5);\n    expect(mean([0, 1, 2, 3, 4])).toEqual(2);\n  });\n\n  test(\"negative values\", () => {\n    expect(mean([-4, -2, -8, -6])).toEqual(-5);\n    expect(mean([0, -1, -2, -3, -4])).toEqual(-2);\n  });\n\n  test(\"same values\", () => {\n    expect(mean([0, 0, 0])).toEqual(0);\n    expect(mean([1, 1, 1, 1])).toEqual(1);\n    expect(mean([-2, -2, -2, -2, -2])).toEqual(-2);\n  });\n\n  test(\"mean is not exact\", () => {\n    expect(mean([0, -1, -2, -3])).toBeCloseTo(-1.5);\n    expect(mean([1, 2, 2])).toBeCloseTo(1.6666666666666667);\n    expect(mean([1, 3, 5, 4, 2, 2, 6, 2])).toBeCloseTo(3.125);\n  });\n\n  test(\"decimal values\", () => {\n    expect(mean([-1.3, -2, 3])).toBeCloseTo(-0.1);\n    expect(mean([-1, 2, 0.2])).toBeCloseTo(0.4);\n    expect(mean([1, -2, -2])).toBeCloseTo(-1);\n  });\n});\n";

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
