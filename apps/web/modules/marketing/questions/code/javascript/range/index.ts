// JS Starter Code
const jsStarterCode = "/**\n * @param {Number} start - The first number of the resultant array.\n * @param {Number} end - The value where the resultant array will stop at and not contain it.\n * @param {Number} step - The step / increment value of each number in the array.\n * @return {Array<Number>} Returns the array with the sequence of numbers in the specified range.\n */\nexport default function range(start = 0, end, step = 1) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function range(end: number): Array<number>;\nexport default function range(\n  start: number,\n  end: number,\n  step?: number,\n): Array<number>;\n\nexport default function range(\n  start: number = 0,\n  end?: number,\n  step: number = 1,\n): Array<number> {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import range from \"./range\";\n\ndescribe(\"range\", () => {\n  test(\"start equals to end\", () => {\n    expect(range(0)).toEqual([]);\n    expect(range(-3, -3)).toEqual([]);\n    expect(range(5, 5)).toEqual([]);\n  });\n\n  test(\"start specified\", () => {\n    expect(range(2, 5)).toEqual([2, 3, 4]);\n    expect(range(-2, 1)).toEqual([-2, -1, 0]);\n    expect(range(-8, -4)).toEqual([-8, -7, -6, -5]);\n  });\n\n  test(\"start and step specified\", () => {\n    expect(range(1, 7, 2)).toEqual([1, 3, 5]);\n    expect(range(-3, 6, 3)).toEqual([-3, 0, 3]);\n    expect(range(1, 8, 9)).toEqual([1]);\n  });\n\n  test(\"negative end value\", () => {\n    expect(range(-4)).toEqual([0, -1, -2, -3]);\n    expect(range(-9, -4, 1)).toEqual([-9, -8, -7, -6, -5]);\n    expect(range(8, -2, -3)).toEqual([8, 5, 2, -1]);\n  });\n\n  test(\"negative step value\", () => {\n    expect(range(8, -2, -3)).toEqual([8, 5, 2, -1]);\n    expect(range(7, 4, -1)).toEqual([7, 6, 5]);\n  });\n\n  test(\"step value = 0\", () => {\n    expect(range(1, 5, 0)).toEqual([1, 1, 1, 1]);\n    expect(range(-4, -2, 0)).toEqual([-4, -4]);\n    expect(range(-2, -4, 0)).toEqual([]);\n  });\n});\n";

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
