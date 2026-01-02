// JS Starter Code
const jsStarterCode = "/**\n * @param {Object} obj\n * @param {Function} fn\n * @returns Object\n */\nexport default function objectMap(obj, fn) {\n  throw \"Not implemented\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function objectMap<V, R>(\n  obj: Record<string, V>,\n  fn: (val: V) => R,\n): Record<string, R> {\n  throw \"Not implemented\";\n}\n";

// JS Test Cases
const jsTestCode = "import objectMap from \"./object-map\";\n\nconst double = (x: number) => x * 2;\n\ndescribe(\"objectMap\", () => {\n  test(\"empty\", () => {\n    expect(objectMap({}, double)).toEqual({});\n  });\n\n  test(\"single key\", () => {\n    expect(objectMap({ foo: 2 }, double)).toEqual({ foo: 4 });\n  });\n\n  test(\"multiple keys\", () => {\n    expect(objectMap({ foo: 2, bar: 3 }, double)).toEqual({ foo: 4, bar: 6 });\n  });\n\n  test(\"can access `this`\", () => {\n    expect(\n      objectMap({ bar: 3, foo: 2 }, function (this: any, x: number) {\n        return this.foo * x;\n      }),\n    ).toEqual({\n      foo: 4,\n      bar: 6,\n    });\n  });\n\n  test(\"does not mutate the input\", () => {\n    const obj = { bar: 3, foo: 2 };\n    expect(objectMap(obj, double)).toEqual({\n      foo: 4,\n      bar: 6,\n    });\n    expect(obj).toEqual({\n      foo: 2,\n      bar: 3,\n    });\n  });\n});\n";

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
