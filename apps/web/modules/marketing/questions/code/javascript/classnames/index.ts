// JS Starter Code
const jsStarterCode = "/**\n * @param {...(any|Object|Array<any|Object|Array>)} args\n * @return {string}\n */\nexport default function classNames(...args) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export type ClassValue =\n  | ClassArray\n  | ClassDictionary\n  | string\n  | number\n  | null\n  | boolean\n  | undefined;\nexport type ClassDictionary = Record<string, any>;\nexport type ClassArray = Array<ClassValue>;\n\nexport default function classNames(...args: Array<ClassValue>): string {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import classNames from \"./classnames\";\n\ndescribe(\"classNames\", () => {\n  test(\"empty values\", () => {\n    expect(classNames([])).toEqual(\"\");\n  });\n\n  test(\"single value\", () => {\n    expect(classNames(\"foo\")).toEqual(\"foo\");\n  });\n\n  test(\"two values\", () => {\n    expect(classNames(\"foo\", \"bar\")).toEqual(\"foo bar\");\n  });\n\n  test(\"array values\", () => {\n    expect(classNames([\"foo\", \"bar\", \"baz\"])).toEqual(\"foo bar baz\");\n  });\n\n  test(\"object values\", () => {\n    expect(classNames({ \"foo-bar\": true })).toEqual(\"foo-bar\");\n    expect(classNames({ \"foo-bar\": false })).toEqual(\"\");\n    expect(classNames({ foo: true }, { bar: true })).toEqual(\"foo bar\");\n    expect(classNames({ foo: true, bar: false, qux: true })).toEqual(\"foo qux\");\n  });\n\n  test(\"mixed values\", () => {\n    expect(\n      classNames(\n        \"foo\",\n        {\n          bar: true,\n          duck: false,\n        },\n        \"baz\",\n        { quux: true },\n      ),\n    ).toEqual(\"foo bar baz quux\");\n    expect(\n      classNames(\"boo\", true && \"loo\", false && \"booz\", {\n        foo: true,\n        bar: false,\n        baz: 1,\n      }),\n    ).toEqual(\"boo loo foo baz\");\n  });\n\n  test(\"ignores falsey values\", () => {\n    expect(\n      classNames(null, false, \"bar\", undefined, 0, 1, { baz: null }, \"\"),\n    ).toEqual(\"bar 1\");\n  });\n\n  test(\"recursively flattens arrays\", () => {\n    expect(classNames(\"a\", [\"b\", { c: true, d: false }])).toEqual(\"a b c\");\n    expect(classNames(\"a\", [\"b\", [\"c\", [\"d\"]]])).toEqual(\"a b c d\");\n  });\n});\n";

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
