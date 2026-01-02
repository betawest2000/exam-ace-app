// JS Starter Code
const jsStarterCode = "/**\n * @param {Array} array The array to iterate over.\n * @param {Function} iteratee The iteratee invoked per element.\n * @returns {*} Returns the minimum value.\n */\nexport default function minBy(array, iteratee) {\n  let result, computed;\n\n  // Iterate through array to find the minimum `result`.\n  for (const value of array) {\n    const current = iteratee(value);\n    // Check whether `computed` is assigned any value yet then compare with `current`, else assign an initial value to `computed` where `current` is not `null`.\n    if (current != null && (computed === undefined || current < computed)) {\n      computed = current; // Store the calculated value of the current `result`.\n      result = value;\n    }\n  }\n\n  return result;\n}\n";

// TS Starter Code
const tsStarterCode = "/**\n * @param {Array} array The array to iterate over.\n * @param {Function} iteratee The iteratee invoked per element.\n * @returns {*} Returns the minimum value.\n */\nexport default function minBy(array, iteratee) {\n  let result, computed;\n\n  // Iterate through array to find the minimum `result`.\n  for (const value of array) {\n    const current = iteratee(value);\n    // Check whether `computed` is assigned any value yet then compare with `current`, else assign an initial value to `computed` where `current` is not `null`.\n    if (current != null && (computed === undefined || current < computed)) {\n      computed = current; // Store the calculated value of the current `result`.\n      result = value;\n    }\n  }\n\n  return result;\n}\n";

// JS Test Cases
const jsTestCode = "import minBy from \"./min-by\";\n\ndescribe(\"minBy\", () => {\n  test(\"empty input array\", () => {\n    expect(minBy([], () => {})).toEqual(undefined);\n  });\n\n  test(\"one element\", () => {\n    expect(minBy([{ n: 1 }], (o) => o.n)).toEqual({ n: 1 });\n  });\n\n  test(\"two elements\", () => {\n    expect(minBy([{ n: 1 }, { n: 2 }], (o) => o.n)).toEqual({ n: 1 });\n    expect(\n      minBy(\n        [{ data: { score: 20 } }, { data: { score: 10 } }],\n        (o) => o.data.score,\n      ),\n    ).toEqual({ data: { score: 10 } });\n  });\n\n  test(\"multiple elements\", () => {\n    expect(minBy([2, 3, 1, 4], (num) => num)).toEqual(1);\n    expect(minBy([{ n: 1 }, { n: 2 }, { n: 3 }], (o) => o.n)).toEqual({\n      n: 1,\n    });\n  });\n\n  test(\"strings comparison\", () => {\n    expect(\n      minBy([\"apricot\", \"pear\", \"apple\", \"banana\"], (fruit) => fruit),\n    ).toEqual(\"apple\");\n    expect(minBy([\"apple\", \"pear\", \"banana\"], (fruit) => fruit.length)).toEqual(\n      \"pear\",\n    );\n  });\n\n  describe(\"non-existent property\", () => {\n    test(\"no match\", () => {\n      expect(minBy([{ n: 1 }, { n: 2 }], (o: any) => o.m)).toEqual(undefined);\n    });\n\n    test(\"partial match\", () => {\n      expect(minBy([{ n: 1 }, { n: 2, m: 3 }, { m: 4 }], (o) => o.m)).toEqual({\n        n: 2,\n        m: 3,\n      });\n    });\n  });\n\n  test(\"first minimum occurrence\", () => {\n    expect(\n      minBy(\n        [{ n: 1, m: 3 }, { n: 0, m: 2 }, { n: 2 }, { n: 0 }],\n        (o: any) => o.m,\n      ),\n    ).toEqual({ n: 0, m: 2 });\n  });\n\n  test(\"mixed data types\", () => {\n    expect(minBy([1, \"2\", 3], (item) => Number(item))).toEqual(1);\n    expect(minBy([4, \"2\", 3, 2], (item) => Number(item))).toEqual(\"2\");\n    expect(minBy([\"1\", 2, 3, \"-1\"], (item) => Number(item))).toEqual(\"-1\");\n  });\n});\n";

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
