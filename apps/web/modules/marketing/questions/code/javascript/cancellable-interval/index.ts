// JS Starter Code
const jsStarterCode = "/**\n * @param {Function} callback\n * @param {number} delay\n * @param {...any} args\n * @returns {Function}\n */\nexport default function setCancellableInterval(callback, delay, ...args) {\n  throw \"Not implemented\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function setCancellableInterval(\n  callback: Function,\n  delay?: number,\n  ...args: Array<any>\n): () => void {\n  throw \"Not implemented\";\n}\n";

// JS Test Cases
const jsTestCode = "import setCancellableInterval from \"./cancellable-interval\";\n\ndescribe(\"setCancellableInterval\", () => {\n  test(\"returns a function\", () => {\n    expect(typeof setCancellableInterval(() => {})).toBe(\"function\");\n  });\n\n  describe(\"cancelled\", () => {\n    test(\"immediately\", (done) => {\n      expect.assertions(2);\n      let i = 0;\n\n      setInterval(() => {\n        // Ensure setInterval callback is never called.\n        expect(i).toBe(0);\n        done();\n      });\n      const cancel = setCancellableInterval(() => {\n        i++;\n      }, 10);\n      cancel();\n      expect(i).toBe(0);\n    });\n\n    test(\"after running once\", (done) => {\n      let i = 0;\n\n      const cancel = setCancellableInterval(() => {\n        i++;\n      }, 10);\n\n      setTimeout(() => {\n        expect(i).toBe(1);\n        cancel();\n        done();\n      }, 15);\n\n      expect(i).toBe(0);\n    });\n\n    test(\"after running twice\", (done) => {\n      let i = 0;\n\n      const cancel = setCancellableInterval(() => {\n        i++;\n\n        if (i === 2) {\n          cancel();\n          done();\n        }\n      }, 10);\n\n      expect(i).toBe(0);\n    });\n  });\n\n  test(\"uses parameters\", (done) => {\n    let i = 1;\n    let count = 0;\n\n    const cancel = setCancellableInterval(\n      (foo: number, bar: number) => {\n        count++;\n        i += foo;\n        i *= bar;\n\n        if (count === 1) {\n          expect(i).toBe(21);\n        }\n\n        if (count === 2) {\n          expect(i).toBe(161);\n          cancel();\n          done();\n        }\n      },\n      10,\n      2,\n      7,\n    );\n\n    expect(i).toBe(1);\n  });\n});\n";

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
