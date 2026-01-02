// JS Starter Code
const jsStarterCode = "/**\n * @template T\n * @param {T} value\n * @return {T}\n */\nexport default function deepClone(value) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function deepClone<T>(value: T): T {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import deepClone from \"./deep-clone\";\n\ndescribe(\"deepClone\", () => {\n  describe(\"primitive values\", () => {\n    expect(deepClone(\"foo\")).toEqual(\"foo\");\n    expect(deepClone(123)).toEqual(123);\n    expect(deepClone(true)).toEqual(true);\n    expect(deepClone(false)).toEqual(false);\n    expect(deepClone(null)).toEqual(null);\n  });\n\n  describe(\"objects\", () => {\n    test(\"no nesting\", () => {\n      const obj = { role: \"foo\" };\n      const clonedObj = deepClone(obj);\n      clonedObj.role = \"bar\";\n      expect(obj).toEqual({ role: \"foo\" });\n    });\n\n    test(\"one level of nesting\", () => {\n      const obj = { user: { role: \"admin\", id: \"123\" } };\n      const clonedObj = deepClone(obj);\n      clonedObj.user.role = \"bar\";\n      expect(obj).toEqual({ user: { role: \"admin\", id: \"123\" } });\n    });\n\n    test(\"two levels of nesting\", () => {\n      const obj = { a: { b: { c: \"d\" } }, e: \"f\" };\n      const clonedObj = deepClone(obj);\n      (clonedObj.a.b as any) = {};\n      expect(obj).toEqual({ a: { b: { c: \"d\" } }, e: \"f\" });\n    });\n\n    test(\"containing arrays\", () => {\n      const obj = { foo: [{ bar: \"baz\" }] };\n      const clonedObj = deepClone(obj);\n      clonedObj.foo[0].bar = \"bax\";\n\n      expect(obj).toEqual({ foo: [{ bar: \"baz\" }] });\n    });\n  });\n\n  describe(\"arrays\", () => {\n    test(\"containing objects\", () => {\n      const obj = [{ a: \"foo\" }, { b: \"bar\" }];\n      const clonedObj = deepClone(obj);\n      clonedObj[1].b = \"baz\";\n\n      expect(obj).toEqual([{ a: \"foo\" }, { b: \"bar\" }]);\n    });\n\n    test(\"containing nested objects\", () => {\n      const obj = [{ a: { id: \"foo\" } }, { b: { id: \"baz\" } }];\n      const clonedObj = deepClone(obj);\n      clonedObj[1].b = { id: \"bax\" };\n\n      expect(obj).toEqual([{ a: { id: \"foo\" } }, { b: { id: \"baz\" } }]);\n    });\n  });\n});\n";

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
