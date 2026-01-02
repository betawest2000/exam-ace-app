// JS Starter Code
const jsStarterCode = "/**\n * Computes the intersection of arrays, returning a new array containing unique values present in all given arrays.\n *\n * @param {Array[]} arrays - The arrays to perform the intersection on.\n * @returns {Array} - A new array containing the unique values present in all given arrays.\n */\nexport default function intersection(...arrays) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function intersection<T>(...arrays: Array<Array<T>>): Array<T> {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import intersection from \"./intersection\";\n\ndescribe(\"intersection\", () => {\n  test(\"empty array\", () => {\n    expect(intersection()).toEqual([]);\n  });\n\n  test(\"multiple arrays\", () => {\n    expect(intersection([1, 2, 3], [3, 4, 5], [3, 6, 7])).toEqual([3]);\n    expect(\n      intersection([\"a\", \"b\", \"c\"], [\"b\", \"c\", \"d\"], [\"c\", \"e\", \"f\"]),\n    ).toEqual([\"c\"]);\n  });\n\n  test(\"one of the arrays is empty\", () => {\n    expect(intersection([], [1, 2, 3], [4, 5, 6])).toEqual([]);\n    expect(intersection([1, 2, 3], [], [4, 5, 6])).toEqual([]);\n    expect(intersection([1, 2, 3], [4, 5, 6], [])).toEqual([]);\n  });\n\n  test(\"no common elements\", () => {\n    expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);\n    expect(intersection([1, 2, 3], [4, 5, 6], [7, 8, 9])).toEqual([]);\n  });\n\n  test(\"common elements in the arrays\", () => {\n    expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);\n  });\n\n  test(\"duplicate values\", () => {\n    const actual = intersection([1, 1, 3, 2, 2], [5, 2, 2, 1, 4], [2, 1, 1]);\n    expect(actual).toEqual([1, 2]);\n  });\n\n  test(\"single array\", () => {\n    const actual = intersection([1, 1, 3, 2, 2]);\n    expect(actual).toEqual([1, 3, 2]);\n  });\n\n  test(\"different types of elements\", () => {\n    expect(intersection([1, 2, 3], [2, \"3\", true])).toEqual([2]);\n    expect(\n      intersection([\"a\", \"b\", \"c\"], [1, \"b\", true], [false, \"b\", \"c\"]),\n    ).toEqual([\"b\"]);\n    expect(\n      intersection([null, undefined], [undefined, NaN], [NaN, null]),\n    ).toEqual([]);\n  });\n});\n";

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
