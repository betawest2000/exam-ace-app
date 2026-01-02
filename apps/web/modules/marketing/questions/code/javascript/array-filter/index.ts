// JS Starter Code
const jsStarterCode = "/**\n * @template T\n * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn\n * @param {any} [thisArg]\n * @return {Array<T>}\n */\nArray.prototype.myFilter = function (callbackFn, thisArg) {\n  throw \"Not implemented!\";\n};\n";

// TS Starter Code
const tsStarterCode = "interface Array<T> {\n  myFilter(\n    callbackFn: (value: T, index: number, array: Array<T>) => boolean,\n    thisArg?: any,\n  ): Array<T>;\n}\n\nArray.prototype.myFilter = function (callbackFn, thisArg) {\n  throw \"Not implemented!\";\n};\n";

// JS Test Cases
const jsTestCode = "import \"./array-filter\";\n\nconst isEven = (element: any, index: number) => element % 2 === 0;\nconst isOdd = (element: any, index: number) => element % 2 === 1;\nconst isEvenIndex = (_: any, index: number) => index % 2 === 0;\nconst isOddIndex = (_: any, index: number) => index % 2 === 1;\nconst isSquareEven = (_: any, index: number, array: Array<any>) =>\n  (array[index] * array[index]) % 2 === 0;\nconst isSquareOdd = (_: any, index: number, array: Array<any>) =>\n  (array[index] * array[index]) % 2 === 1;\nconst isThisProductEven = function (this: any, element: number) {\n  return (element * this) % 2 === 0;\n};\nconst isThisProductEvenArrowFn = (element: number) =>\n  (element * this!) % 2 === 0;\n\ndescribe(\"Array.prototype.myFilter\", () => {\n  test(\"empty array\", () => {\n    expect([].myFilter(isEven)).toStrictEqual([]);\n    expect([].myFilter(isOdd)).toStrictEqual([]);\n  });\n\n  test(\"one value\", () => {\n    expect([1].myFilter(isEven)).toStrictEqual([]);\n    expect([1].myFilter(isOdd)).toStrictEqual([1]);\n  });\n\n  test(\"two values\", () => {\n    expect([1, 10].myFilter(isEven)).toStrictEqual([10]);\n    expect([1, 10].myFilter(isOdd)).toStrictEqual([1]);\n  });\n\n  test(\"multiple values\", () => {\n    expect([1, 2, 3, 5, 7, 8, 9].myFilter(isEven)).toStrictEqual([2, 8]);\n    expect([1, 2, 3, 5, 7, 8, 9].myFilter(isOdd)).toStrictEqual([\n      1, 3, 5, 7, 9,\n    ]);\n  });\n\n  test(\"reducer uses index argument when provided\", () => {\n    expect([1, 2, 3].myFilter(isEvenIndex)).toStrictEqual([1, 3]);\n    expect([-1, -3, 4, 99].myFilter(isOddIndex)).toStrictEqual([-3, 99]);\n  });\n\n  test(\"reducer uses array argument when provided\", () => {\n    expect([1, 2, 3, 4].myFilter(isSquareEven)).toStrictEqual([2, 4]);\n    expect([-3, 4, 1, 5].myFilter(isSquareOdd)).toStrictEqual([-3, 1, 5]);\n  });\n\n  test(\"uses this argument\", () => {\n    expect([1, 2, 3, 4].myFilter(isThisProductEven)).toStrictEqual([]);\n    expect([1, 2, 3, 4].myFilter(isThisProductEven, 10)).toStrictEqual([\n      1, 2, 3, 4,\n    ]);\n    expect([1, 2, 3, 4].myFilter(isThisProductEven, 9)).toStrictEqual([2, 4]);\n    expect([1, 2, 3, 4].myFilter(isThisProductEvenArrowFn)).toStrictEqual([]);\n    expect([1, 2, 3, 4].myFilter(isThisProductEvenArrowFn, 10)).toStrictEqual(\n      [],\n    );\n    expect([1, 2, 3, 4].myFilter(isThisProductEvenArrowFn, 9)).toStrictEqual(\n      [],\n    );\n  });\n\n  test(\"sparse arrays\", () => {\n    expect([, , ,].myFilter(isEven)).toStrictEqual([]);\n    expect([1, 2, , 4].myFilter(isEven)).toStrictEqual([2, 4]);\n    expect([1, , 2, , 4, 7, 9].myFilter(isOdd)).toStrictEqual([1, 7, 9]);\n  });\n});\n";

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
