// JS Starter Code
const jsStarterCode = "/**\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is empty, else `false`.\n */\nexport default function isEmpty(value) {\n  throw \"Not implemented\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function isEmpty(value: unknown): boolean {\n  throw \"Not implemented\";\n}\n";

// JS Test Cases
const jsTestCode = "import isEmpty from \"./is-empty\";\n\ndescribe(\"isEmpty\", () => {\n  test(\"empty values\", () => {\n    expect(isEmpty(true)).toBe(true);\n    expect(isEmpty(1)).toBe(true);\n    expect(isEmpty(NaN)).toBe(true);\n    expect(isEmpty(/x/)).toBe(true);\n    expect(isEmpty(Symbol(\"x\"))).toBe(true);\n  });\n\n  describe(\"strings\", () => {\n    test(\"empty string\", () => {\n      expect(isEmpty(\"\")).toBe(true);\n    });\n\n    test(\"non-empty string\", () => {\n      expect(isEmpty(\"a\")).toBe(false);\n    });\n  });\n\n  describe(\"objects\", () => {\n    test(\"empty object\", () => {\n      expect(isEmpty({})).toBe(true);\n    });\n\n    test(\"non-empty object\", () => {\n      expect(isEmpty({ a: 0 })).toBe(false);\n    });\n\n    test(\"object that has a `length` property\", () => {\n      expect(isEmpty({ length: 0 })).toBe(false);\n    });\n\n    test(\"objects with negative lengths\", function () {\n      function Foo() {}\n      Foo.prototype.length = -1;\n\n      expect(isEmpty(new (Foo as any)())).toBe(true);\n    });\n\n    test(\"non-number lengths\", function () {\n      expect(isEmpty({ length: \"0\" })).toBe(false);\n    });\n  });\n\n  describe(\"maps\", function () {\n    test(\"empty map\", () => {\n      const map = new Map();\n      expect(isEmpty(map)).toBe(true);\n    });\n\n    test(\"non-empty map\", () => {\n      const map = new Map([[\"a\", 1]]);\n      expect(isEmpty(map)).toBe(false);\n    });\n  });\n\n  describe(\"sets\", function () {\n    test(\"empty set\", () => {\n      const set = new Set();\n      expect(isEmpty(set)).toBe(true);\n    });\n\n    test(\"non-empty set\", () => {\n      const set = new Set([1]);\n      expect(isEmpty(set)).toBe(false);\n    });\n  });\n\n  describe(\"arrays\", () => {\n    test(\"empty array\", () => {\n      expect(isEmpty([])).toBe(true);\n    });\n\n    test(\"non-empty array\", () => {\n      expect(isEmpty([1])).toBe(false);\n    });\n  });\n});\n";

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
