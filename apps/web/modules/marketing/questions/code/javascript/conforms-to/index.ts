// JS Starter Code
const jsStarterCode = "/**\n * @param {Object} object The object to inspect.\n * @param {Object} source The object of property predicates to conform to.\n * @returns {boolean} Returns true if object conforms, else false.\n */\nexport default function conformsTo(object, source) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function conformsTo<T>(\n  object: Record<string, T>,\n  source: Record<string, (value: T) => boolean>,\n): boolean {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import conformsTo from \"./conforms-to\";\n\ndescribe(\"conformsTo\", () => {\n  test(\"basic functionality\", () => {\n    const source = { a: (value: number) => value > 0 };\n    expect(conformsTo({ a: 1 }, source)).toEqual(true);\n    expect(conformsTo({ a: 0 }, source)).toEqual(false);\n  });\n\n  test(\"multiple properties\", () => {\n    const source = {\n      a: (value: number) => value > 0,\n      b: (value: number) => value < 3,\n    };\n    expect(conformsTo({ a: 1, b: 2 }, source)).toEqual(true);\n    expect(conformsTo({ a: 0, b: 2 }, source)).toEqual(false);\n  });\n\n  test(\"non-matching property names\", () => {\n    const source = { c: (value: any) => value > 0 };\n    expect(conformsTo({ a: 1 }, source)).toEqual(false);\n    expect(conformsTo({ b: -1 }, source)).toEqual(false);\n  });\n\n  test(\"source with no predicate functions\", () => {\n    expect(conformsTo({ a: 1 }, {})).toEqual(true);\n    expect(conformsTo({ a: 0 }, {})).toEqual(true);\n  });\n\n  test(\"function in object\", () => {\n    const object = { a: () => {} };\n    const source = { a: (value: any) => typeof value === \"function\" };\n    expect(conformsTo(object, source)).toEqual(true);\n    expect(conformsTo({ a: 1 }, source)).toEqual(false);\n  });\n\n  test(\"undefined and null values\", () => {\n    const object = { a: undefined, b: null };\n    const source = {\n      a: (value: any) => value === undefined,\n      b: (value: any) => value === null,\n    };\n    expect(conformsTo(object, source)).toEqual(true);\n    expect(conformsTo({ a: null, b: undefined }, source)).toEqual(false);\n  });\n\n  test(\"complex predicates\", () => {\n    const object = { a: 10, b: \"hello\" };\n    const source = {\n      a: (value: any) => value % 2 === 0,\n      b: (value: any) => value.startsWith(\"h\"),\n    };\n    expect(conformsTo(object, source)).toEqual(true);\n    expect(conformsTo({ a: 11, b: \"goodbye\" }, source)).toEqual(false);\n  });\n\n  test(\"ignores inherited source predicates\", () => {\n    const sourceProto = {\n      inheritedPredicate: (value: number) => value > 2,\n    };\n\n    const source = Object.create(sourceProto);\n\n    const object = {\n      someProperty: 3,\n    };\n\n    expect(conformsTo(object, source)).toEqual(true);\n  });\n});\n";

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
