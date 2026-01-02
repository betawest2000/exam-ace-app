// JS Starter Code
const jsStarterCode = "/**\n * @param {Array} array The array to iterate over.\n * @param {Function} iteratee The iteratee to transform keys.\n * @returns {Object} Returns the composed aggregate object.\n */\nexport default function groupBy(array, iteratee) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function groupBy<T>(\n  array: Array<T>,\n  iteratee: (value: T) => number | string,\n): Record<string, Array<T>> {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import groupBy from \"./group-by\";\n\ndescribe(\"groupBy\", () => {\n  test(\"empty array\", () => {\n    expect(groupBy([], (o: any) => o)).toEqual({});\n  });\n\n  describe(\"function iteratees\", () => {\n    test(\"single-element arrays\", () => {\n      expect(groupBy([6.1], Math.floor)).toEqual({ 6: [6.1] });\n    });\n\n    test(\"two-element arrays\", () => {\n      expect(groupBy([6.1, 4.2], Math.floor)).toEqual({ 4: [4.2], 6: [6.1] });\n    });\n\n    test(\"multiple element arrays\", () => {\n      expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({\n        4: [4.2],\n        6: [6.1, 6.3],\n      });\n    });\n\n    test(\"keys that are also properties\", () => {\n      expect(groupBy([\"one\", \"two\", \"three\"], () => \"length\")).toEqual({\n        length: [\"one\", \"two\", \"three\"],\n      });\n    });\n  });\n\n  describe(\"property iteratees\", () => {\n    test(\"single-element arrays\", () => {\n      expect(groupBy([\"one\"], (o: string) => o.length)).toEqual({ 3: [\"one\"] });\n    });\n\n    test(\"two-element arrays\", () => {\n      expect(groupBy([\"one\", \"two\"], (o: string) => o.length)).toEqual({\n        3: [\"one\", \"two\"],\n      });\n    });\n\n    test(\"multiple element arrays\", () => {\n      expect(groupBy([\"one\", \"two\", \"three\"], (o: string) => o.length)).toEqual(\n        {\n          3: [\"one\", \"two\"],\n          5: [\"three\"],\n        },\n      );\n    });\n\n    test(\"groups elements of array of objects by a property\", () => {\n      const users = [\n        { user: \"barney\", age: 36 },\n        { user: \"fred\", age: 40 },\n        { user: \"pebbles\", age: 1 },\n      ];\n\n      expect(groupBy(users, (o: any) => o.age)).toEqual({\n        36: [{ user: \"barney\", age: 36 }],\n        40: [{ user: \"fred\", age: 40 }],\n        1: [{ user: \"pebbles\", age: 1 }],\n      });\n    });\n  });\n\n  test(\"does not mutate the original array\", () => {\n    const arr = [\"one\", \"two\", \"three\"];\n    const copy = arr.slice();\n    groupBy(arr, (o: string) => o.length);\n    expect(arr).toEqual(copy);\n  });\n\n  test(\"false values\", () => {\n    expect(groupBy([{ n: 1 }, { n: 2 }], (o: any) => o.m)).toEqual({\n      undefined: [{ n: 1 }, { n: 2 }],\n    });\n  });\n});\n";

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
