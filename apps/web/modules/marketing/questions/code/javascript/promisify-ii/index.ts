// JS Starter Code
const jsStarterCode = "/**\n * @callback func\n * @returns Function\n */\nexport default function promisify(func) {\n  throw \"Not implemented\";\n}\n";

// TS Starter Code
const tsStarterCode = "const promisifyCustomSymbol = Symbol.for(\"util.promisify.custom\");\n\ntype Func = (...args: any[]) => void;\ntype Return<T> = (this: any, ...args: any[]) => Promise<T>;\ntype WithSymbol<T> = { [promisifyCustomSymbol]: Return<T> };\ntype Param<T> = Func | WithSymbol<T>;\n\nexport default function promisify<T>(func: Param<T>): Return<T> {\n  throw \"Not implemented\";\n}\n";

// JS Test Cases
const jsTestCode = "import promisify from \"./promisify-ii\";\n\ndescribe(\"promisify\", () => {\n  function delayedResolve(cb: Function) {\n    setTimeout(() => {\n      cb(null, 42);\n    }, 10);\n  }\n\n  function asyncError(x: number, cb: Function) {\n    setTimeout(() => {\n      cb(x);\n    }, 10);\n  }\n\n  describe(\"returns correct types\", () => {\n    test(\"returns a function\", () => {\n      const promisified = promisify(delayedResolve);\n      expect(promisified).toBeInstanceOf(Function);\n    });\n\n    test(\"calling promisified returns a promise\", () => {\n      const promisified = promisify(delayedResolve);\n      expect(promisified()).toBeInstanceOf(Promise);\n    });\n  });\n\n  describe(\"use with await\", () => {\n    describe(\"resolved\", () => {\n      test(\"no arguments\", async () => {\n        expect.assertions(1);\n        const promisified = promisify(delayedResolve);\n        const res = await promisified();\n        expect(res).toBe(42);\n      });\n\n      test(\"one argument\", async () => {\n        function asyncIdentity(x: number, cb: Function) {\n          setTimeout(() => {\n            cb(null, x);\n          }, 10);\n        }\n\n        expect.assertions(1);\n        const promisified = promisify(asyncIdentity);\n        const res = await promisified(23);\n        expect(res).toBe(23);\n      });\n\n      test(\"two arguments\", async () => {\n        function asyncAdd(a: number, b: number, cb: Function) {\n          setTimeout(() => {\n            cb(null, a + b);\n          }, 10);\n        }\n\n        expect.assertions(1);\n        const promisified = promisify(asyncAdd);\n        const res = await promisified(17, 19);\n        expect(res).toBe(36);\n      });\n    });\n\n    test(\"rejected\", async () => {\n      expect.assertions(1);\n      try {\n        const promisified = promisify(asyncError);\n        await promisified(23);\n      } catch (err) {\n        expect(err).toBe(23);\n      }\n    });\n  });\n\n  test(\"can access `this`\", async () => {\n    expect.assertions(1);\n    function asyncAdd(this: any, a: number, b: number, cb: Function) {\n      setTimeout(() => {\n        cb(null, a + b + this.base);\n      }, 10);\n    }\n\n    const promisifiedAdd = promisify(asyncAdd);\n    const obj = { base: 5, add: promisifiedAdd };\n    const res = await obj.add(17, 19);\n    expect(res).toBe(41);\n  });\n\n  describe(\"use without await\", () => {\n    test(\"then\", (done) => {\n      expect.assertions(1);\n      const promisified = promisify(delayedResolve);\n      promisified().then((res) => {\n        expect(res).toBe(42);\n        done();\n      });\n    });\n\n    test(\"catch\", (done) => {\n      expect.assertions(1);\n      const promisified = promisify(asyncError);\n      promisified(23)\n        .then()\n        .catch((err) => {\n          expect(err).toBe(23);\n          done();\n        });\n    });\n  });\n\n  describe(\"custom\", () => {\n    test(\"resolve\", async () => {\n      expect.assertions(1);\n      function asyncIdentityCustom<T>(cb: Function, x: T) {\n        setTimeout(() => {\n          cb(null, x);\n        }, 10);\n      }\n      const customPromisify = <T,>(x: T) =>\n        new Promise((resolve) => {\n          asyncIdentityCustom((_: unknown, res: T) => resolve(res), x);\n        });\n      (asyncIdentityCustom as any)[Symbol.for(\"util.promisify.custom\")] =\n        customPromisify;\n\n      const promisified = promisify(asyncIdentityCustom);\n      const res = await promisified(23);\n      expect(res).toBe(23);\n    });\n\n    test(\"reject\", async () => {\n      expect.assertions(1);\n      function asyncErrorCustom(cb: Function, x: number) {\n        setTimeout(() => {\n          cb(x);\n        }, 10);\n      }\n      const customPromisify = (x: number) =>\n        new Promise((_, reject) => {\n          asyncErrorCustom((err: any) => reject(err), x);\n        });\n      (asyncErrorCustom as any)[Symbol.for(\"util.promisify.custom\")] =\n        customPromisify;\n\n      try {\n        const promisified = promisify(asyncErrorCustom);\n        await promisified(23);\n      } catch (err) {\n        expect(err).toBe(23);\n      }\n    });\n  });\n});\n";

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
