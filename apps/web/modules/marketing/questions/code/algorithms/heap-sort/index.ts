// JS Starter Code
const jsStarterCode = "/**\n * @param {Array<number>} arr The input integer array to be sorted.\n * @return {Array<number>}\n */\nexport default function heapSort(arr) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function heapSort(arr: Array<number>): Array<number> {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import heapSort from \"./heap-sort\";\n\ndescribe(\"heapSort\", () => {\n  test(\"empty\", () => {\n    expect(heapSort([])).toEqual([]);\n  });\n\n  test(\"one element\", () => {\n    expect(heapSort([1])).toEqual([1]);\n  });\n\n  test(\"two elements\", () => {\n    expect(heapSort([2, 1])).toEqual([1, 2]);\n    expect(heapSort([1, 2])).toEqual([1, 2]);\n  });\n\n  test(\"more than two elements\", () => {\n    expect(heapSort([10, 2, 4])).toEqual([2, 4, 10]);\n    expect(heapSort([4, 5, 6, 1, 2, 3])).toEqual([1, 2, 3, 4, 5, 6]);\n    expect(heapSort([1, 2, 3, 4, 5, 0])).toEqual([0, 1, 2, 3, 4, 5]);\n    expect(heapSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([\n      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,\n    ]);\n    expect(heapSort([5, 4, 3, 2, 1, 10, 9, 8, 7, 6])).toEqual([\n      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,\n    ]);\n    expect(heapSort([98322, 3242, 876, -234, 34, 12331])).toEqual([\n      -234, 34, 876, 3242, 12331, 98322,\n    ]);\n  });\n\n  test(\"duplicate elements\", () => {\n    expect(heapSort([1, 1])).toEqual([1, 1]);\n    expect(heapSort([2, 2, 2])).toEqual([2, 2, 2]);\n    expect(heapSort([2, 1, 2])).toEqual([1, 2, 2]);\n    expect(heapSort([1, 1, 1, 1, 1, 1])).toEqual([1, 1, 1, 1, 1, 1]);\n    expect(heapSort([7, 2, 4, 3, 1, 2])).toEqual([1, 2, 2, 3, 4, 7]);\n  });\n});\n";

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
