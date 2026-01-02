// JS Starter Code
const jsStarterCode = "/**\n * @returns { promise: Promise, resolve: Function, reject: Function }\n */\nexport default function promiseWithResolvers() {\n  throw \"Not implemented\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function promiseWithResolvers<T>(): Readonly<{\n  promise: Promise<T>;\n  resolve: (value: T) => void;\n  reject: (reason?: any) => void;\n}> {\n  throw \"Not implemented\";\n}\n";

// JS Test Cases
const jsTestCode = "import promiseWithResolvers from \"./promise-with-resolvers\";\n\ndescribe(\"promiseWithResolvers\", () => {\n  test(\"returns require fields\", () => {\n    const { promise, reject, resolve } = promiseWithResolvers();\n\n    expect(promise).toBeInstanceOf(Promise);\n    expect(resolve).toBeInstanceOf(Function);\n    expect(reject).toBeInstanceOf(Function);\n  });\n\n  describe(\"promise\", () => {\n    test(\"resolves\", () => {\n      const { promise, resolve } = promiseWithResolvers();\n      resolve(42);\n\n      return expect(promise).resolves.toBe(42);\n    });\n\n    test(\"rejects\", () => {\n      const { promise, reject } = promiseWithResolvers();\n      reject(42);\n\n      return expect(promise).rejects.toBe(42);\n    });\n\n    test(\"then\", (done) => {\n      expect.assertions(1);\n      const { promise, resolve } = promiseWithResolvers();\n      resolve(42);\n\n      promise.then((result) => {\n        expect(result).toBe(42);\n        done();\n      });\n    });\n  });\n\n  describe(\"usage with promise methods\", () => {\n    test(\"Promise.all()\", () => {\n      const { promise: p0, resolve } = promiseWithResolvers();\n      const p1 = new Promise((resolve) => {\n        setTimeout(() => {\n          resolve(\"foo\");\n        }, 100);\n      });\n      resolve(3);\n\n      return expect(Promise.all([p0, p1])).resolves.toStrictEqual([3, \"foo\"]);\n    });\n\n    test(\"Promise.allSettled()\", async () => {\n      const { promise: p0, resolve: resolve0 } = promiseWithResolvers();\n      const { promise: p1, resolve: resolve1 } = promiseWithResolvers();\n\n      resolve0(2);\n      resolve1(3);\n\n      const res = await Promise.allSettled([p0, p1]);\n\n      expect(res).toEqual([\n        {\n          status: \"fulfilled\",\n          value: 2,\n        },\n        {\n          status: \"fulfilled\",\n          value: 3,\n        },\n      ]);\n    });\n\n    test(\"Promise.any()\", async () => {\n      const { promise: p0, resolve: resolve0 } = promiseWithResolvers();\n      const { promise: p1, reject: reject1 } = promiseWithResolvers();\n\n      resolve0(2);\n      reject1(3);\n\n      const res = await Promise.any([p0, p1]);\n      expect(res).toEqual(2);\n    });\n\n    test(\"Promise.race()\", async () => {\n      const { promise: p0, resolve: resolve0 } = promiseWithResolvers();\n      const { promise: p1, reject: resolve1 } = promiseWithResolvers();\n\n      resolve0(2);\n      resolve1(3);\n\n      const res = await Promise.race([p0, p1]);\n      expect(res).toEqual(2);\n    });\n  });\n});\n";

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
