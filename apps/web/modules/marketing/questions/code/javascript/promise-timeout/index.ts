// JS Starter Code
const jsStarterCode = "/**\n * @template T\n * @param {Promise<T>} promise\n * @param {number} duration\n * @return {Promise<T>}\n */\nexport default function promiseTimeout(promise, duration) {\n  throw \"Not implemented\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function promiseTimeout<T>(\n  promise: Promise<T>,\n  duration: number,\n): Promise<T> {\n  throw \"Not implemented\";\n}\n";

// JS Test Cases
const jsTestCode = "import promiseTimeout from \"./promise-timeout\";\n\ndescribe(\"promiseTimeout\", () => {\n  test(\"returns a promise\", () => {\n    const promise = promiseTimeout(Promise.resolve(1), 100);\n    expect(promise).toBeInstanceOf(Promise);\n  });\n\n  describe(\"settled\", () => {\n    describe(\"resolved\", () => {\n      test(\"immediately\", async () => {\n        const promise = promiseTimeout(Promise.resolve(42), 100);\n        await expect(promise).resolves.toBe(42);\n      });\n\n      test(\"next tick\", async () => {\n        const promise = promiseTimeout(\n          new Promise((resolve) => {\n            setTimeout(() => {\n              resolve(42);\n            }, 0);\n          }),\n          100,\n        );\n        await expect(promise).resolves.toBe(42);\n      });\n\n      test(\"before timeout\", async () => {\n        const promise = promiseTimeout(\n          new Promise((resolve) => {\n            setTimeout(() => {\n              resolve(42);\n            }, 50);\n          }),\n          100,\n        );\n        await expect(promise).resolves.toBe(42);\n      });\n    });\n\n    describe(\"rejected\", () => {\n      test(\"immediately\", async () => {\n        const promise = promiseTimeout(Promise.reject(42), 100);\n        await expect(promise).rejects.toBe(42);\n      });\n\n      test(\"next tick\", async () => {\n        const promise = promiseTimeout(\n          new Promise((_, reject) => {\n            setTimeout(() => {\n              reject(42);\n            }, 0);\n          }),\n          100,\n        );\n        await expect(promise).rejects.toBe(42);\n      });\n\n      test(\"before timeout\", async () => {\n        const promise = promiseTimeout(\n          new Promise((_, reject) => {\n            setTimeout(() => {\n              reject(42);\n            }, 50);\n          }),\n          100,\n        );\n        await expect(promise).rejects.toBe(42);\n      });\n    });\n  });\n\n  describe(\"timeout\", () => {\n    test(\"immediate\", async () => {\n      const promise = promiseTimeout(\n        new Promise((resolve) => {\n          setTimeout(() => {\n            resolve(42);\n          }, 500);\n        }),\n        0,\n      );\n\n      await expect(promise).rejects.toBe(\"Promise timeout\");\n    });\n\n    test(\"all immediate\", async () => {\n      const promise = promiseTimeout(\n        new Promise((resolve) => {\n          setTimeout(() => {\n            resolve(42);\n          }, 0);\n        }),\n        0,\n      );\n      await expect(promise).resolves.toBe(42);\n    });\n\n    test(\"non-immediate\", async () => {\n      const promise = promiseTimeout(\n        new Promise((resolve) => {\n          setTimeout(() => {\n            resolve(42);\n          }, 200);\n        }),\n        100,\n      );\n      await expect(promise).rejects.toBe(\"Promise timeout\");\n    });\n  });\n});\n";

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
