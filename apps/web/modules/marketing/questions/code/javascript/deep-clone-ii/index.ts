// JS Starter Code
const jsStarterCode = "/**\n * @template T\n * @param {T} value\n * @return {T}\n */\nexport default function deepClone(value) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function deepClone<T>(value: T): T {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import deepClone from \"./deep-clone-ii\";\n\n// TODO: Change tests to test for non-serializable properties in Jest.\ndescribe(\"deepClone\", () => {\n  test(\"single primitive value\", () => {\n    expect(deepClone(123)).toStrictEqual(123);\n    expect(deepClone(\"foo\")).toStrictEqual(\"foo\");\n    expect(deepClone(true)).toStrictEqual(true);\n    expect(deepClone(null)).toStrictEqual(null);\n  });\n\n  test(\"object with no nesting\", () => {\n    const obj = { role: \"foo\" };\n    const clonedObj = deepClone(obj);\n    expect(clonedObj).toStrictEqual({ role: \"foo\" });\n    clonedObj.role = \"bar\";\n    expect(obj).toStrictEqual({ role: \"foo\" });\n    expect(clonedObj).toStrictEqual({ role: \"bar\" });\n  });\n\n  test(\"object with no nesting and symbol-key prop\", () => {\n    const symbol = Symbol(\"bar\");\n    const obj = { role: \"foo\", [symbol]: \"bar\" };\n    const clonedObj = deepClone(obj);\n    expect(clonedObj).toStrictEqual({ role: \"foo\", [symbol]: \"bar\" });\n    clonedObj.role = \"bar\";\n    expect(obj).toStrictEqual({ role: \"foo\", [symbol]: \"bar\" });\n  });\n\n  test(\"object with one-level nesting\", () => {\n    const symbol = Symbol(\"s\");\n    const date = new Date();\n    const obj = {\n      num: 0,\n      str: \"\",\n      boolean: true,\n      unf: undefined,\n      nul: null,\n      obj: { name: \"foo\", id: 1 },\n      arr: [0, 1, 2],\n      date,\n      reg: /\\/bar\\/ig/,\n      [symbol]: \"baz\",\n    };\n    const clonedObj: any = deepClone(obj);\n    expect(clonedObj).toStrictEqual({\n      num: 0,\n      str: \"\",\n      boolean: true,\n      unf: undefined,\n      nul: null,\n      obj: { name: \"foo\", id: 1 },\n      arr: [0, 1, 2],\n      date,\n      reg: /\\/bar\\/ig/,\n      [symbol]: \"baz\",\n    });\n    clonedObj.name = \"bar\";\n    clonedObj.arr.pop();\n\n    expect(obj).toStrictEqual({\n      num: 0,\n      str: \"\",\n      boolean: true,\n      unf: undefined,\n      nul: null,\n      obj: { name: \"foo\", id: 1 },\n      arr: [0, 1, 2],\n      date,\n      reg: /\\/bar\\/ig/,\n      [symbol]: \"baz\",\n    });\n  });\n\n  test(\"object with circular references\", () => {\n    const obj: any = { a: {} };\n    obj.a.b = obj;\n    const clonedObj = deepClone(obj);\n    clonedObj.a.b = \"something new\";\n    expect(obj.a.b).toStrictEqual(obj);\n  });\n\n  test(\"object prototype is also copied\", () => {\n    const Foo = function () {};\n    let foo = new (Foo as any)();\n    const cloned = deepClone(foo);\n\n    expect(Object.getPrototypeOf(cloned)).toStrictEqual(\n      Object.getPrototypeOf(foo),\n    );\n  });\n});\n";

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
