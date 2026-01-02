// JS Starter Code
const jsStarterCode = "/**\n * @param {number} duration\n * @return {Promise<void>}\n */\nexport default async function sleep(duration) {\n  throw \"Not implemented\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default async function sleep(duration: number): Promise<void> {\n  throw \"Not implemented\";\n}\n";

// JS Test Cases
const jsTestCode = "import sleep from \"./sleep\";\n\ndescribe(\"sleep\", () => {\n  test(\"returns a promise\", () => {\n    const sleepPromise = sleep(1);\n    expect(sleepPromise instanceof Promise).toBe(true);\n  });\n\n  describe(\"executes after delay\", () => {\n    test(\"with await\", async () => {\n      expect.assertions(4);\n      let i = 0;\n      expect(i).toBe(0);\n      let now = Date.now();\n      await sleep(50);\n      expect(i).toBe(0);\n      i++;\n      expect(i).toBe(1);\n      expect(Date.now() - now).toBeGreaterThan(25);\n    });\n\n    test(\"delay of 0\", (done) => {\n      expect.assertions(3);\n      let i = 0;\n      expect(i).toBe(0);\n      sleep(0).then(() => {\n        i++;\n        expect(i).toBe(2);\n        done();\n      });\n      i++;\n      expect(i).toBe(1);\n    });\n\n    test(\"delay bigger than 0\", (done) => {\n      expect.assertions(3);\n      let i = 0;\n      expect(i).toBe(0);\n      sleep(50).then(() => {\n        i++;\n        expect(i).toBe(2);\n        done();\n      });\n      i++;\n      expect(i).toBe(1);\n    });\n\n    test(\"does not block other async operations\", (done) => {\n      expect.assertions(4);\n      let i = 0;\n      expect(i).toBe(0);\n      sleep(50).then(() => {\n        i++;\n        expect(i).toBe(3);\n        done();\n      });\n      setTimeout(() => {\n        i++;\n        expect(i).toBe(2);\n      }, 25);\n      i++;\n      expect(i).toBe(1);\n    });\n  });\n});\n";

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
