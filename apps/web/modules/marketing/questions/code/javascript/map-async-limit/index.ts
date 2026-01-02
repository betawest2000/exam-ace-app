// JS Starter Code
const jsStarterCode = "/**\n * @param {Array<any>} iterable\n * @param {Function} callbackFn\n * @param {number} size\n *\n * @return {Promise}\n */\nexport default function mapAsyncLimit(iterable, callbackFn, size) {\n  throw \"Not implemented\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function mapAsyncLimit<T, U>(\n  iterable: Array<T>,\n  callbackFn: (value: T) => Promise<U>,\n  size?: number,\n): Promise<Array<U>> {\n  throw \"Not implemented\";\n}\n";

// JS Test Cases
const jsTestCode = "import mapAsyncLimit from \"./map-async-limit\";\n\nconst asyncIdentity = (x: number) => Promise.resolve(x);\nconst asyncDouble = (x: number) =>\n  new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(x * 2);\n    }, 10);\n  });\nconst asyncSquare = (x: number) =>\n  new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(x * x);\n    }, 10);\n  });\nconst asyncRejectOdd = (x: number) =>\n  new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (x % 2 === 1) {\n        reject(x * 3);\n      }\n\n      resolve(x * 2);\n    }, 10);\n  });\n\ndescribe(\"mapAsyncLimit\", () => {\n  test(\"returns promise\", () => {\n    const p = mapAsyncLimit([], asyncIdentity);\n    expect(p).toBeInstanceOf(Promise);\n  });\n\n  test(\"empty input array\", async () => {\n    expect.assertions(1);\n    const res = await mapAsyncLimit([], asyncIdentity);\n    expect(res).toEqual([]);\n  });\n\n  test(\"single item\", async () => {\n    expect.assertions(1);\n    const res = await mapAsyncLimit([3], asyncDouble);\n    expect(res).toEqual([6]);\n  });\n\n  describe(\"multiple items\", () => {\n    describe(\"no limit\", () => {\n      test(\"all resolved\", async () => {\n        expect.assertions(1);\n        const res = await mapAsyncLimit([2, 3, 4, 5, 6], asyncSquare);\n        expect(res).toEqual([4, 9, 16, 25, 36]);\n      });\n\n      test(\"some rejected\", async () => {\n        expect.assertions(1);\n        await expect(mapAsyncLimit([2, 3], asyncRejectOdd)).rejects.toBe(9);\n      });\n    });\n\n    test(\"limit of one\", async () => {\n      expect.assertions(1);\n      let ongoing = 0;\n      const limit = 1;\n\n      const res = await mapAsyncLimit(\n        [2, 3, 4, 5, 6],\n        (x: number) => {\n          ongoing++;\n          return new Promise((resolve, reject) => {\n            setTimeout(() => {\n              if (ongoing > limit) {\n                reject(\"Concurrency limit exceeded\");\n              }\n\n              resolve(x * x);\n              ongoing--;\n            }, 10);\n          });\n        },\n        limit,\n      );\n\n      expect(res).toEqual([4, 9, 16, 25, 36]);\n    });\n\n    test(\"limit of two\", async () => {\n      expect.assertions(1);\n      let ongoing = 0;\n      const limit = 2;\n\n      const res = await mapAsyncLimit(\n        [2, 3, 4, 5, 6],\n        (x: number) => {\n          ongoing++;\n          return new Promise((resolve, reject) => {\n            setTimeout(() => {\n              if (ongoing > limit) {\n                reject(\"Concurrency limit exceeded\");\n              }\n\n              resolve(x * x);\n              ongoing--;\n            }, 10);\n          });\n        },\n        limit,\n      );\n\n      expect(res).toEqual([4, 9, 16, 25, 36]);\n    });\n\n    test(\"limit more than the input\", async () => {\n      expect.assertions(1);\n      let ongoing = 0;\n      const limit = 10;\n\n      const res = await mapAsyncLimit(\n        [2, 3, 4, 5, 6],\n        (x: number) => {\n          ongoing++;\n          return new Promise((resolve, reject) => {\n            setTimeout(() => {\n              if (ongoing > limit) {\n                reject(\"Concurrency limit exceeded\");\n              }\n\n              resolve(x * x);\n              ongoing--;\n            }, 10);\n          });\n        },\n        limit,\n      );\n\n      expect(res).toEqual([4, 9, 16, 25, 36]);\n    });\n  });\n});\n";

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
