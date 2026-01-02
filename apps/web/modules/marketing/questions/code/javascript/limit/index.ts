// JS Starter Code
const jsStarterCode = "/**\n * @callback func\n * @param {number} n\n * @return {Function}\n */\nexport default function limit(func, n) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "// Function signature for callback argument.\ntype Func<TParams extends any[], TResult> = (...args: TParams) => TResult;\n\nexport default function limit<TParams extends any[], TResult>(\n  func: Func<TParams, TResult>,\n  n: number,\n): Func<TParams, TResult> {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import limit from \"./limit\";\n\ndescribe(\"limit\", () => {\n  test(\"returns function\", () => {\n    const limited = limit(() => {}, 1);\n    expect(limited).toBeInstanceOf(Function);\n  });\n\n  describe(\"only run a limited number of times\", () => {\n    test(\"once\", () => {\n      let i = 0;\n      const limited = limit(() => ++i, 1);\n\n      limited();\n      limited();\n      expect(i).toBe(1);\n    });\n\n    test(\"twice\", () => {\n      let i = 0;\n      const limited = limit(() => ++i, 2);\n\n      limited();\n      expect(i).toBe(1);\n      limited();\n      expect(i).toBe(2);\n      limited();\n      expect(i).toBe(2);\n      limited();\n      expect(i).toBe(2);\n    });\n\n    test(\"thrice\", () => {\n      let i = 0;\n      const limited = limit(() => ++i, 3);\n\n      limited();\n      expect(i).toBe(1);\n      limited();\n      expect(i).toBe(2);\n      limited();\n      expect(i).toBe(3);\n      limited();\n      expect(i).toBe(3);\n      limited();\n      expect(i).toBe(3);\n    });\n  });\n\n  describe(\"returns the value of the last real invocation\", () => {\n    test(\"once\", () => {\n      let i = 0;\n      const limited = limit(() => ++i, 1);\n      expect(limited()).toBe(1);\n      expect(limited()).toBe(1);\n      expect(i).toBe(1);\n\n      i = 99;\n      expect(limited()).toBe(1);\n      expect(i).toBe(99);\n    });\n\n    test(\"twice\", () => {\n      let i = 0;\n      const limited = limit(() => ++i, 2);\n      expect(limited()).toBe(1);\n      expect(limited()).toBe(2);\n      expect(i).toBe(2);\n\n      i = 99;\n      expect(limited()).toBe(2);\n      expect(i).toBe(99);\n    });\n  });\n\n  describe(\"accepts arguments\", () => {\n    test(\"single arguments\", () => {\n      const limited = limit((a) => a * 2, 2);\n\n      expect(limited(2)).toBe(4);\n      expect(limited(6)).toBe(12);\n      expect(limited(100)).toBe(12);\n    });\n\n    test(\"two arguments\", () => {\n      const limited = limit((a, b) => a + b, 3);\n\n      expect(limited(2, 3)).toBe(5);\n      expect(limited(6, 7)).toBe(13);\n      expect(limited(13, 7)).toBe(20);\n      expect(limited(15, 13)).toBe(20);\n    });\n  });\n\n  test(\"can access this\", () => {\n    const limited = limit(function (this: any, val: number) {\n      return this.multiplier * val;\n    }, 3);\n\n    const obj = { multiplier: 5, mul: limited };\n    expect(obj.mul(7)).toBe(35);\n    expect(obj.mul(10)).toBe(50);\n    expect(obj.mul(13)).toBe(65);\n    expect(obj.mul(0)).toBe(65);\n  });\n});\n";

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
