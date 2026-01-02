// JS Starter Code
const jsStarterCode = "/**\n * @param {Array} array\n * @return {Array}\n */\nexport default function uniqueArray(array) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function uniqueArray<T extends ReadonlyArray<unknown>>(\n  array: T,\n): Array<T[number]> {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import uniqueArray from \"./unique-array\";\n\ndescribe(\"uniqueArray\", () => {\n  test(\"empty array\", () => {\n    expect(uniqueArray([])).toEqual([]);\n  });\n\n  test(\"one value\", () => {\n    expect(uniqueArray([0])).toEqual([0]);\n  });\n\n  test(\"different values\", () => {\n    expect(uniqueArray([2, 3])).toEqual([2, 3]);\n    expect(uniqueArray([0, 1, 2, 3])).toEqual([0, 1, 2, 3]);\n  });\n\n  test(\"duplicate values\", () => {\n    expect(uniqueArray([2, 1, 2])).toEqual([2, 1]);\n    expect(uniqueArray([2, 2, 1])).toEqual([2, 1]);\n    expect(uniqueArray([2, 1, 2, 3])).toEqual([2, 1, 3]);\n  });\n\n  test(\"string values\", () => {\n    expect(uniqueArray([\"foo\", \"bar\", \"foo\"])).toEqual([\"foo\", \"bar\"]);\n    expect(uniqueArray([\"foo\", \"bar\", \"bar\", \"foo\"])).toEqual([\"foo\", \"bar\"]);\n    expect(uniqueArray([\"1\", \"2\", \"2\", \"3\"])).toEqual([\"1\", \"2\", \"3\"]);\n  });\n\n  test(\"boolean values\", () => {\n    expect(uniqueArray([false])).toEqual([false]);\n    expect(uniqueArray([false, true])).toEqual([false, true]);\n    expect(uniqueArray([true, false, true])).toEqual([true, false]);\n    expect(uniqueArray([true, true, false])).toEqual([true, false]);\n  });\n\n  test(\"null-ish values\", () => {\n    expect(uniqueArray([null])).toEqual([null]);\n    expect(uniqueArray([null, null])).toEqual([null]);\n    expect(uniqueArray([null, undefined])).toEqual([null, undefined]);\n    expect(uniqueArray([null, undefined, null])).toEqual([null, undefined]);\n    expect(uniqueArray([null, null, undefined])).toEqual([null, undefined]);\n  });\n\n  test(\"mixed values\", () => {\n    expect(uniqueArray([2, 1, \"2\", \"1\"])).toEqual([2, 1, \"2\", \"1\"]);\n    expect(uniqueArray([\"2\", 2, 2, 1, 1, \"2\", \"1\"])).toEqual([\"2\", 2, 1, \"1\"]);\n    expect(uniqueArray([true, \"true\", true])).toEqual([true, \"true\"]);\n  });\n});\n";

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
