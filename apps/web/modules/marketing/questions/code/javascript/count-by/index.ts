// JS Starter Code
const jsStarterCode = "/**\n * @param {Array} array The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Object} Returns the composed aggregate object.\n */\nexport default function countBy(array, iteratee) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function countBy<T>(\n  array: Array<T>,\n  iteratee: (value: T) => number | string,\n): Record<string, number> {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import countBy from \"./count-by\";\n\ndescribe(\"countBy\", () => {\n  test(\"empty array\", () => {\n    expect(countBy([], Math.floor)).toEqual({});\n  });\n\n  test(\"undefined keys\", () => {\n    expect(countBy([{ n: 1 }, { n: 2 }], (o: any) => o.m)).toEqual({\n      undefined: 2,\n    });\n  });\n\n  describe(\"function iteratees\", () => {\n    test(\"single-element arrays\", () => {\n      expect(countBy([6.1], Math.floor)).toEqual({ 6: 1 });\n    });\n\n    test(\"two-element arrays\", () => {\n      expect(countBy([6.1, 4.2], Math.floor)).toEqual({ 4: 1, 6: 1 });\n    });\n\n    test(\"multiple element arrays\", () => {\n      expect(countBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ 4: 1, 6: 2 });\n    });\n\n    test(\"keys that are also properties\", () => {\n      expect(\n        countBy([\"one\", \"two\", \"three\"], (val: string) => \"length\"),\n      ).toEqual({\n        length: 3,\n      });\n    });\n  });\n\n  test(\"does not mutate the original array\", () => {\n    const arr = [6.1, 4.2, 6.3];\n    const copy = arr.slice();\n    const result = countBy(arr, Math.floor);\n    expect(result).toEqual({ 4: 1, 6: 2 });\n    expect(arr).toEqual(copy); // Ensure original array is unchanged\n  });\n});\n";

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
