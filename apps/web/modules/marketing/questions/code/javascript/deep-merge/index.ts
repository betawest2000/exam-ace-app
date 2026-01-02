// JS Starter Code
const jsStarterCode = "/**\n * @param {Object|Array} valA\n * @param {Object|Array} valB\n * @returns Object|Array\n */\nexport default function deepMerge(valA, valB) {\n  throw \"Not implemented\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function deepMerge(valA: unknown, valB: unknown): unknown {\n  throw \"Not implemented\";\n}\n";

// JS Test Cases
const jsTestCode = "import deepMerge from \"./deep-merge\";\n\ndescribe(\"deepMerge\", () => {\n  test(\"empty\", () => {\n    expect(deepMerge({}, {})).toEqual({});\n  });\n\n  test(\"single key\", () => {\n    expect(deepMerge({ foo: 2 }, {})).toEqual({ foo: 2 });\n    expect(deepMerge({}, { foo: 2 })).toEqual({ foo: 2 });\n  });\n\n  test(\"multiple keys\", () => {\n    expect(deepMerge({ foo: 2, bar: 3 }, { qux: 4 })).toEqual({\n      foo: 2,\n      bar: 3,\n      qux: 4,\n    });\n    expect(deepMerge({ foo: 2 }, { bar: 3, qux: 4 })).toEqual({\n      foo: 2,\n      bar: 3,\n      qux: 4,\n    });\n  });\n\n  test(\"overlapping keys\", () => {\n    expect(deepMerge({ foo: 2, bar: 3 }, { bar: 4 })).toEqual({\n      foo: 2,\n      bar: 4,\n    });\n    expect(deepMerge({ bar: 3 }, { foo: 2, bar: 4 })).toEqual({\n      foo: 2,\n      bar: 4,\n    });\n  });\n\n  test(\"null values\", () => {\n    expect(deepMerge({ foo: {} }, { foo: null })).toEqual({ foo: null });\n    expect(deepMerge({ foo: null }, { foo: {} })).toEqual({ foo: {} });\n    expect(deepMerge({ foo: null }, { bar: {} })).toEqual({\n      foo: null,\n      bar: {},\n    });\n  });\n\n  test(\"nested objects\", () => {\n    expect(\n      deepMerge(\n        { foo: 3, bar: { baz: 5, qux: 6, boo: 5 } },\n        { foo: 30, blah: 0, bar: { baz: 10, qux: 20 } },\n      ),\n    ).toEqual({\n      foo: 30,\n      blah: 0,\n      bar: {\n        baz: 10,\n        qux: 20,\n        boo: 5,\n      },\n    });\n    expect(\n      deepMerge(\n        { foo: 3, bar: { baz: 5, qux: 6 } },\n        { foo: 30, blah: 0, bar: { baz: 10, qux: 20, boo: 5 } },\n      ),\n    ).toEqual({\n      foo: 30,\n      blah: 0,\n      bar: {\n        baz: 10,\n        qux: 20,\n        boo: 5,\n      },\n    });\n  });\n\n  describe(\"arrays\", () => {\n    test(\"array values\", () => {\n      expect(deepMerge([], [3, 4])).toEqual([3, 4]);\n      expect(deepMerge([1, 2], [])).toEqual([1, 2]);\n      expect(deepMerge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);\n    });\n\n    test(\"array within objects\", () => {\n      expect(deepMerge({ foo: 3, bar: null }, { bar: [1, 2, 3] })).toEqual({\n        foo: 3,\n        bar: [1, 2, 3],\n      });\n      expect(deepMerge({ foo: 3, bar: { 1: 2 } }, { bar: [1, 2, 3] })).toEqual({\n        foo: 3,\n        bar: [1, 2, 3],\n      });\n      expect(deepMerge({ foo: 3, qux: null }, { bar: [1, 2, 3] })).toEqual({\n        foo: 3,\n        bar: [1, 2, 3],\n        qux: null,\n      });\n    });\n\n    test(\"merge arrays\", () => {\n      expect(deepMerge({ foo: 3, bar: [7, 5] }, { bar: [1, 2, 3] })).toEqual({\n        foo: 3,\n        bar: [7, 5, 1, 2, 3],\n      });\n      expect(\n        deepMerge({ foo: 3, bar: [7, 5] }, { bar: [{}, null, []] }),\n      ).toEqual({\n        foo: 3,\n        bar: [7, 5, {}, null, []],\n      });\n    });\n\n    test(\"within nested objects\", () => {\n      expect(\n        deepMerge(\n          { foo: 3, bar: { baz: [5, 4], qux: 6, boo: 5 } },\n          { foo: 30, blah: 0, bar: { baz: [10], qux: 20 } },\n        ),\n      ).toEqual({\n        foo: 30,\n        blah: 0,\n        bar: {\n          baz: [5, 4, 10],\n          qux: 20,\n          boo: 5,\n        },\n      });\n      expect(\n        deepMerge(\n          { foo: 3, bar: { baz: 5, qux: [6, 7] } },\n          { foo: 30, blah: 0, bar: { baz: 10, qux: 20, boo: 5 } },\n        ),\n      ).toEqual({\n        foo: 30,\n        blah: 0,\n        bar: {\n          baz: 10,\n          qux: 20,\n          boo: 5,\n        },\n      });\n      expect(\n        deepMerge(\n          { foo: 3, bar: { baz: 5, qux: 20 } },\n          { foo: 30, blah: 0, bar: { baz: 10, qux: [6, 7], boo: 5 } },\n        ),\n      ).toEqual({\n        foo: 30,\n        blah: 0,\n        bar: {\n          baz: 10,\n          qux: [6, 7],\n          boo: 5,\n        },\n      });\n    });\n  });\n\n  describe(\"does not mutate the input\", () => {\n    test(\"primitives\", () => {\n      const objA = { a: 3, foo: 2, qux: 6 };\n      const objB = { bar: 6, b: 4, qux: 8 };\n      expect(deepMerge(objA, objB)).toEqual({\n        a: 3,\n        foo: 2,\n        bar: 6,\n        b: 4,\n        qux: 8,\n      });\n      expect(objA).toEqual({ a: 3, foo: 2, qux: 6 });\n      expect(objB).toEqual({ bar: 6, b: 4, qux: 8 });\n    });\n\n    test(\"arrays\", () => {\n      const objA = { a: 3, c: [1, 2] };\n      const objB = { b: 4, c: [3, 4] };\n      expect(deepMerge(objA, objB)).toEqual({\n        a: 3,\n        b: 4,\n        c: [1, 2, 3, 4],\n      });\n      expect(objA).toEqual({ a: 3, c: [1, 2] });\n      expect(objB).toEqual({ b: 4, c: [3, 4] });\n    });\n  });\n});\n";

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
