// JS Starter Code
const jsStarterCode = "/**\n * @template T\n * @param {Array<T>} array The array to process.\n * @param {number} [size=1] The length of each chunk.\n * @returns {Array<Array<T>>} The new array of chunks.\n */\nexport default function chunk(array, size = 1) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function chunk<T>(array: Array<T>, size = 1): Array<Array<T>> {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import chunk from \"./chunk\";\n\ndescribe(\"chunk\", () => {\n  test(\"empty array\", () => {\n    expect(chunk([], 3)).toEqual([]);\n  });\n\n  test(\"single-element array\", () => {\n    expect(chunk([1], 3)).toEqual([[1]]);\n  });\n\n  test(\"size of 1\", () => {\n    expect(chunk([1, 2, 3])).toEqual([[1], [2], [3]]);\n  });\n\n  test(\"splits into chunks of the given size\", () => {\n    expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3)).toEqual([\n      [1, 2, 3],\n      [4, 5, 6],\n      [7, 8, 9],\n      [10, 11],\n    ]);\n  });\n\n  test(\"default size\", () => {\n    expect(chunk([\"A\", \"B\", \"C\"])).toEqual([[\"A\"], [\"B\"], [\"C\"]]);\n  });\n\n  test(\"size larger than the array length\", () => {\n    expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);\n  });\n\n  test(\"input array is not modified\", () => {\n    const input = [1, 2, 3, 4, 5, 6, 7];\n    const output = chunk(input, 3);\n    output[0][0] = 100;\n    expect(input[0]).toEqual(1);\n  });\n});\n";

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
