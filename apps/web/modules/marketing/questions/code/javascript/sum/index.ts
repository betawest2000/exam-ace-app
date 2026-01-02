// JS Starter Code
const jsStarterCode = "/**\n * @param {number} value\n * @return {Function}\n */\nexport default function sum(value) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "type SumResult = (value?: number) => number | SumResult;\n\nexport default function sum(value: number): SumResult {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import sum from \"./sum\";\n\ndescribe(\"sum\", () => {\n  test(\"one number\", () => {\n    expect(sum(1)()).toBe(1);\n    expect(sum(-1)()).toBe(-1);\n  });\n\n  test(\"two numbers\", () => {\n    // @ts-ignore\n    expect(sum(1)(2)()).toBe(3);\n    // @ts-ignore\n    expect(sum(89)(11)()).toBe(100);\n    // @ts-ignore\n    expect(sum(-1)(-2)()).toBe(-3);\n  });\n\n  test(\"zero works\", () => {\n    // @ts-ignore\n    expect(sum(0)(0)(0)()).toBe(0);\n    // @ts-ignore\n    expect(sum(1)(2)(0)()).toBe(3);\n    // @ts-ignore\n    expect(sum(1)(0)(89)(10)()).toBe(100);\n    // @ts-ignore\n    expect(sum(-1)(0)(-2)()).toBe(-3);\n  });\n\n  test(\"negative numbers\", () => {\n    // @ts-ignore\n    expect(sum(-1)(-2)()).toBe(-3);\n    // @ts-ignore\n    expect(sum(-89)(-2)()).toBe(-91);\n    // @ts-ignore\n    expect(sum(-42)(42)()).toBe(0);\n  });\n\n  test(\"returns function if not terminated\", () => {\n    expect(sum(1)).toBeInstanceOf(Function);\n    // @ts-ignore\n    expect(sum(1)(2)).toBeInstanceOf(Function);\n    // @ts-ignore\n    expect(sum(1)(2)(3)).toBeInstanceOf(Function);\n  });\n\n  test(\"can be reused\", () => {\n    const addTwo = sum(2);\n    // @ts-ignore\n    expect(addTwo(3)()).toBe(5);\n    // @ts-ignore\n    expect(addTwo(4)()).toBe(6);\n    // @ts-ignore\n    expect(addTwo(3)(4)()).toBe(9);\n  });\n});\n";

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
