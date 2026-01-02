// JS Starter Code
const jsStarterCode = "/**\n * @param {Array<any>} iterable\n * @param {Function} callbackFn\n *\n * @return {Promise}\n */\nexport default function mapAsync(iterable, callbackFn) {\n  throw \"Not implemented\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function mapAsync<T, U>(\n  iterable: Array<T>,\n  callbackFn: (value: T) => Promise<U>,\n): Promise<Array<U>> {\n  throw \"Not implemented\";\n}\n";

// JS Test Cases
const jsTestCode = "import mapAsync from \"./map-async\";\n\nconst asyncIdentity = (x: number) => Promise.resolve(x);\nconst asyncDouble = (x: number) =>\n  new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(x * 2);\n    }, 10);\n  });\nconst asyncSquare = (x: number) =>\n  new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(x * x);\n    }, 10);\n  });\nconst asyncRejectOdd = (x: number) =>\n  new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (x % 2 === 1) {\n        reject(x * 3);\n      }\n\n      resolve(x * 2);\n    }, 10);\n  });\n\ndescribe(\"mapAsync\", () => {\n  test(\"returns promise\", () => {\n    const p = mapAsync([], asyncIdentity);\n    expect(p).toBeInstanceOf(Promise);\n  });\n\n  test(\"empty input array\", async () => {\n    expect.assertions(1);\n    const res = await mapAsync([], asyncIdentity);\n    expect(res).toEqual([]);\n  });\n\n  test(\"single item\", async () => {\n    expect.assertions(1);\n    const res = await mapAsync([3], asyncDouble);\n    expect(res).toEqual([6]);\n  });\n\n  describe(\"multiple items\", () => {\n    test(\"two items\", async () => {\n      expect.assertions(1);\n      const res = await mapAsync([1, 2], asyncDouble);\n      expect(res).toEqual([2, 4]);\n    });\n\n    test(\"three items\", async () => {\n      expect.assertions(1);\n      const res = await mapAsync([2, 3, 4], asyncSquare);\n      expect(res).toEqual([4, 9, 16]);\n    });\n\n    test(\"some rejected\", async () => {\n      expect.assertions(1);\n      await expect(mapAsync([2, 3], asyncRejectOdd)).rejects.toBe(9);\n    });\n  });\n});\n";

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
