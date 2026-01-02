// JS Starter Code
const jsStarterCode = "/**\n * @param {Function} func\n * @return {Function}\n */\nexport default function curry(func) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function curry(func: Function): Function {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import curry from \"./curry\";\n\nconst empty = () => 0;\nconst square = (a: number) => a * a;\nconst mul = (a: number, b: number) => a * b;\nconst mulThree = (a: number, b: number, c: number) => a * b * c;\n\ndescribe(\"curry\", () => {\n  test(\"returns function\", () => {\n    const curried = curry(square);\n    expect(curried).toBeInstanceOf(Function);\n  });\n\n  test(\"empty function\", () => {\n    const curried = curry(empty);\n    expect(curried()).toBe(0);\n  });\n\n  test(\"single argument\", () => {\n    const curried = curry(square);\n    expect(curried()).toBeInstanceOf(Function);\n    expect(curried(2)).toBe(4);\n  });\n\n  test(\"two arguments\", () => {\n    const curried = curry(mul);\n    expect(curried()).toBeInstanceOf(Function);\n    expect(curried(7)(3)).toBe(21);\n  });\n\n  test(\"multiple arguments\", () => {\n    const curried = curry(mulThree);\n    expect(curried()).toBeInstanceOf(Function);\n    expect(curried(7)(3)(2)).toBe(42);\n  });\n\n  test(\"can be reused\", () => {\n    const curried = curry(square);\n    expect(curried()).toBeInstanceOf(Function);\n    expect(curried(2)).toBe(4);\n    expect(curried(3)).toBe(9);\n  });\n\n  test(\"ignores empty args\", () => {\n    const curried = curry(mulThree);\n    expect(curried()(4)()(3)()(2)).toBe(24);\n    expect(curried()()()()(4)(2)(3)).toBe(24);\n  });\n\n  describe(\"can access this\", () => {\n    test(\"single parameter\", () => {\n      const curried = curry(function (this: any, val: number) {\n        return this.multiplier * val;\n      });\n\n      const obj = { multiplier: 5, mul: curried };\n      expect(obj.mul()).toBeInstanceOf(Function);\n      expect(obj.mul(7)).toBe(35);\n    });\n\n    test(\"multiple arguments\", () => {\n      const curried = curry(function (this: any, foo: number, bar: number) {\n        return this.base * foo + bar;\n      });\n\n      const obj = { base: 5, mul: curried };\n      expect(obj.mul()).toBeInstanceOf(Function);\n      expect(obj.mul(3)(2)).toBe(17);\n      expect(obj.mul(3)()(2)).toBe(17);\n      expect(obj.mul()(3)()(2)).toBe(17);\n    });\n  });\n});\n";

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
