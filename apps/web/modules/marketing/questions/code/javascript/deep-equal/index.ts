// JS Starter Code
const jsStarterCode = "/**\n * @param {*} valueA\n * @param {*} valueB\n * @return {boolean}\n */\nexport default function deepEqual(valueA, valueB) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function deepEqual(valueA: unknown, valueB: unknown): boolean {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import deepEqual from \"./deep-equal\";\n\ndescribe(\"deepEqual\", () => {\n  test(\"primitive values\", () => {\n    expect(deepEqual(0, 0)).toEqual(true);\n    expect(deepEqual(\"foo\", \"foo\")).toEqual(true);\n    expect(deepEqual(true, 1)).toEqual(false);\n    expect(deepEqual(true, true)).toEqual(true);\n    expect(deepEqual(false, false)).toEqual(true);\n    expect(deepEqual(null, null)).toEqual(true);\n  });\n\n  describe(\"arrays\", () => {\n    test(\"empty\", () => {\n      expect(deepEqual([], [])).toEqual(true);\n      expect(deepEqual({}, [])).toEqual(false);\n    });\n\n    test(\"number and strings\", () => {\n      expect(deepEqual([1], [1])).toEqual(true);\n      expect(deepEqual([\"1\"], [\"1\"])).toEqual(true);\n      expect(deepEqual([1], [\"1\"])).toEqual(false);\n      expect(deepEqual([1, 2], [1, 2])).toEqual(true);\n      expect(deepEqual([1, 2, 3], [1, 2, 3])).toEqual(true);\n      expect(deepEqual([1, 2, 3], [1, 3, 2])).toEqual(false);\n    });\n\n    test(\"boolean\", () => {\n      expect(deepEqual([true], [true])).toEqual(true);\n      expect(deepEqual([true], [1])).toEqual(false);\n      expect(deepEqual([false], [false])).toEqual(true);\n      expect(deepEqual([true], [false])).toEqual(false);\n      expect(deepEqual([0], [false])).toEqual(false);\n    });\n\n    test(\"null-ish\", () => {\n      expect(deepEqual([null], [null])).toEqual(true);\n    });\n\n    test(\"objects\", () => {\n      expect(deepEqual([{ foo: 1 }], [{ foo: 1 }])).toEqual(true);\n      expect(deepEqual([{ foo: 1 }], [{ foo: 2 }])).toEqual(false);\n    });\n  });\n\n  describe(\"objects\", () => {\n    test(\"empty\", () => {\n      expect(deepEqual({}, {})).toEqual(true);\n    });\n\n    test(\"basic\", () => {\n      expect(deepEqual({}, {})).toEqual(true);\n      expect(deepEqual({ foo: \"bar\" }, { foo: \"bar\" })).toEqual(true);\n      expect(deepEqual({ foo: \"bar\", id: 1 }, { foo: \"bar\", id: 1 })).toEqual(\n        true,\n      );\n      expect(deepEqual({ foo: \"bar\", id: 1 }, { foo: \"bar\", id: \"1\" })).toEqual(\n        false,\n      );\n    });\n\n    test(\"different keys\", () => {\n      expect(deepEqual({ foo: \"bar\" }, { fob: \"bar\" })).toEqual(false);\n    });\n\n    test(\"different values\", () => {\n      expect(deepEqual({ foo: \"bar\" }, { foo: \"baz\" })).toEqual(false);\n    });\n\n    test(\"same keys but different types\", () => {\n      expect(deepEqual({ 0: \"foo\" }, [\"foo\"])).toEqual(false);\n    });\n\n    test(\"array\", () => {\n      expect(\n        deepEqual(\n          { foo: \"bar\", item: [1, 2, { baz: \"baz\" }] },\n          { foo: \"bar\", item: [1, 2, { baz: \"baz\" }] },\n        ),\n      ).toEqual(true);\n    });\n\n    test(\"subset objects\", () => {\n      expect(\n        deepEqual(\n          { foo: \"bar\", item: [1, 2, { baz: \"baz\" }] },\n          { foo: \"bar\", item: [1, 2, { baz: \"baz\" }], id: 1 },\n        ),\n      ).toEqual(false);\n    });\n\n    test(\"null-ish\", () => {\n      expect(\n        deepEqual({ foo: null, baz: \"baz\" }, { bar: \"bar\", baz: \"baz\" }),\n      ).toEqual(false);\n      expect(\n        deepEqual({ foo: null, bar: \"baz\" }, { foo: null, bar: \"baz\" }),\n      ).toEqual(true);\n    });\n  });\n});\n";

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
