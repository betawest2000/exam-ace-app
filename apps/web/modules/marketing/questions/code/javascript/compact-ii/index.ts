// JS Starter Code
const jsStarterCode = "/**\n * @param {Array|Object} value\n * @return {Array|Object}\n */\nexport default function compact(value) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function compact<T extends Array<any> | Object>(value: T): T {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import compact from \"./compact-ii\";\n\ndescribe(\"compact\", () => {\n  describe(\"arrays\", () => {\n    test(\"empty array\", () => {\n      expect(compact([])).toEqual([]);\n    });\n\n    test(\"single-element array\", () => {\n      expect(compact([1])).toEqual([1]);\n      expect(compact([null])).toEqual([]);\n    });\n\n    test(\"two-element array\", () => {\n      expect(compact([1, 2])).toEqual([1, 2]);\n      expect(compact([null, 1])).toEqual([1]);\n      expect(compact([1, null])).toEqual([1]);\n      expect(compact([false, null])).toEqual([]);\n    });\n\n    test(\"remove all falsey values from the input array\", () => {\n      expect(compact([0, 1, false, 2, \"\", 3])).toEqual([1, 2, 3]);\n    });\n\n    test(\"only falsey values\", () => {\n      expect(compact([null, undefined, NaN, 0, false, \"\", \"\"])).toEqual([]);\n    });\n\n    test(\"no falsey values\", () => {\n      expect(compact([\"hello\", true, 123, [], {}])).toEqual([\n        \"hello\",\n        true,\n        123,\n        [],\n        {},\n      ]);\n    });\n\n    test(\"nested arrays\", () => {\n      expect(compact([1, [null]])).toEqual([1, []]);\n      expect(compact([1, [2, [3]]])).toEqual([1, [2, [3]]]);\n    });\n\n    test(\"nested objects\", () => {\n      expect(compact([1, { foo: \"bar\" }])).toEqual([1, { foo: \"bar\" }]);\n      expect(compact([1, { foo: null }])).toEqual([1, {}]);\n    });\n\n    test(\"sparse arrays\", () => {\n      expect(compact([1, , 2, , 3])).toEqual([1, 2, 3]);\n      expect(compact([1, , null, 2, , 3])).toEqual([1, 2, 3]);\n    });\n\n    test(\"should not modify the original input array\", () => {\n      const input = [0, 1, false, 2, \"\", 3];\n      compact(input);\n      expect(input).toEqual([0, 1, false, 2, \"\", 3]);\n    });\n  });\n\n  describe(\"objects\", () => {\n    test(\"empty object\", () => {\n      expect(compact({})).toEqual({});\n    });\n\n    test(\"single-key object\", () => {\n      expect(compact({ foo: true })).toEqual({ foo: true });\n      expect(compact({ foo: false })).toEqual({});\n      expect(compact({ foo: null })).toEqual({});\n      expect(compact({ foo: \"\" })).toEqual({});\n      expect(compact({ foo: 0 })).toEqual({});\n    });\n\n    test(\"multiple-key object\", () => {\n      expect(compact({ foo: true, bar: 2 })).toEqual({ foo: true, bar: 2 });\n      expect(compact({ foo: false, bar: 2 })).toEqual({ bar: 2 });\n    });\n\n    test(\"nested arrays\", () => {\n      expect(compact({ foo: true, bar: [\"foo\", 1, 2, \"bar\"] })).toEqual({\n        foo: true,\n        bar: [\"foo\", 1, 2, \"bar\"],\n      });\n      expect(compact({ foo: true, bar: [null, 1, 2, false] })).toEqual({\n        foo: true,\n        bar: [1, 2],\n      });\n    });\n\n    test(\"nested objects\", () => {\n      expect(compact({ foo: true, bar: { baz: 1, qux: 2 } })).toEqual({\n        foo: true,\n        bar: {\n          baz: 1,\n          qux: 2,\n        },\n      });\n      expect(compact({ foo: null, bar: { baz: null, qux: 2 } })).toEqual({\n        bar: {\n          qux: 2,\n        },\n      });\n    });\n\n    test(\"should not modify the original input object\", () => {\n      const input = { foo: false, bar: 2 };\n      compact(input);\n      expect(input).toEqual({ foo: false, bar: 2 });\n    });\n  });\n});\n";

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
