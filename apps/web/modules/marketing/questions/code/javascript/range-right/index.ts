// JS Starter Code
const jsStarterCode = "/**\n * @param {Number} start - The first number of the resultant array.\n * @param {Number} end - The value where the resultant array will stop at and not contain it.\n * @param {Number} step - The step / increment value of each number in the array.\n * @return {Array<Number>} Returns the array with the sequence of numbers in the specified range.\n */\nexport default function rangeRight(start = 0, end, step = 1) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function rangeRight(end: number): Array<number>;\nexport default function rangeRight(\n  start: number,\n  end: number,\n  step?: number,\n): Array<number>;\n\n/**\n * @param {number} start - The first number of the resultant array.\n * @param {number} end - The value where the resultant array will stop at and not contain it.\n * @param {number} step - The step / increment value of each number in the array.\n * @return {Array<number>} Returns the array with the sequence of numbers in the specified range.\n */\nexport default function rangeRight(\n  start: number = 0,\n  end?: number,\n  step: number = 1,\n): Array<number> {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import rangeRight from \"./range-right\";\n\ndescribe(\"rangeRight\", () => {\n  test(\"start equals to end\", () => {\n    expect(rangeRight(0)).toEqual([]);\n    expect(rangeRight(-3, -3)).toEqual([]);\n    expect(rangeRight(5, 5)).toEqual([]);\n  });\n\n  test(\"start specified\", () => {\n    expect(rangeRight(2, 5)).toEqual([4, 3, 2]);\n    expect(rangeRight(-2, 1)).toEqual([0, -1, -2]);\n    expect(rangeRight(-8, -4)).toEqual([-5, -6, -7, -8]);\n  });\n\n  test(\"start and step specified\", () => {\n    expect(rangeRight(1, 7, 2)).toEqual([5, 3, 1]);\n    expect(rangeRight(-3, 6, 3)).toEqual([3, 0, -3]);\n    expect(rangeRight(1, 8, 9)).toEqual([1]);\n  });\n\n  test(\"negative end value\", () => {\n    expect(rangeRight(-4)).toEqual([-3, -2, -1, 0]);\n    expect(rangeRight(-9, -4)).toEqual([-5, -6, -7, -8, -9]);\n  });\n\n  test(\"negative step value\", () => {\n    expect(rangeRight(8, -2, -3)).toEqual([-1, 2, 5, 8]);\n    expect(rangeRight(7, 4, -1)).toEqual([5, 6, 7]);\n  });\n\n  test(\"step value = 0\", () => {\n    expect(rangeRight(1, 5, 0)).toEqual([1, 1, 1, 1]);\n    expect(rangeRight(-4, -2, 0)).toEqual([-4, -4]);\n    expect(rangeRight(-2, -4, 0)).toEqual([]);\n  });\n});\n";

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
