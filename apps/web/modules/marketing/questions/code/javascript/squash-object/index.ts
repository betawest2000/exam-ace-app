// JS Starter Code
const jsStarterCode = "/**\n * @param {Object} obj\n * @return {Object}\n */\nexport default function squashObject(obj) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function squashObject(obj: Object): Object {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import squashObject from \"./squash-object\";\n\ndescribe(\"squashObject\", () => {\n  test(\"empty\", () => {\n    expect(squashObject({})).toEqual({});\n  });\n\n  test(\"no nesting\", () => {\n    expect(squashObject({ a: \"1\", b: \"b\" })).toEqual({ a: \"1\", b: \"b\" });\n  });\n\n  test(\"one level of nesting\", () => {\n    expect(\n      squashObject({\n        a: 5,\n        c: {\n          f: 9,\n        },\n      }),\n    ).toEqual({ a: 5, \"c.f\": 9 });\n  });\n\n  test(\"multiple levels of nesting\", () => {\n    expect(\n      squashObject({\n        a: 5,\n        b: 6,\n        c: {\n          f: 9,\n          g: {\n            m: 17,\n            n: 3,\n          },\n        },\n      }),\n    ).toEqual({ a: 5, b: 6, \"c.f\": 9, \"c.g.m\": 17, \"c.g.n\": 3 });\n  });\n\n  test(\"arrays\", () => {\n    expect(\n      squashObject({\n        a: [\"hi\", \"bye\"],\n      }),\n    ).toEqual({\n      \"a.0\": \"hi\",\n      \"a.1\": \"bye\",\n    });\n  });\n\n  test(\"null-ish values\", () => {\n    expect(\n      squashObject({\n        a: {\n          a: 0,\n          b: null,\n          c: false,\n          d: undefined,\n        },\n      }),\n    ).toEqual({\n      \"a.a\": 0,\n      \"a.b\": null,\n      \"a.c\": false,\n      \"a.d\": undefined,\n    });\n  });\n\n  describe(\"empty keys\", () => {\n    test(\"single layer of empty key\", () => {\n      expect(\n        squashObject({\n          foo: {\n            \"\": 0,\n            a: 1,\n          },\n        }),\n      ).toEqual({\n        foo: 0,\n        \"foo.a\": 1,\n      });\n    });\n\n    test(\"nested empty keys\", () => {\n      expect(\n        squashObject({\n          foo: {\n            \"\": {\n              \"\": 1,\n              bar: 2,\n            },\n            a: 1,\n          },\n        }),\n      ).toEqual({\n        foo: 1,\n        \"foo.bar\": 2,\n        \"foo.a\": 1,\n      });\n    });\n  });\n\n  test(\"everything\", () => {\n    expect(\n      squashObject({\n        a: \"hi\",\n        b: {\n          a: null,\n          b: [\"foo\", \"\", null, \"bar\"],\n          d: \"hello\",\n          e: {\n            a: \"yo\",\n            b: undefined,\n            c: \"sup\",\n            d: 0,\n            f: [\n              { foo: 123, bar: 123 },\n              { foo: 465, bar: 456 },\n            ],\n          },\n        },\n        c: \"world\",\n      }),\n    ).toEqual({\n      a: \"hi\",\n      \"b.a\": null,\n      \"b.b.0\": \"foo\",\n      \"b.b.1\": \"\",\n      \"b.b.2\": null,\n      \"b.b.3\": \"bar\",\n      \"b.d\": \"hello\",\n      \"b.e.a\": \"yo\",\n      \"b.e.b\": undefined,\n      \"b.e.c\": \"sup\",\n      \"b.e.d\": 0,\n      \"b.e.f.0.foo\": 123,\n      \"b.e.f.0.bar\": 123,\n      \"b.e.f.1.foo\": 465,\n      \"b.e.f.1.bar\": 456,\n      c: \"world\",\n    });\n  });\n});\n";

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
