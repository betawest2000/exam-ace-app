// JS Starter Code
const jsStarterCode = "/**\n * @param {Array} array The array to iterate over.\n * @param {Function} iteratee The iteratee invoked per element.\n * @returns {*} Returns the maximum value.\n */\nexport default function maxBy(array, iteratee) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function maxBy<T>(\n  array: Array<T>,\n  iteratee: (value: T) => any,\n): any {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import maxBy from \"./max-by\";\n\ndescribe(\"maxBy\", () => {\n  test(\"empty input array\", () => {\n    expect(maxBy([], (o: any) => o.n)).toEqual(undefined);\n  });\n\n  test(\"nested arrays\", () => {\n    expect(maxBy([{ n: 1 }, { n: 2 }], (o: any) => o.n)).toEqual({ n: 2 });\n    expect(\n      maxBy(\n        [{ data: { score: 10 } }, { data: { score: 20 } }],\n        (o: any) => o.data.score,\n      ),\n    ).toEqual({ data: { score: 20 } });\n  });\n\n  test(\"strings comparison\", () => {\n    expect(\n      maxBy([\"apple\", \"pear\", \"banana\"], (fruit: string) => fruit.length),\n    ).toEqual(\"banana\");\n  });\n\n  test(\"non-existent property\", () => {\n    expect(maxBy([{ n: 1 }, { n: 2 }], (o: any) => o.m)).toEqual(undefined);\n  });\n\n  test(\"mixed data types\", () => {\n    expect(maxBy([1, \"2\", 3], (item: any) => Number(item))).toEqual(3);\n  });\n\n  test(\"null or undefined property values\", () => {\n    expect(\n      maxBy([{ n: null }, { n: 10 }, { n: undefined }], (o: any) => o.n),\n    ).toEqual({ n: 10 });\n    expect(\n      maxBy([{ n: undefined }, { n: undefined }], (o: any) => o.n),\n    ).toEqual(undefined);\n  });\n\n  test(\"iterator function returns non-numeric values\", () => {\n    expect(\n      maxBy(\n        [{ name: \"Alice\" }, { name: \"Bob\" }, { name: \"Charlie\" }],\n        (o: any) => o.name,\n      ),\n    ).toEqual({ name: \"Charlie\" });\n    expect(\n      maxBy([{ flag: true }, { flag: false }], (o: any) => o.flag),\n    ).toEqual({\n      flag: true,\n    });\n  });\n\n  test(\"objects with nested arrays\", () => {\n    expect(\n      maxBy([{ values: [1, 2, 3] }, { values: [4, 5, 6] }], (o: any) =>\n        Math.max(...o.values),\n      ),\n    ).toEqual({ values: [4, 5, 6] });\n  });\n\n  test(\"date comparison\", () => {\n    const dates = [\n      new Date(2020, 1, 1),\n      new Date(2021, 1, 1),\n      new Date(2019, 1, 1),\n    ];\n    expect(maxBy(dates, (date: Date) => date)).toEqual(new Date(2021, 1, 1));\n  });\n\n  test(\"mixed object types\", () => {\n    expect(\n      maxBy(\n        [{ n: 5 }, { m: \"string\" }, { n: 10, m: \"string\" }],\n        (o: any) => o.n || 0,\n      ),\n    ).toEqual({ n: 10, m: \"string\" });\n  });\n\n  test(\"large arrays\", () => {\n    const largeArray = Array.from({ length: 10000 }, (_, i) => ({ n: i }));\n    expect(maxBy(largeArray, (o: any) => o.n)).toEqual({ n: 9999 });\n  });\n\n  test(\"iterator function with computation\", () => {\n    expect(\n      maxBy(\n        [{ values: [1, 2, 3] }, { values: [10, 20] }, { values: [5, 5, 5, 5] }],\n        (o: any) => o.values.reduce((sum: any, v: any) => sum + v, 0),\n      ),\n    ).toEqual({ values: [10, 20] });\n  });\n});\n";

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
