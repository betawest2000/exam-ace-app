// JS Starter Code
const jsStarterCode = "/**\n * @template {Function} T\n * @param {T} func\n * @return {T}\n */\nexport default function once(func) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "type Fn<T> = (this: any, args: Array<any>) => T;\n\nexport default function once<T>(func: Fn<T>): Fn<T> {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import once from \"./once\";\n\ndescribe(\"once\", () => {\n  test(\"returns function\", () => {\n    const onced = once(() => {});\n    expect(onced).toBeInstanceOf(Function);\n  });\n\n  test(\"only run once\", () => {\n    let i = 0;\n    const onced = once(() => ++i);\n\n    onced();\n    onced();\n    expect(i).toBe(1);\n  });\n\n  test(\"returns the value of the first invocation\", () => {\n    let i = 0;\n    const onced = once(() => ++i);\n    expect(onced()).toBe(1);\n    expect(onced()).toBe(1);\n    expect(i).toBe(1);\n\n    i = 99;\n    expect(onced()).toBe(1);\n    expect(i).toBe(99);\n  });\n\n  describe(\"accepts arguments\", () => {\n    test(\"single arguments\", () => {\n      const onced = once((a) => a * 2);\n\n      expect(onced(2)).toBe(4);\n      expect(onced(6)).toBe(4);\n      expect(onced(100)).toBe(4);\n    });\n\n    test(\"two arguments\", () => {\n      const onced = once((a, b) => a + b);\n\n      expect(onced(2, 3)).toBe(5);\n      expect(onced(6, 7)).toBe(5);\n    });\n  });\n\n  test(\"can access this\", () => {\n    const onced = once(function (val) {\n      return this.multiplier * val;\n    });\n\n    const obj = { multiplier: 5, mul: onced };\n    expect(obj.mul(7)).toBe(35);\n    expect(obj.mul(10)).toBe(35);\n  });\n});\n";

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
