// JS Starter Code
const jsStarterCode = "/**\n * @param {Function} func\n * @return {Function}\n */\nexport default function curry(func) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function curry(func: Function): Function {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import curry from \"./curry-iii\";\n\nfunction multiply(...numbers: Array<number>) {\n  return numbers.reduce((a, b) => a * b, 1);\n}\nfunction sum(...numbers: Array<number>) {\n  return numbers.reduce((a, b) => a + b, 0);\n}\n\ndescribe(\"curry\", () => {\n  test(\"returns function\", () => {\n    const curried = curry(multiply);\n    expect(curried).toBeInstanceOf(Function);\n  });\n\n  test(\"empty function\", () => {\n    const curried = curry(multiply);\n    expect(+curried()).toBe(1);\n  });\n\n  test(\"single argument\", () => {\n    const curried = curry(sum);\n    expect(+curried(3)).toBe(3);\n  });\n\n  describe(\"two arguments\", () => {\n    test(\"one arg at a time\", () => {\n      const curried = curry(multiply);\n      expect(+curried(7)(3)).toBe(21);\n    });\n\n    test(\"both args at once\", () => {\n      const curried = curry(multiply);\n      expect(+curried(7, 3)).toBe(21);\n    });\n  });\n\n  describe(\"multiple arguments\", () => {\n    test(\"one arg at a time\", () => {\n      const curried = curry(multiply);\n      expect(+curried(7)(3)(2)).toBe(42);\n    });\n\n    test(\"multiple args at once\", () => {\n      const curried = curry(multiply);\n      expect(+curried(7, 3, 2)).toBe(42);\n      expect(+curried(7, 3, 2)).toBe(42);\n      expect(+curried(7, 3)(2)).toBe(42);\n      expect(+curried(7)(3, 2)).toBe(42);\n    });\n  });\n\n  test(\"can be reused\", () => {\n    const curriedMultiply = curry(multiply);\n    const multiplyByThree = curriedMultiply(3);\n    expect(+multiplyByThree).toBe(3);\n    expect(+multiplyByThree(4)).toBe(12);\n\n    const multiplyByFifteen = multiplyByThree(5);\n    expect(+multiplyByFifteen).toBe(15);\n    expect(+multiplyByFifteen(2)).toBe(30);\n  });\n\n  test(\"ignores empty args\", () => {\n    const curried = curry(multiply);\n    expect(+curried()(4)()(3)()(2)).toBe(24);\n    expect(+curried()()()()(4)(2)(3)).toBe(24);\n  });\n\n  describe(\"can access this\", () => {\n    test(\"single parameter\", () => {\n      const curried = curry(function (this: any, val: number) {\n        return this.multiplier * val;\n      });\n\n      const obj = { multiplier: 5, mul: curried };\n      expect(obj.mul()).toBeInstanceOf(Function);\n      expect(+obj.mul(7)).toBe(35);\n    });\n\n    test(\"two arguments\", () => {\n      const curried = curry(function (this: any, foo: number, bar: number) {\n        return this.base * foo + bar;\n      });\n\n      const obj = { base: 5, mul: curried };\n      expect(obj.mul()).toBeInstanceOf(Function);\n      expect(+obj.mul(3)(2)).toBe(17);\n      expect(+obj.mul(3, 2)).toBe(17);\n      expect(+obj.mul(3)()(2)).toBe(17);\n      expect(+obj.mul()(3)()(2)).toBe(17);\n    });\n\n    test(\"variadic arguments\", () => {\n      const curried = curry(function (this: any, ...numbers: Array<number>) {\n        return this.multiplier * numbers.reduce((a, b) => a * b, 1);\n      });\n\n      const obj = { multiplier: 5, mul: curried };\n      expect(+obj.mul(7, 2)).toBe(70);\n    });\n  });\n});\n";

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
