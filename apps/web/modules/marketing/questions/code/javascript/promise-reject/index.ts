// JS Starter Code
const jsStarterCode = "/**\n * @param {*} reason\n * @returns Promise\n */\nexport default function promiseReject(reason) {\n  throw \"Not implemented\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function promiseReject<T = never>(reason: any): Promise<T> {\n  throw \"Not implemented\";\n}\n";

// JS Test Cases
const jsTestCode = "import promiseReject from \"./promise-reject\";\n\ndescribe(\"promiseReject\", () => {\n  describe(\"non-promise\", () => {\n    test(\"returns promise\", async () => {\n      expect.assertions(1);\n      try {\n        const p = promiseReject(1);\n        expect(p).toBeInstanceOf(Promise);\n        await p;\n      } catch {}\n    });\n\n    test(\"rejects\", async () => {\n      const p = promiseReject(42);\n      expect(p).rejects.toBe(42);\n    });\n  });\n\n  describe(\"promise\", () => {\n    test(\"returns promise\", async () => {\n      expect.assertions(1);\n      try {\n        const p = promiseReject(new Promise((resolve) => resolve(42)));\n        expect(p).toBeInstanceOf(Promise);\n        await p;\n      } catch {}\n    });\n\n    test(\"returns different promise instance\", async () => {\n      expect.assertions(1);\n      try {\n        const reason = new Promise((resolve) => resolve(42));\n        const p = promiseReject(reason);\n        expect(p).not.toBe(reason);\n        await p;\n      } catch {}\n    });\n\n    test(\"rejects\", async () => {\n      const p = promiseReject(42);\n      expect(p).rejects.toBe(42);\n    });\n\n    test(\"use with catch\", (done) => {\n      expect.assertions(1);\n      const p = promiseReject(42);\n      p.catch((err) => {\n        expect(err).toBe(42);\n        done();\n      });\n    });\n  });\n\n  test(\"use with Promise.all()\", async () => {\n    const p0 = promiseReject(3);\n    const p1 = new Promise((resolve, reject) => {\n      setTimeout(() => {\n        resolve(\"foo\");\n      }, 100);\n    });\n\n    expect(Promise.all([p0, p1])).rejects.toBe(3);\n  });\n\n  test(\"use with Promise.allSettled()\", async () => {\n    const p0 = promiseReject(2);\n    const p1 = promiseReject(3);\n\n    const res = await Promise.allSettled([p0, p1]);\n    expect(res).toEqual([\n      {\n        status: \"rejected\",\n        reason: 2,\n      },\n      {\n        status: \"rejected\",\n        reason: 3,\n      },\n    ]);\n  });\n\n  test(\"use with Promise.any()\", async () => {\n    expect.assertions(2);\n    const p0 = promiseReject(2);\n\n    try {\n      await Promise.any([p0]);\n    } catch (err: any) {\n      expect(err).toBeInstanceOf(AggregateError);\n      expect(err.errors).toEqual([2]);\n    }\n  });\n\n  test(\"use with Promise.race()\", async () => {\n    const p0 = promiseReject(2);\n    const p1 = new Promise((resolve) => {\n      setTimeout(() => {\n        resolve(3);\n      }, 10);\n    });\n\n    expect(Promise.race([p0, p1])).rejects.toBe(2);\n  });\n});\n";

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
