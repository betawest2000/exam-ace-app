// JS Starter Code
const jsStarterCode = "/**\n * @param {Array} array - The array to fill.\n * @param {*} value - The value to fill array with.\n * @param {number} [start=0] - The start position.\n * @param {number} [end=array.length] - The end position.\n * @return {Array} Returns the filled array.\n */\nexport default function fill(array, value, start = 0, end = array.length) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function fill<T>(\n  array: Array<T>,\n  value: any,\n  start: number = 0,\n  end: number = array.length,\n): Array<T> {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import fill from \"./fill\";\n\ndescribe(\"fill\", () => {\n  test(\"returns original array reference\", () => {\n    const arr = [1, 2, 3];\n    expect(fill(arr, \"*\", 1)).toBe(arr);\n  });\n\n  test(\"correctly mutates original array\", () => {\n    const arr = [1, 2, 3];\n    fill(arr, \"*\", 1);\n    expect(arr).toEqual([1, \"*\", \"*\"]);\n  });\n\n  test(\"empty array\", () => {\n    expect(fill([], \"*\")).toEqual([]);\n    expect(fill([], \"*\", 2, 3)).toEqual([]);\n  });\n\n  test(\"single element\", () => {\n    expect(fill([1], \"*\")).toEqual([\"*\"]);\n    expect(fill([1], \"*\", 0, 1)).toEqual([\"*\"]);\n    expect(fill([1], \"*\", 2, 3)).toEqual([1]);\n  });\n\n  test(\"two elements\", () => {\n    expect(fill([1, 2], \"*\")).toEqual([\"*\", \"*\"]);\n    expect(fill([1, 2], \"*\", 1)).toEqual([1, \"*\"]);\n    expect(fill([1, 2], \"*\", 2, 3)).toEqual([1, 2]);\n  });\n\n  describe(\"multiple elements\", () => {\n    test(\"use default start to end\", () => {\n      expect(fill([1, 2, 3], \"*\")).toEqual([\"*\", \"*\", \"*\"]);\n    });\n\n    test(\"only start specified\", () => {\n      expect(fill([1, 2, 3, 4, 5], \"*\", 2)).toEqual([1, 2, \"*\", \"*\", \"*\"]);\n    });\n\n    test(\"start to end specified\", () => {\n      expect(fill([1, 2, 3, 4, 5], \"*\", 2, 4)).toEqual([1, 2, \"*\", \"*\", 5]);\n    });\n\n    describe(\"negative indices\", () => {\n      test(\"negative start\", () => {\n        expect(fill([1, 2, 3], \"*\", -2)).toEqual([1, \"*\", \"*\"]);\n      });\n\n      test(\"negative start and positive end\", () => {\n        expect(fill([1, 2, 3, 4, 5], \"*\", -4, 3)).toEqual([1, \"*\", \"*\", 4, 5]);\n      });\n\n      test(\"negative end\", () => {\n        expect(fill([1, 2, 3, 4, 5], \"*\", 1, -1)).toEqual([\n          1,\n          \"*\",\n          \"*\",\n          \"*\",\n          5,\n        ]);\n      });\n\n      test(\"negative start and end\", () => {\n        expect(fill([1, 2, 3, 4, 5], \"*\", -4, -1)).toEqual([\n          1,\n          \"*\",\n          \"*\",\n          \"*\",\n          5,\n        ]);\n      });\n\n      test(\"out of bound indices are provided\", () => {\n        expect(fill([1, 2, 3], \"*\", 1, 10)).toEqual([1, \"*\", \"*\"]);\n      });\n    });\n  });\n\n  test(\"end smaller than start\", () => {\n    expect(fill([1], \"*\", 4, 1)).toEqual([1]);\n    expect(fill([1, 2, 3, 4, 5], \"*\", 4, 1)).toEqual([1, 2, 3, 4, 5]);\n    expect(fill([1, 2, 3, 4, 5], \"*\", -1, -4)).toEqual([1, 2, 3, 4, 5]);\n  });\n});\n";

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
