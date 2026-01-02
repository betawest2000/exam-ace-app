// JS Starter Code
const jsStarterCode = "/**\n * @param {number} initialValue\n * @return {{get: Function, increment: Function, decrement: Function, reset: Function }}\n */\nexport default function makeCounter(initialValue = 0) {\n  throw \"Not implemented\";\n}\n";

// TS Starter Code
const tsStarterCode = "interface Counter {\n  get: () => number;\n  increment: () => number;\n  decrement: () => number;\n  reset: () => number;\n}\n\nexport default function makeCounter(initialValue: number = 0): Counter {\n  throw \"Not implemented\";\n}\n";

// JS Test Cases
const jsTestCode = "import makeCounter from \"./make-counter-ii\";\n\ndescribe(\"makeCounter\", () => {\n  test(\"returns an object\", () => {\n    const counter = makeCounter();\n\n    expect(typeof counter).toBe(\"object\");\n  });\n\n  describe(\"get\", () => {\n    test(\"default\", () => {\n      const counter = makeCounter();\n      expect(counter.get()).toBe(0);\n    });\n\n    test(\"custom\", () => {\n      const counter = makeCounter(-4);\n      expect(counter.get()).toBe(-4);\n    });\n  });\n\n  describe(\"increment\", () => {\n    test(\"default\", () => {\n      const counter = makeCounter();\n      expect(counter.increment()).toBe(1);\n      expect(counter.increment()).toBe(2);\n    });\n\n    test(\"custom\", () => {\n      const counter = makeCounter(-4);\n      expect(counter.increment()).toBe(-3);\n      expect(counter.increment()).toBe(-2);\n    });\n  });\n\n  describe(\"decrement\", () => {\n    test(\"default\", () => {\n      const counter = makeCounter();\n      expect(counter.decrement()).toBe(-1);\n      expect(counter.decrement()).toBe(-2);\n    });\n\n    test(\"custom\", () => {\n      const counter = makeCounter(-4);\n      expect(counter.decrement()).toBe(-5);\n      expect(counter.decrement()).toBe(-6);\n    });\n  });\n\n  describe(\"reset\", () => {\n    test(\"default\", () => {\n      const counter = makeCounter();\n      expect(counter.decrement()).toBe(-1);\n      expect(counter.decrement()).toBe(-2);\n      expect(counter.reset()).toBe(0);\n    });\n\n    test(\"custom\", () => {\n      const counter = makeCounter(-4);\n      expect(counter.decrement()).toBe(-5);\n      expect(counter.decrement()).toBe(-6);\n      expect(counter.reset()).toBe(-4);\n    });\n  });\n\n  describe(\"integration\", () => {\n    test(\"default\", () => {\n      const counter = makeCounter();\n      expect(counter.get()).toBe(0);\n      expect(counter.increment()).toBe(1);\n      expect(counter.increment()).toBe(2);\n      expect(counter.get()).toBe(2);\n      expect(counter.reset()).toBe(0);\n      expect(counter.decrement()).toBe(-1);\n    });\n\n    test(\"custom\", () => {\n      const counter = makeCounter(5);\n      expect(counter.get()).toBe(5);\n      expect(counter.decrement()).toBe(4);\n      expect(counter.decrement()).toBe(3);\n      expect(counter.get()).toBe(3);\n      expect(counter.reset()).toBe(5);\n      expect(counter.increment()).toBe(6);\n    });\n  });\n\n  test(\"isolated instances\", () => {\n    const counterA = makeCounter(5);\n    const counterB = makeCounter(10);\n\n    expect(counterA.get()).toBe(5);\n    expect(counterB.get()).toBe(10);\n\n    expect(counterA.decrement()).toBe(4);\n    expect(counterA.decrement()).toBe(3);\n    expect(counterA.get()).toBe(3);\n\n    expect(counterB.get()).toBe(10);\n    expect(counterB.increment()).toBe(11);\n  });\n});\n";

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
