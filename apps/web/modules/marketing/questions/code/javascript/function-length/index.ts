// JS Starter Code
const jsStarterCode = "/**\n * @param {Function} fn\n * @return {number}\n */\nexport default function functionLength(fn) {\n  throw \"Not implemented\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function functionLength(fn: Function): number {\n  throw \"Not implemented\";\n}\n";

// JS Test Cases
const jsTestCode = "import functionLength from \"./function-length\";\n\ndescribe(\"functionLength\", () => {\n  test(\"no arguments\", () => {\n    expect(functionLength(function foo() {})).toBe(0);\n    expect(functionLength(() => {})).toBe(0);\n  });\n\n  test(\"one argument\", () => {\n    expect(functionLength(function foo(a: number) {})).toBe(1);\n    expect(functionLength((a: number) => {})).toBe(1);\n  });\n\n  test(\"two arguments\", () => {\n    expect(functionLength(function foo(a: number, b: number) {})).toBe(2);\n    expect(functionLength((a: number, b: number) => {})).toBe(2);\n  });\n\n  test(\"multiple arguments\", () => {\n    expect(\n      functionLength(function foo(a: number, b: number, c: number) {}),\n    ).toBe(3);\n    expect(functionLength((a: number, b: number, c: number) => {})).toBe(3);\n  });\n\n  // TODO: Transpilation output makes the default parameters non-default, thus\n  // the results are different in the browser. Commented out for now.\n  // test('default arguments', () => {\n  //   expect(functionLength(function foo(a, b = 2) {})).toBe(1);\n  //   expect(functionLength(function foo(a = 1, b = 2) {})).toBe(0);\n  // });\n\n  // test('rest arguments', () => {\n  //   expect(functionLength(function foo(...args) {})).toBe(0);\n  //   expect(functionLength(function foo(a, ...args) {})).toBe(1);\n  //   expect(functionLength(function foo(a, b, ...args) {})).toBe(2);\n  //   expect(functionLength(function foo(a, b = 1, ...args) {})).toBe(1);\n  // });\n});\n";

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
