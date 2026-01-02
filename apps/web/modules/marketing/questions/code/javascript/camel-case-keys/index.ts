// JS Starter Code
const jsStarterCode = "/**\n * @param Object\n * @return Object\n */\nexport default function camelCaseKeys(object) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function camelCaseKeys(object: Object): Object {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import camelCaseKeys from \"./camel-case-keys\";\n\ndescribe(\"camelCaseKeys\", () => {\n  test(\"simple object\", () => {\n    expect(camelCaseKeys({ foo_bar: true })).toStrictEqual({\n      fooBar: true,\n    });\n  });\n\n  test(\"simple object with multiple keys\", () => {\n    expect(camelCaseKeys({ foo_bar: true, baz: \"1\", quz: \"2\" })).toStrictEqual({\n      baz: \"1\",\n      fooBar: true,\n      quz: \"2\",\n    });\n  });\n\n  test(\"nested object\", () => {\n    expect(\n      camelCaseKeys({ foo_bar: true, bar_baz: { baz_quz: \"1\", quz: \"2\" } }),\n    ).toStrictEqual({\n      barBaz: {\n        bazQuz: \"1\",\n        quz: \"2\",\n      },\n      fooBar: true,\n    });\n  });\n\n  test(\"arrays\", () => {\n    expect(camelCaseKeys([{ baz_qux: true }, { foo: true }])).toStrictEqual([\n      {\n        bazQux: true,\n      },\n      {\n        foo: true,\n      },\n    ]);\n  });\n\n  test(\"objects containing arrays\", () => {\n    expect(\n      camelCaseKeys({\n        foo_bar: true,\n        Boo_Bar: false,\n        bar_baz: [{ baz_qux: true }, { foo: true }],\n      }),\n    ).toStrictEqual({\n      barBaz: [\n        {\n          bazQux: true,\n        },\n        {\n          foo: true,\n        },\n      ],\n      booBar: false,\n      fooBar: true,\n    });\n  });\n});\n";

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
