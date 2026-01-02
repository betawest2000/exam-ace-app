// JS Starter Code
const jsStarterCode = "/**\n * @template T, U\n * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn\n * @param {U} [initialValue]\n * @return {Array<U>}\n */\nArray.prototype.myReduce = function (callbackFn, initialValue) {\n  throw \"Not implemented!\";\n};\n";

// TS Starter Code
const tsStarterCode = "interface Array<T> {\n  myReduce<U>(\n    callbackFn: (\n      previousValue: U,\n      currentValue: T,\n      currentIndex: number,\n      array: T[],\n    ) => U,\n    initialValue?: U,\n  ): U;\n}\n\nArray.prototype.myReduce = function (callbackFn, initialValue) {\n  throw \"Not implemented!\";\n};\n";

// JS Test Cases
const jsTestCode = "import \"./array-reduce\";\n\nconst add = (prev: any, curr: any) => prev + curr;\nconst multiplyByIndex = (prev: number, curr: number, index: number) =>\n  prev + curr * index;\nconst subtract = (prev: number, curr: number) => prev - curr;\nconst sumOfSquares = (prev: any, curr: any, index: number, array: Array<any>) =>\n  prev + curr * array[index];\nconst combineObj = (prev: Object, curr: Object) => ({ ...prev, ...curr });\nconst combineArr = (prev: Array<any>, curr: any) => [...prev, curr];\n\ndescribe(\"Array.prototype.myReduce\", () => {\n  test(\"empty array equals initial value\", () => {\n    expect([].myReduce(add, 0)).toEqual(0);\n    expect([].myReduce(subtract, 0)).toEqual(0);\n  });\n\n  test(\"one value\", () => {\n    expect([1].myReduce(add, 0)).toEqual(1);\n    expect([\"a\"].myReduce(add, \"\")).toEqual(\"a\");\n  });\n\n  test(\"two values\", () => {\n    expect([-4, 10].myReduce(add, 0)).toEqual(6);\n    expect([\"b\", \"c\", \"d\"].myReduce(add, \"\")).toEqual(\"bcd\");\n  });\n\n  test(\"multiple values\", () => {\n    expect([1, 2, 3].myReduce(add, 0)).toEqual(6);\n    expect([\"a\", \"b\", \"c\", \"d\"].myReduce(add, \"\")).toEqual(\"abcd\");\n  });\n\n  test(\"object values\", () => {\n    expect([{ foo: 1 }, { bar: 2 }].myReduce(combineObj)).toEqual({\n      foo: 1,\n      bar: 2,\n    });\n    expect([{ foo: 1 }, { bar: 2 }].myReduce(combineObj, {})).toEqual({\n      foo: 1,\n      bar: 2,\n    });\n  });\n\n  test(\"array values\", () => {\n    expect([1, 2, 3].myReduce(combineArr, [])).toEqual([1, 2, 3]);\n  });\n\n  test(\"reducer uses index argument when provided\", () => {\n    expect([1, 2, 3].myReduce(multiplyByIndex, 0)).toEqual(8);\n    expect([-1, -3, 4].myReduce(multiplyByIndex, 0)).toEqual(5);\n  });\n\n  test(\"reducer uses array argument when provided\", () => {\n    expect([1, 2, 3, 4].myReduce(sumOfSquares, 0)).toEqual(30);\n    expect([-1, -3, 4].myReduce(sumOfSquares, 0)).toEqual(26);\n  });\n\n  test(\"no initial value provided and array is empty\", () => {\n    expect(() => {\n      [].myReduce(add);\n    }).toThrow();\n  });\n\n  test(\"no initial value provided and array is non-empty\", () => {\n    expect([1, 2, 3].myReduce(add)).toEqual(6);\n    expect([-1, -3, 4].myReduce(sumOfSquares, 0)).toEqual(26);\n  });\n\n  test(\"sparse arrays\", () => {\n    // eslint-disable-next-line no-sparse-arrays\n    expect([1, 2, , 3].myReduce(add)).toEqual(6);\n    // eslint-disable-next-line no-sparse-arrays\n    expect([-1, -3, 4, , ,].myReduce(sumOfSquares, 0)).toEqual(26);\n  });\n});\n";

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
