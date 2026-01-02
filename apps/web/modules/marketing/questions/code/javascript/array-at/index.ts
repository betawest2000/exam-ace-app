// JS Starter Code
const jsStarterCode = "/**\n * @param {number} index\n * @return {any | undefined}\n */\nArray.prototype.myAt = function (index) {\n  throw \"Not implemented!\";\n};\n";

// TS Starter Code
const tsStarterCode = "interface Array<T> {\n  myAt(index: number): T | undefined;\n}\n\nArray.prototype.myAt = function (index: number) {\n  throw \"Not implemented!2\";\n};\n";

// JS Test Cases
const jsTestCode = "import \"./array-at\";\n\ndescribe(\"Array.prototype.myAt\", () => {\n  test(\"empty array\", () => {\n    expect([].myAt(0)).toBeUndefined();\n    expect([].myAt(-1)).toBeUndefined();\n    expect([].myAt(1)).toBeUndefined();\n  });\n\n  describe(\"one value\", () => {\n    const arr = [42];\n    test(\"non-negative\", () => {\n      expect(arr.myAt(0)).toBe(42);\n    });\n\n    test(\"negative\", () => {\n      expect(arr.myAt(-1)).toBe(42);\n    });\n\n    test(\"out-of-range\", () => {\n      expect(arr.myAt(1)).toBeUndefined();\n      expect(arr.myAt(2)).toBeUndefined();\n      expect(arr.myAt(-2)).toBeUndefined();\n    });\n  });\n\n  describe(\"two values\", () => {\n    const arr = [42, 79];\n\n    test(\"non-negative\", () => {\n      expect(arr.myAt(0)).toBe(42);\n      expect(arr.myAt(1)).toBe(79);\n    });\n\n    test(\"negative\", () => {\n      expect(arr.myAt(-1)).toBe(79);\n      expect(arr.myAt(-2)).toBe(42);\n    });\n\n    test(\"out-of-range\", () => {\n      expect(arr.myAt(2)).toBeUndefined();\n      expect(arr.myAt(3)).toBeUndefined();\n      expect(arr.myAt(-3)).toBeUndefined();\n      expect(arr.myAt(-4)).toBeUndefined();\n    });\n  });\n\n  describe(\"multiple values\", () => {\n    const arr = [42, 79, 103];\n\n    test(\"non-negative\", () => {\n      expect(arr.myAt(0)).toBe(42);\n      expect(arr.myAt(1)).toBe(79);\n      expect(arr.myAt(2)).toBe(103);\n    });\n\n    test(\"negative\", () => {\n      expect(arr.myAt(-1)).toBe(103);\n      expect(arr.myAt(-2)).toBe(79);\n      expect(arr.myAt(-3)).toBe(42);\n    });\n\n    test(\"out-of-range\", () => {\n      expect(arr.myAt(3)).toBeUndefined();\n      expect(arr.myAt(4)).toBeUndefined();\n      expect(arr.myAt(-4)).toBeUndefined();\n      expect(arr.myAt(-5)).toBeUndefined();\n    });\n  });\n\n  test(\"sparse arrays\", () => {\n    const arr = [1, 2, , 4];\n    expect(arr.myAt(2)).toBeUndefined();\n    expect(arr.myAt(-2)).toBeUndefined();\n  });\n});\n";

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
