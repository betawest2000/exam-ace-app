// JS Starter Code
const jsStarterCode = "/**\n * @param {Array} array: The array to compact.\n * @return {Array} Returns the new array of filtered values.\n */\nexport default function compact(array) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function compact<T>(\n  array: Array<T | null | undefined | false | 0 | \"\">,\n): Array<T> {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import compact from \"./compact\";\n\ndescribe(\"compact\", () => {\n  test(\"empty array\", () => {\n    expect(compact([])).toEqual([]);\n  });\n\n  test(\"single-element array\", () => {\n    expect(compact([1])).toEqual([1]);\n    expect(compact([null])).toEqual([]);\n  });\n\n  test(\"two-element array\", () => {\n    expect(compact([1, 2])).toEqual([1, 2]);\n    expect(compact([null, 1])).toEqual([1]);\n    expect(compact([1, null])).toEqual([1]);\n    expect(compact([false, null])).toEqual([]);\n  });\n\n  test(\"remove all falsey values from the input array\", () => {\n    expect(compact([0, 1, false, 2, \"\", 3])).toEqual([1, 2, 3]);\n  });\n\n  test(\"only falsey values\", () => {\n    expect(compact([null, undefined, NaN, 0, false, \"\", \"\"])).toEqual([]);\n  });\n\n  test(\"no falsey values\", () => {\n    expect(compact([\"hello\", true, 123, [], {}])).toEqual([\n      \"hello\",\n      true,\n      123,\n      [],\n      {},\n    ]);\n  });\n\n  test(\"sparse arrays\", () => {\n    expect(compact([1, , 2, , 3])).toEqual([1, 2, 3]);\n    expect(compact([1, , null, 2, , 3])).toEqual([1, 2, 3]);\n  });\n\n  test(\"should not modify the original input array\", () => {\n    const input = [0, 1, false, 2, \"\", 3];\n    compact(input);\n    expect(input).toEqual([0, 1, false, 2, \"\", 3]);\n  });\n});\n";

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
