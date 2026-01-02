// JS Starter Code
const jsStarterCode = "/**\n * @param {Function} iteratee The iteratee invoked per element.\n * @param {...Array} arrays Array from which the elements are all numbers.\n * @return {Array} Returns the new array of combined values.\n */\nexport default function unionBy(iteratee, ...arrays) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function unionBy<T>(\n  iteratee: (value: T) => any,\n  ...arrays: Array<any>\n): Array<T> {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import unionBy from \"./union-by\";\n\ndescribe(\"unionBy\", () => {\n  test(\"empty arrays\", () => {\n    expect(unionBy((o: any) => o.id, [], [])).toEqual([]);\n  });\n\n  test(\"primitive values with identity iteratee\", () => {\n    const arr1 = [1, 2, 3];\n    const arr2 = [3, 4, 5];\n    expect(unionBy((value: any) => value, arr1, arr2)).toEqual([1, 2, 3, 4, 5]);\n  });\n\n  test(\"null and undefined values in arrays\", () => {\n    const arr1 = [null, undefined, 1];\n    const arr2 = [1, null, 2];\n    expect(unionBy((value: any) => value, arr1, arr2)).toEqual([\n      null,\n      undefined,\n      1,\n      2,\n    ]);\n  });\n\n  test(\"arrays with mixed types\", () => {\n    const arr1 = [1, \"1\", true];\n    const arr2 = [\"1\", 2, false];\n    expect(unionBy((value: any) => value, arr1, arr2)).toEqual([\n      1,\n      \"1\",\n      true,\n      2,\n      false,\n    ]);\n  });\n\n  test(\"complex objects with custom function iteratee\", () => {\n    const arr1 = [\n      { id: \"a\", value: 1 },\n      { id: \"b\", value: 2 },\n    ];\n    const arr2 = [\n      { id: \"a\", value: 3 },\n      { id: \"b\", value: 2 },\n    ];\n    const iteratee = (obj: any) => obj.id + obj.value;\n    expect(unionBy(iteratee, arr1, arr2)).toEqual([\n      { id: \"a\", value: 1 },\n      { id: \"b\", value: 2 },\n      { id: \"a\", value: 3 },\n    ]);\n  });\n\n  test(\"handling of arrays with different lengths\", () => {\n    const arr1 = [1, 2];\n    const arr2 = [3, 4, 5, 6];\n    expect(unionBy((value: any) => value, arr1, arr2)).toEqual([\n      1, 2, 3, 4, 5, 6,\n    ]);\n  });\n\n  test(\"arrays with complex nesting\", () => {\n    const arr1 = [\n      [1, 2],\n      [3, 4],\n    ];\n    const arr2 = [\n      [3, 4],\n      [5, 6],\n    ];\n    expect(unionBy(JSON.stringify, arr1, arr2)).toEqual([\n      [1, 2],\n      [3, 4],\n      [5, 6],\n    ]);\n  });\n});\n";

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
