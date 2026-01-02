// JS Starter Code
const jsStarterCode = "/**\n * @template T\n * @param  {...T} values\n *\n * @returns () => T\n */\nexport default function cycle(...values) {\n  throw \"Not implemented\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function cycle<T>(...values: Array<T>): () => T {\n  throw \"Not implemented\";\n}\n";

// JS Test Cases
const jsTestCode = "import cycle from \"./cycle\";\n\ndescribe(\"cycle\", () => {\n  test(\"returns function\", () => {\n    const fooFn = cycle(\"foo\");\n    expect(fooFn).toBeInstanceOf(Function);\n  });\n\n  test(\"single item\", () => {\n    const helloFn = cycle(\"hello\");\n    expect(helloFn()).toBe(\"hello\");\n  });\n\n  test(\"two values\", () => {\n    const onOffFn = cycle(\"on\", \"off\");\n    expect(onOffFn()).toBe(\"on\");\n    expect(onOffFn()).toBe(\"off\");\n  });\n\n  test(\"three values\", () => {\n    const speedFn = cycle(\"slow\", \"medium\", \"fast\");\n    expect(speedFn()).toBe(\"slow\");\n    expect(speedFn()).toBe(\"medium\");\n    expect(speedFn()).toBe(\"fast\");\n  });\n\n  test(\"wraps around\", () => {\n    const speedFn = cycle(\"slow\", \"medium\", \"fast\");\n    expect(speedFn()).toBe(\"slow\");\n    expect(speedFn()).toBe(\"medium\");\n    expect(speedFn()).toBe(\"fast\");\n    expect(speedFn()).toBe(\"slow\");\n    expect(speedFn()).toBe(\"medium\");\n    expect(speedFn()).toBe(\"fast\");\n  });\n});\n";

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
