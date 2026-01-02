// JS Starter Code
const jsStarterCode = "/**\n * @param {Promise} p1\n * @param {Promise} p2\n * @return {Promise<any>}\n */\nexport default function promiseMerge(p1, p2) {\n  throw \"Not implemented\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function promiseMerge(\n  p1: Promise<unknown>,\n  p2: Promise<unknown>,\n): Promise<unknown> {\n  throw \"Not implemented\";\n}\n";

// JS Test Cases
const jsTestCode = "import promiseMerge from \"./promise-merge\";\n\ndescribe(\"promiseMerge\", () => {\n  test(\"returns a promise\", () => {\n    const promise = promiseMerge(Promise.resolve(1), Promise.resolve(2));\n    expect(promise).toBeInstanceOf(Promise);\n  });\n\n  describe(\"resolved\", () => {\n    describe(\"numbers\", () => {\n      test(\"immediately\", async () => {\n        const promise = promiseMerge(Promise.resolve(21), Promise.resolve(22));\n        await expect(promise).resolves.toBe(43);\n      });\n\n      test(\"delayed\", async () => {\n        const promise = promiseMerge(\n          new Promise((resolve) => setTimeout(() => resolve(21), 10)),\n          new Promise((resolve) => setTimeout(() => resolve(22), 5)),\n        );\n        await expect(promise).resolves.toBe(43);\n      });\n    });\n\n    describe(\"strings\", () => {\n      test(\"immediately\", async () => {\n        const promise = promiseMerge(\n          Promise.resolve(\"123\"),\n          Promise.resolve(\"456\"),\n        );\n        await expect(promise).resolves.toBe(\"123456\");\n      });\n\n      test(\"delayed\", async () => {\n        const promise = promiseMerge(\n          new Promise((resolve) => setTimeout(() => resolve(\"123\"), 10)),\n          new Promise((resolve) => setTimeout(() => resolve(\"456\"), 5)),\n        );\n        await expect(promise).resolves.toBe(\"123456\");\n      });\n    });\n\n    describe(\"arrays\", () => {\n      test(\"immediately\", async () => {\n        const promise = promiseMerge(\n          Promise.resolve([1, 2, 3]),\n          Promise.resolve([4, 5, 6]),\n        );\n        await expect(promise).resolves.toEqual([1, 2, 3, 4, 5, 6]);\n      });\n\n      test(\"delayed\", async () => {\n        const promise = promiseMerge(\n          new Promise((resolve) => setTimeout(() => resolve([1, 2, 3]), 5)),\n          new Promise((resolve) => setTimeout(() => resolve([4, 5, 6]), 10)),\n        );\n        await expect(promise).resolves.toEqual([1, 2, 3, 4, 5, 6]);\n      });\n    });\n\n    describe(\"objects\", () => {\n      test(\"immediately\", async () => {\n        const promise = promiseMerge(\n          Promise.resolve({ foo: 1 }),\n          Promise.resolve({ bar: 2 }),\n        );\n        await expect(promise).resolves.toEqual({ bar: 2, foo: 1 });\n      });\n\n      test(\"delayed\", async () => {\n        const promise = promiseMerge(\n          new Promise((resolve) => setTimeout(() => resolve({ foo: 1 }), 5)),\n          new Promise((resolve) => setTimeout(() => resolve({ bar: 2 }), 10)),\n        );\n        await expect(promise).resolves.toEqual({ bar: 2, foo: 1 });\n      });\n    });\n  });\n\n  describe(\"rejected\", () => {\n    test(\"promises rejected\", async () => {\n      const promise = promiseMerge(\n        new Promise((resolve) => setTimeout(() => resolve(1), 5)),\n        new Promise((_, reject) => setTimeout(() => reject(2), 10)),\n      );\n      await expect(promise).rejects.toEqual(2);\n    });\n\n    test(\"supported data types but not mergeable\", async () => {\n      const promise = promiseMerge(\n        new Promise((resolve) => setTimeout(() => resolve(1), 5)),\n        new Promise((resolve) => setTimeout(() => resolve([]), 10)),\n      );\n      await expect(promise).rejects.toEqual(\"Unsupported data types\");\n    });\n\n    test(\"unsupported data types\", async () => {\n      const promise = promiseMerge(\n        // @ts-expect-error\n        new Promise((resolve) => setTimeout(() => resolve(new Set([1]), 5))),\n        // @ts-expect-error\n        new Promise((resolve) => setTimeout(() => resolve(new Set([2]), 10))),\n      );\n      await expect(promise).rejects.toEqual(\"Unsupported data types\");\n    });\n  });\n});\n";

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
