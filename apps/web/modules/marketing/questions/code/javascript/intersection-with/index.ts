// JS Starter Code
const jsStarterCode = "/**\n * @param {Function} comparator - The comparator function used to determine equality between elements.\n * @param {...Array} arrays - The arrays to perform the intersection on.\n * @returns {Array} - A new array containing the elements that are present in all given arrays.\n */\nexport default function intersectionWith(comparator, ...arrays) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function intersectionWith<T>(\n  comparator: (a: T, b: T) => boolean,\n  ...arrays: Array<Array<T>>\n): Array<T> {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import intersectionWith from \"./intersection-with\";\n\ndescribe(\"intersectionWith\", () => {\n  test(\"no arrays are provided\", () => {\n    const actual = intersectionWith((x, y) => true);\n    expect(actual).toEqual([]);\n  });\n\n  test(\"empty arrays\", () => {\n    const actual = intersectionWith((x, y) => true, [], [1, 2, 3], [4, 5, 6]);\n    expect(actual).toEqual([]);\n  });\n\n  test(\"no common elements\", () => {\n    const actual = intersectionWith(\n      (x, y) => x === y,\n      [1, 2, 3],\n      [4, 5, 6],\n      [7, 8, 9],\n    );\n    expect(actual).toEqual([]);\n  });\n\n  test(\"two arrays\", () => {\n    const arr1 = [\n      { x: 1, y: 2 },\n      { x: 2, y: 3 },\n      { x: 3, y: 4 },\n    ];\n    const arr2 = [\n      { x: 2, y: 3 },\n      { x: 4, y: 5 },\n      { x: 5, y: 6 },\n    ];\n\n    const comparator = (\n      a: { x: number; y: number },\n      b: { x: number; y: number },\n    ) => a.x === b.x && a.y === b.y;\n\n    const actual = intersectionWith(comparator, arr1, arr2);\n    const expected = [{ x: 2, y: 3 }];\n\n    expect(actual).toEqual(expected);\n  });\n\n  test(\"multiple arrays using a comparator\", () => {\n    const arr1 = [\n      { x: 1, y: 2 },\n      { x: 2, y: 3 },\n      { x: 3, y: 4 },\n    ];\n    const arr2 = [\n      { x: 2, y: 3 },\n      { x: 4, y: 5 },\n      { x: 5, y: 6 },\n    ];\n    const arr3 = [\n      { x: 2, y: 3 },\n      { x: 3, y: 4 },\n      { x: 5, y: 6 },\n      { x: 6, y: 7 },\n    ];\n\n    const comparator = (\n      a: { x: number; y: number },\n      b: { x: number; y: number },\n    ) => a.x === b.x && a.y === b.y;\n\n    const actual = intersectionWith(comparator, arr1, arr2, arr3);\n    const expected = [{ x: 2, y: 3 }];\n\n    expect(actual).toEqual(expected);\n  });\n\n  test(\"arrays with different lengths\", () => {\n    const arr1 = [1, 2, 3];\n    const arr2 = [2, 3, 4, 5];\n    const arr3 = [3, 4, 5, 6, 7];\n\n    const actual = intersectionWith((x, y) => x == y, arr1, arr2, arr3);\n    const expected = [3];\n\n    expect(actual).toEqual(expected);\n  });\n\n  test(\"arrays with single elements\", () => {\n    const arr1 = [{ x: 1, y: 2 }];\n    const arr2 = [{ x: 2, y: 3 }];\n    const arr3 = [{ x: 3, y: 4 }];\n\n    const comparator = (\n      a: { x: number; y: number },\n      b: { x: number; y: number },\n    ) => a.x === b.x && a.y === b.y;\n    const actual = intersectionWith(comparator, arr1, arr2, arr3);\n    expect(actual).toEqual([]);\n  });\n});\n";

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
