// JS Starter Code
const jsStarterCode = "/**\n * @return {Array<number>}\n */\nArray.prototype.square = function () {\n  throw \"Not implemented!\";\n};\n";

// TS Starter Code
const tsStarterCode = "interface Array<T> {\n  square(): Array<number>;\n}\n\nArray.prototype.square = function () {\n  throw \"Not implemented!\";\n};\n";

// JS Test Cases
const jsTestCode = "import \"./array-square\";\n\ndescribe(\"Array.prototype.square\", () => {\n  test(\"empty array\", () => {\n    expect([].square()).toEqual([]);\n  });\n\n  test(\"one value\", () => {\n    expect([10].square()).toEqual([100]);\n  });\n\n  test(\"two values\", () => {\n    expect([-4, 10].square()).toEqual([16, 100]);\n  });\n\n  test(\"multiple values\", () => {\n    expect([1, 2, 3, 4].square()).toEqual([1, 4, 9, 16]);\n    expect([1, 2, 3, 4, 5].square()).toEqual([1, 4, 9, 16, 25]);\n  });\n\n  test(\"original array is not modified\", () => {\n    const arr = [1, 2, 3, 4];\n    expect(arr.square()).toEqual([1, 4, 9, 16]);\n    expect(arr).toEqual([1, 2, 3, 4]);\n  });\n});\n";

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
