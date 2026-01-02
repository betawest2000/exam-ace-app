// JS Starter Code
const jsStarterCode = "/**\n * @param {Array} array - Array from which different elements are to be removed.\n * @param {Array} values - Array of values that are to be removed from the original array.\n * @return {Array} Returns filtered array.\n */\nexport default function difference(array, values) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function difference<T>(\n  array: Array<T>,\n  values: Array<T>,\n): Array<T> {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import difference from \"./difference\";\n\ndescribe(\"difference\", () => {\n  test(\"empty input array\", () => {\n    expect(difference([], [])).toEqual([]);\n    expect(difference([], [1, 2, 3])).toEqual([]);\n  });\n\n  test(\"values array is empty\", () => {\n    expect(difference([1, 2, 3], [])).toEqual([1, 2, 3]);\n  });\n\n  test(\"unique values that are present in array but not in values\", () => {\n    expect(difference([1, 2, 3], [2, 3, 4])).toEqual([1]);\n    expect(difference([\"a\", \"b\", \"c\"], [\"b\", \"c\", \"d\"])).toEqual([\"a\"]);\n    expect(difference([null, undefined, 1, NaN], [undefined, 2, 3])).toEqual([\n      null,\n      1,\n      NaN,\n    ]);\n  });\n\n  test(\"all values in array are present in values\", () => {\n    expect(difference([1, 2, 3], [1, 2, 3])).toEqual([]);\n    expect(difference([\"a\", \"b\", \"c\"], [\"a\", \"b\", \"c\"])).toEqual([]);\n    expect(difference([null, undefined], [null, undefined])).toEqual([]);\n  });\n\n  test(\"sparse arrays\", () => {\n    expect(difference([1, , 3], [2])).toEqual([1, 3]);\n  });\n\n  test(\"NaN values\", () => {\n    expect(difference([1, NaN, 2], [NaN, 3, 4])).toEqual([1, 2]);\n  });\n});\n";

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
