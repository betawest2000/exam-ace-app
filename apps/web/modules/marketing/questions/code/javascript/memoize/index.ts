// JS Starter Code
const jsStarterCode = "/**\n * @param {Function} func\n * @returns Function\n */\nexport default function memoize(func) {\n  throw \"Not implemented\";\n}\n";

// TS Starter Code
const tsStarterCode = "type Fn = (this: any, arg: string | number) => unknown;\n\nexport default function memoize(func: Fn): Fn {\n  throw \"Not implemented\";\n}\n";

// JS Test Cases
const jsTestCode = "import memoize from \"./memoize\";\n\ndescribe(\"memoize\", () => {\n  test(\"returns a function\", () => {\n    const memoizedFn = memoize(() => {});\n    expect(memoizedFn).toBeInstanceOf(Function);\n  });\n\n  test(\"numbers\", () => {\n    let count = 0;\n    function double(x: number) {\n      count++;\n      return x * 2;\n    }\n    const memoizedFn = memoize(double);\n    expect(count).toBe(0);\n    expect(memoizedFn(1)).toBe(2);\n    expect(count).toBe(1);\n    expect(memoizedFn(1)).toBe(2);\n    expect(count).toBe(1);\n    expect(memoizedFn(1)).toBe(2);\n    expect(count).toBe(1);\n  });\n\n  test(\"strings\", () => {\n    let count = 0;\n    function repeat(x: string) {\n      count++;\n      return x + x;\n    }\n    const memoizedFn = memoize(repeat);\n    expect(count).toBe(0);\n    expect(memoizedFn(\"foo\")).toBe(\"foofoo\");\n    expect(count).toBe(1);\n    expect(memoizedFn(\"foo\")).toBe(\"foofoo\");\n    expect(count).toBe(1);\n    expect(memoizedFn(\"foo\")).toBe(\"foofoo\");\n    expect(count).toBe(1);\n  });\n\n  test(\"memoize different arguments\", () => {\n    let count = 0;\n    function double(x: string) {\n      count++;\n      return x + x;\n    }\n    const memoizedFn = memoize(double);\n    expect(count).toBe(0);\n    expect(memoizedFn(\"foo\")).toBe(\"foofoo\");\n    expect(count).toBe(1);\n    expect(memoizedFn(\"foo\")).toBe(\"foofoo\");\n    expect(count).toBe(1);\n    expect(memoizedFn(\"bar\")).toBe(\"barbar\");\n    expect(count).toBe(2);\n    expect(memoizedFn(\"bar\")).toBe(\"barbar\");\n    expect(count).toBe(2);\n  });\n\n  test(\"differentiates strings and numbers\", () => {\n    let count = 0;\n    function identity<T>(x: T) {\n      count++;\n      return x;\n    }\n    const memoizedFn = memoize(identity);\n    expect(count).toBe(0);\n    expect(memoizedFn(\"1\")).toBe(\"1\");\n    expect(count).toBe(1);\n    expect(memoizedFn(\"1\")).toBe(\"1\");\n    expect(count).toBe(1);\n    expect(memoizedFn(1)).toBe(1);\n    expect(count).toBe(2);\n    expect(memoizedFn(1)).toBe(1);\n    expect(count).toBe(2);\n  });\n\n  test(\"can access `this`\", () => {\n    let count = 0;\n    function mul(this: any, x: number) {\n      count++;\n      return this.age * x;\n    }\n    const person = {\n      age: 42,\n      mul: memoize(mul),\n    };\n    expect(count).toBe(0);\n    expect(person.mul(2)).toBe(84);\n    expect(count).toBe(1);\n    expect(person.mul(2)).toBe(84);\n    expect(count).toBe(1);\n  });\n});\n";

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
