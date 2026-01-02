// JS Starter Code
const jsStarterCode = "/**\n * @param {...Function} args\n * @returns Function\n */\nexport default function compose(...fns) {\n  throw \"Not implemented\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function compose(...fns: Array<Function>): Function {\n  throw \"Not implemented\";\n}\n";

// JS Test Cases
const jsTestCode = "import compose from \"./compose\";\n\nconst identity = <T,>(x: T): T => x;\nconst double = (x: number) => x * 2;\nconst square = (x: number) => x * x;\n\ndescribe(\"compose\", () => {\n  test(\"returns a function\", () => {\n    const composed = compose(identity);\n    expect(typeof composed).toBe(\"function\");\n  });\n\n  test(\"no functions\", () => {\n    const composed = compose();\n    expect(composed(42)).toBe(42);\n  });\n\n  describe(\"only one function\", () => {\n    test(\"identity\", () => {\n      const composed = compose(identity);\n      expect(composed(42)).toBe(42);\n    });\n\n    test(\"double\", () => {\n      const composed = compose(double);\n      expect(composed(42)).toBe(84);\n    });\n  });\n\n  describe(\"two functions\", () => {\n    test(\"identity\", () => {\n      const composed = compose(identity, identity);\n      expect(composed(42)).toBe(42);\n    });\n\n    test(\"mixture\", () => {\n      const composed = compose(square, double);\n      expect(composed(4)).toBe(64);\n    });\n  });\n\n  describe(\"multiple functions\", () => {\n    test(\"identity\", () => {\n      const composed = compose(identity, identity, identity);\n      expect(composed(42)).toBe(42);\n    });\n\n    test(\"mixture\", () => {\n      const composed = compose(square, identity, square, double, identity);\n      expect(composed(3)).toBe(1296);\n    });\n  });\n});\n";

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
