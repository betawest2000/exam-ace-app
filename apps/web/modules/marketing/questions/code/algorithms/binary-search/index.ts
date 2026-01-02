// JS Starter Code
const jsStarterCode = "/**\n * @param {Array<number>} arr The input integer array to be searched.\n * @param {number} target The target integer to search within the array.\n * @return {number} The index of target element in the array, or -1 if not found.\n */\nexport default function binarySearch(arr, target) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "/**\n * @param arr The input integer array to be searched.\n * @param target The target integer to search within the array.\n * @return The index of target element in the array, or -1 if not found.\n */\nexport default function binarySearch(\n  arr: Array<number>,\n  target: number,\n): number {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import binarySearch from \"./binary-search\";\n\ndescribe(\"binarySearch\", () => {\n  test(\"empty\", () => {\n    expect(binarySearch([], 1)).toBe(-1);\n  });\n\n  test(\"one element\", () => {\n    expect(binarySearch([1], 1)).toBe(0);\n    expect(binarySearch([1], 2)).toBe(-1);\n  });\n\n  test(\"two elements\", () => {\n    expect(binarySearch([1, 4], 1)).toBe(0);\n    expect(binarySearch([1, 4], 4)).toBe(1);\n    expect(binarySearch([1, 4], 5)).toBe(-1);\n  });\n\n  test(\"more than two elements\", () => {\n    expect(binarySearch([1, 2, 3, 10, 11, 20], 1)).toBe(0);\n    expect(binarySearch([1, 2, 3, 10, 11, 20], 2)).toBe(1);\n    expect(binarySearch([1, 2, 3, 10, 11, 20], 3)).toBe(2);\n    expect(binarySearch([1, 2, 3, 10, 11, 20], 10)).toBe(3);\n    expect(binarySearch([1, 2, 3, 10, 11, 20], 9)).toBe(-1);\n    expect(binarySearch([1, 2, 3, 10, 11, 20], 4)).toBe(-1);\n    expect(binarySearch([1, 2, 3, 10, 11, 20], 0)).toBe(-1);\n    expect(binarySearch([1, 2, 3, 10, 11, 20], 21)).toBe(-1);\n  });\n\n  test(\"boundary values\", () => {\n    expect(binarySearch([1, 2, 3, 10, 11, 20], 1)).toBe(0);\n    expect(binarySearch([1, 2, 3, 10, 11, 20], 20)).toBe(5);\n  });\n});\n";

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
