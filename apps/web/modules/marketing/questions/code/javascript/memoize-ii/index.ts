// JS Starter Code
const jsStarterCode = "/**\n * @param {Function} func\n * @returns Function\n */\nexport default function memoize(func) {\n  throw \"Not implemented\";\n}\n";

// TS Starter Code
const tsStarterCode = "type Fn<T> = (this: any, ...args: Array<any>) => T;\n\nexport default function memoize<T>(func: Fn<T>): Fn<T> {\n  throw \"Not implemented\";\n}\n";

// JS Test Cases
const jsTestCode = "import memoize from \"./memoize-ii\";\n\ndescribe(\"memoize\", () => {\n  test(\"returns a function\", () => {\n    const memoizedFn = memoize(() => {});\n    expect(typeof memoizedFn).toBe(\"function\");\n  });\n\n  test(\"no arguments\", () => {\n    let count = 0;\n    function foo() {\n      count++;\n      return \"booya\";\n    }\n    const memoizedFn = memoize(foo);\n    expect(count).toBe(0);\n    expect(memoizedFn()).toBe(\"booya\");\n    expect(count).toBe(1);\n    expect(memoizedFn()).toBe(\"booya\");\n    expect(count).toBe(1);\n    expect(memoizedFn()).toBe(\"booya\");\n    expect(count).toBe(1);\n  });\n\n  test(\"single argument\", () => {\n    let count = 0;\n    function double(x: number): number {\n      count++;\n      return x * 2;\n    }\n    const memoizedFn = memoize(double);\n    expect(count).toBe(0);\n    expect(memoizedFn(1)).toBe(2);\n    expect(count).toBe(1);\n    expect(memoizedFn(1)).toBe(2);\n    expect(count).toBe(1);\n    expect(memoizedFn(3)).toBe(6);\n    expect(count).toBe(2);\n    expect(memoizedFn(3)).toBe(6);\n    expect(count).toBe(2);\n    expect(memoizedFn(1)).toBe(2);\n    expect(count).toBe(2);\n  });\n\n  test(\"two arguments\", () => {\n    let count = 0;\n    function mul(a: number, b: number) {\n      count++;\n      return a * b;\n    }\n    const memoizedFn = memoize(mul);\n    expect(count).toBe(0);\n    expect(memoizedFn(3, 4)).toBe(12);\n    expect(count).toBe(1);\n    expect(memoizedFn(3, 4)).toBe(12);\n    expect(count).toBe(1);\n    expect(memoizedFn(3, 7)).toBe(21);\n    expect(count).toBe(2);\n    expect(memoizedFn(3, 7)).toBe(21);\n    expect(count).toBe(2);\n    expect(memoizedFn(3, 4)).toBe(12);\n    expect(count).toBe(2);\n  });\n\n  test(\"strings\", () => {\n    let count = 0;\n    function repeat(x: string) {\n      count++;\n      return x + x;\n    }\n    const memoizedFn = memoize(repeat);\n    expect(count).toBe(0);\n    expect(memoizedFn(\"foo\")).toBe(\"foofoo\");\n    expect(count).toBe(1);\n    expect(memoizedFn(\"foo\")).toBe(\"foofoo\");\n    expect(count).toBe(1);\n    expect(memoizedFn(\"bar\")).toBe(\"barbar\");\n    expect(count).toBe(2);\n    expect(memoizedFn(\"bar\")).toBe(\"barbar\");\n    expect(count).toBe(2);\n    expect(memoizedFn(\"foo\")).toBe(\"foofoo\");\n    expect(count).toBe(2);\n  });\n\n  test(\"differentiates strings and numbers\", () => {\n    let count = 0;\n    function identity<T>(x: T): T {\n      count++;\n      return x;\n    }\n    const memoizedFn = memoize(identity);\n    expect(count).toBe(0);\n    expect(memoizedFn(\"1\")).toBe(\"1\");\n    expect(count).toBe(1);\n    expect(memoizedFn(\"1\")).toBe(\"1\");\n    expect(count).toBe(1);\n    expect(memoizedFn(1)).toBe(1);\n    expect(count).toBe(2);\n    expect(memoizedFn(1)).toBe(1);\n    expect(count).toBe(2);\n  });\n\n  describe(\"variadic arguments\", () => {\n    test(\"arguments of same type\", () => {\n      let count = 0;\n      function product(...args: Array<number>) {\n        count++;\n        return args.reduce((acc, num) => acc * num, 1);\n      }\n      const memoizedFn = memoize(product);\n      expect(count).toBe(0);\n      expect(memoizedFn(3, 4, 5)).toBe(60);\n      expect(count).toBe(1);\n      expect(memoizedFn(3, 4, 5)).toBe(60);\n      expect(count).toBe(1);\n      expect(memoizedFn(4, 5, 6, 7)).toBe(840);\n      expect(count).toBe(2);\n      expect(memoizedFn(4, 5, 6, 7)).toBe(840);\n      expect(count).toBe(2);\n      expect(memoizedFn(3, 4, 5)).toBe(60);\n      expect(count).toBe(2);\n    });\n\n    test(\"arguments of different type\", () => {\n      let count = 0;\n      function repeat(str: string, times: number) {\n        count++;\n        return Array(times).fill(str).join(\"\");\n      }\n      const memoizedFn = memoize(repeat);\n      expect(count).toBe(0);\n      expect(memoizedFn(\"abc\", 3)).toBe(\"abcabcabc\");\n      expect(count).toBe(1);\n      expect(memoizedFn(\"abc\", 3)).toBe(\"abcabcabc\");\n      expect(count).toBe(1);\n      expect(memoizedFn(\"bar\", 2)).toBe(\"barbar\");\n      expect(count).toBe(2);\n      expect(memoizedFn(\"bar\", 2)).toBe(\"barbar\");\n      expect(count).toBe(2);\n      expect(memoizedFn(\"abc\", 3)).toBe(\"abcabcabc\");\n      expect(count).toBe(2);\n    });\n  });\n\n  test(\"can access `this`\", () => {\n    let count = 0;\n    function mul(this: any, x: number) {\n      count++;\n      return this.age * x;\n    }\n    const person = {\n      age: 42,\n      mul: memoize(mul),\n    };\n    expect(count).toBe(0);\n    expect(person.mul(2)).toBe(84);\n    expect(count).toBe(1);\n    expect(person.mul(2)).toBe(84);\n    expect(count).toBe(1);\n  });\n});\n";

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
