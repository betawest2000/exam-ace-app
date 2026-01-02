// JS Starter Code
const jsStarterCode = "/**\n * @param {number} initialValue\n * @return {Function}\n */\nexport default function makeCounter(initialValue = 0) {\n  throw \"Not implemented\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function makeCounter(initialValue: number = 0): () => number {\n  throw \"Not implemented\";\n}\n";

// JS Test Cases
const jsTestCode = "import makeCounter from \"./make-counter\";\n\ndescribe(\"makeCounter\", () => {\n  test(\"returns a function\", () => {\n    const counter = makeCounter();\n    expect(counter).toBeInstanceOf(Function);\n  });\n\n  describe(\"calling the function\", () => {\n    describe(\"returns initial value\", () => {\n      test(\"default\", () => {\n        const counter = makeCounter();\n        expect(counter()).toBe(0);\n      });\n\n      test(\"custom\", () => {\n        const counter = makeCounter(4);\n        expect(counter()).toBe(4);\n      });\n    });\n\n    describe(\"can be repeatedly called\", () => {\n      test(\"default\", () => {\n        const counter = makeCounter();\n        expect(counter()).toBe(0);\n        expect(counter()).toBe(1);\n        expect(counter()).toBe(2);\n      });\n\n      test(\"positive\", () => {\n        const counter = makeCounter(4);\n        expect(counter()).toBe(4);\n        expect(counter()).toBe(5);\n        expect(counter()).toBe(6);\n      });\n\n      test(\"negative\", () => {\n        const counter = makeCounter(-4);\n        expect(counter()).toBe(-4);\n        expect(counter()).toBe(-3);\n        expect(counter()).toBe(-2);\n      });\n    });\n\n    test(\"isolated instances\", () => {\n      const counterA = makeCounter(5);\n      const counterB = makeCounter(10);\n\n      expect(counterA()).toBe(5);\n      expect(counterB()).toBe(10);\n\n      expect(counterA()).toBe(6);\n      expect(counterB()).toBe(11);\n    });\n  });\n});\n";

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
