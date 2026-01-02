// JS Starter Code
const jsStarterCode = "/**\n * @param {Array<string>} items\n * @param {{sorted?: boolean, length?: number, unique?: boolean}} [options]\n * @return {string}\n */\nexport default function listFormat(items, options) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function listFormat(\n  items: Array<string>,\n  options?: { sorted?: boolean; length?: number; unique?: boolean },\n): string {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import listFormat from \"./list-format\";\n\ndescribe(\"listFormat\", () => {\n  test(\"empty\", () => {\n    expect(listFormat([])).toEqual(\"\");\n  });\n\n  test(\"one item\", () => {\n    expect(listFormat([\"Bob\"])).toEqual(\"Bob\");\n    expect(listFormat([\"Bob\"], { length: 2 })).toEqual(\"Bob\");\n  });\n\n  test(\"two items\", () => {\n    expect(listFormat([\"Bob\", \"Alice\"])).toEqual(\"Bob and Alice\");\n  });\n\n  test(\"many items\", () => {\n    expect(listFormat([\"Bob\", \"Ben\", \"Tim\", \"Jane\", \"John\"])).toEqual(\n      \"Bob, Ben, Tim, Jane and John\",\n    );\n  });\n\n  test(\"duplicate items\", () => {\n    expect(listFormat([\"Bob\", \"Ben\", \"Bob\", \"Ben\", \"John\"])).toEqual(\n      \"Bob, Ben, Bob, Ben and John\",\n    );\n    expect(\n      listFormat([\"Bob\", \"Ben\", \"Bob\", \"Ben\", \"John\"], { sorted: true }),\n    ).toEqual(\"Ben, Ben, Bob, Bob and John\");\n  });\n\n  test(\"length specified\", () => {\n    expect(\n      listFormat([\"Bob\", \"Ben\", \"Tim\", \"Jane\", \"John\"], { length: 3 }),\n    ).toEqual(\"Bob, Ben, Tim and 2 others\");\n    expect(\n      listFormat([\"Bob\", \"Ben\", \"Tim\", \"Jane\", \"John\"], { length: 4 }),\n    ).toEqual(\"Bob, Ben, Tim, Jane and 1 other\");\n    expect(\n      listFormat([\"Bob\", \"Ben\", \"Tim\", \"Jane\", \"John\"], { length: 100 }),\n    ).toEqual(\"Bob, Ben, Tim, Jane and John\");\n    expect(\n      listFormat([\"Bob\", \"Ben\", \"Tim\", \"Jane\", \"John\"], { length: 0 }),\n    ).toEqual(\"Bob, Ben, Tim, Jane and John\");\n    expect(\n      listFormat([\"Bob\", \"Ben\", \"Tim\", \"Jane\", \"John\"], { length: -1 }),\n    ).toEqual(\"Bob, Ben, Tim, Jane and John\");\n  });\n\n  test(\"sorted items\", () => {\n    expect(\n      listFormat([\"Bob\", \"Ben\", \"Tim\", \"Jane\", \"John\"], {\n        length: 3,\n        sorted: true,\n      }),\n    ).toEqual(\"Ben, Bob, Jane and 2 others\");\n    expect(\n      listFormat([\"Bob\", \"Ben\", \"Bob\", \"Ben\", \"John\"], {\n        length: 3,\n        sorted: true,\n      }),\n    ).toEqual(\"Ben, Ben, Bob and 2 others\");\n  });\n\n  test(\"unique items\", () => {\n    expect(\n      listFormat([\"Bob\", \"Ben\", \"Tim\", \"Jane\", \"John\", \"Bob\"], {\n        length: 3,\n        unique: true,\n      }),\n    ).toEqual(\"Bob, Ben, Tim and 2 others\");\n  });\n\n  test(\"missing items\", () => {\n    expect(listFormat([\"Bob\", \"Ben\", \"\", \"\", \"John\"])).toEqual(\n      \"Bob, Ben and John\",\n    );\n    expect(listFormat([\"Bob\", \"\"])).toEqual(\"Bob\");\n    expect(listFormat([\"\", \"\"])).toEqual(\"\");\n  });\n\n  test(\"all the options\", () => {\n    expect(\n      listFormat([\"Bob\", \"Ben\", \"Tim\", \"Jane\", \"John\"], {\n        length: 3,\n        unique: true,\n        sorted: true,\n      }),\n    ).toEqual(\"Ben, Bob, Jane and 2 others\");\n  });\n});\n";

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
