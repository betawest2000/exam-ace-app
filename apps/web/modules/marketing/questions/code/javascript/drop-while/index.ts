// JS Starter Code
const jsStarterCode = "/**\n * @param {Array} array - The array to iterate over.\n * @param {Function} predicate - The function invoked per iteration.\n * @return {Array} Returns the slice of `array`.\n */\nexport default function dropWhile(array, predicate) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function dropWhile<T>(\n  array: Array<T>,\n  predicate: (value: T, index: number, array: Array<T>) => boolean,\n): Array<T> {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import dropWhile from \"./drop-while\";\n\ndescribe(\"dropWhile\", () => {\n  test(\"empty array\", () => {\n    expect(dropWhile([], (value, _index, _array) => value < 3)).toEqual([]);\n  });\n\n  test(\"drop elements until predicate returns false\", () => {\n    expect(\n      dropWhile([1, 2, 3, 4, 5], (value, _index, _array) => value < 3),\n    ).toEqual([3, 4, 5]);\n  });\n\n  test(\"predicate always returns true\", () => {\n    expect(\n      dropWhile([1, 2, 3, 4, 5], (_value, _index, _array) => true),\n    ).toEqual([]);\n  });\n\n  test(\"predicate always returns false\", () => {\n    expect(\n      dropWhile([1, 2, 3, 4, 5], (_value, _index, _array) => false),\n    ).toEqual([1, 2, 3, 4, 5]);\n  });\n\n  test(\"should stop dropping once predicate is false\", () => {\n    expect(\n      dropWhile([7, 6, 3, 7, 8], (value, _index, _array) => value > 5),\n    ).toEqual([3, 7, 8]);\n  });\n\n  describe(\"required arguments are passed\", () => {\n    test(\"index is passed\", () => {\n      const array = [1, 2, 3, 4, 5];\n      expect(dropWhile(array, (_value, index, _array) => index < 3)).toEqual([\n        4, 5,\n      ]);\n    });\n\n    test(\"array is passed\", () => {\n      const array = [20, 30, 40, 5, 6];\n      expect(\n        dropWhile(array, (value, _index, arr) => value > arr.length),\n      ).toEqual([5, 6]);\n    });\n  });\n\n  test(\"should not modify the original input array\", () => {\n    const array = [1, 2, 3, 4, 5];\n    dropWhile(array, (value) => value > 3);\n    expect(array).toEqual([1, 2, 3, 4, 5]);\n  });\n});\n";

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
