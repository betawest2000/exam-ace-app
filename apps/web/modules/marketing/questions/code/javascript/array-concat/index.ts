// JS Starter Code
const jsStarterCode = "/**\n * @template T\n * @param {...(T | Array<T>)} items\n * @return {Array<T>}\n */\nArray.prototype.myConcat = function (...items) {\n  throw \"Not implemented!\";\n};\n";

// TS Starter Code
const tsStarterCode = "interface Array<T> {\n  myConcat(...items: Array<T | Array<T>>): Array<T>;\n}\n\nArray.prototype.myConcat = function (...items) {\n  throw \"Not implemented!\";\n};\n";

// JS Test Cases
const jsTestCode = "import \"./array-concat\";\n\ndescribe(\"Array.prototype.myConcat\", () => {\n  test(\"empty arguments\", () => {\n    expect([].myConcat()).toStrictEqual([]);\n    expect([1, 2, 3].myConcat()).toStrictEqual([1, 2, 3]);\n  });\n\n  test(\"empty array\", () => {\n    expect([].myConcat([])).toStrictEqual([]);\n    expect([1].myConcat([])).toStrictEqual([1]);\n    expect([1, 2].myConcat([])).toStrictEqual([1, 2]);\n  });\n\n  test(\"single array argument\", () => {\n    expect([1].myConcat([2])).toStrictEqual([1, 2]);\n    expect([1, 2, 3].myConcat([4, 5, 6])).toStrictEqual([1, 2, 3, 4, 5, 6]);\n  });\n\n  test(\"multiple arrays arguments\", () => {\n    expect([1, 2, 3].myConcat([4, 5, 6], [7, 8, 9])).toStrictEqual([\n      1, 2, 3, 4, 5, 6, 7, 8, 9,\n    ]);\n  });\n\n  test(\"primitive arguments\", () => {\n    expect([1, 2].myConcat(3, 4)).toStrictEqual([1, 2, 3, 4]);\n    expect([1, 2, 3].myConcat(4, 5, 6)).toStrictEqual([1, 2, 3, 4, 5, 6]);\n  });\n\n  test(\"mixed arguments\", () => {\n    expect([1, 2, 3].myConcat([4, 5, 6], 7)).toStrictEqual([\n      1, 2, 3, 4, 5, 6, 7,\n    ]);\n    expect([1, 2, 3].myConcat(4, [5, 6, 7])).toStrictEqual([\n      1, 2, 3, 4, 5, 6, 7,\n    ]);\n    expect([1, 2, 3].myConcat(4, [5, 6], 7)).toStrictEqual([\n      1, 2, 3, 4, 5, 6, 7,\n    ]);\n  });\n\n  test(\"sparse arrays\", () => {\n    const combined = [1, , 2].myConcat(3, 4);\n    expect(combined).toHaveLength(5);\n    expect(combined[0]).toBe(1);\n    expect(combined[2]).toBe(2);\n    expect(combined[3]).toBe(3);\n    expect(combined[4]).toBe(4);\n  });\n\n  test(\"new array is returned\", () => {\n    const orig = [1, 2, 3];\n    const res = orig.myConcat([4, 5, 6]);\n    expect(res).toStrictEqual([1, 2, 3, 4, 5, 6]);\n\n    orig.push(4);\n    expect(res).toStrictEqual([1, 2, 3, 4, 5, 6]);\n  });\n});\n";

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
