// JS Starter Code
const jsStarterCode = "/**\n * @param {Function} callback\n * @param {number} delay\n * @param {...any} args\n * @returns {Function}\n */\nexport default function setCancellableTimeout(callback, delay, ...args) {\n  throw \"Not implemented\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function setCancellableTimeout(\n  callback: Function,\n  delay?: number,\n  ...args: Array<any>\n): () => void {\n  throw \"Not implemented\";\n}\n";

// JS Test Cases
const jsTestCode = "import setCancellableTimeout from \"./cancellable-timeout\";\n\ndescribe(\"setCancellableTimeout\", () => {\n  test(\"returns a function\", () => {\n    expect(typeof setCancellableTimeout(() => {})).toBe(\"function\");\n  });\n\n  describe(\"cancelled\", () => {\n    test(\"immediately\", (done) => {\n      expect.assertions(2);\n      let i = 0;\n\n      setTimeout(() => {\n        // Ensure setTimeout callback is never called.\n        expect(i).toBe(0);\n        done();\n      });\n      const cancel = setCancellableTimeout(() => {\n        i++;\n      }, 10);\n      cancel();\n      expect(i).toBe(0);\n    });\n\n    test(\"delayed\", (done) => {\n      expect.assertions(2);\n      let i = 0;\n\n      setTimeout(() => {\n        // Ensure setTimeout callback is never called.\n        expect(i).toBe(0);\n        done();\n      }, 20);\n      const cancel = setCancellableTimeout(() => {\n        i++;\n      }, 10);\n      cancel();\n      expect(i).toBe(0);\n    });\n  });\n\n  describe(\"not cancelled\", () => {\n    test(\"immediately\", (done) => {\n      expect.assertions(2);\n      let i = 0;\n\n      setCancellableTimeout(() => {\n        i++;\n        expect(i).toBe(1);\n        done();\n      });\n\n      expect(i).toBe(0);\n    });\n\n    test(\"delayed\", (done) => {\n      expect.assertions(2);\n      let i = 0;\n\n      setCancellableTimeout(() => {\n        i++;\n        expect(i).toBe(1);\n        done();\n      }, 100);\n\n      expect(i).toBe(0);\n    });\n\n    test(\"uses parameters\", (done) => {\n      expect.assertions(2);\n      let i = 1;\n\n      setCancellableTimeout(\n        (foo: number, bar: number) => {\n          i += foo;\n          i *= bar;\n          expect(i).toBe(21);\n          done();\n        },\n        10,\n        2,\n        7,\n      );\n\n      expect(i).toBe(1);\n    });\n\n    test(\"cancelling afterwards is safe\", (done) => {\n      expect.assertions(3);\n      let i = 1;\n\n      const cancel = setCancellableTimeout(\n        (foo: number, bar: number) => {\n          i += foo;\n          i *= bar;\n          expect(i).toBe(21);\n        },\n        10,\n        2,\n        7,\n      );\n\n      setTimeout(() => {\n        cancel();\n        expect(i).toBe(21);\n        done();\n      }, 50);\n\n      expect(i).toBe(1);\n    });\n  });\n\n  test(\"callbacks can access `this`\", (done) => {\n    expect.assertions(2);\n\n    function increment(this: any, delta: number) {\n      this.val += delta;\n    }\n\n    const obj = {\n      val: 13,\n    };\n\n    setCancellableTimeout(increment.bind(obj), 10, 15);\n\n    expect(obj.val).toBe(13);\n\n    setTimeout(() => {\n      expect(obj.val).toBe(28);\n      done();\n    }, 20);\n  });\n});\n";

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
