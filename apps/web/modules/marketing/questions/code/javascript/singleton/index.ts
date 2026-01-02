// JS Starter Code
const jsStarterCode = "// No skeleton is provided. Export an object that has a single `getInstance()` method.\n";

// TS Starter Code
const tsStarterCode = "// No skeleton is provided. Export an object that has a single `getInstance()` method.\n";

// JS Test Cases
const jsTestCode = "import Singleton from \"./singleton\";\nimport Singleton2 from \"./singleton\";\n\ndescribe(\"singleton\", () => {\n  test(\"returns an object with the required method\", () => {\n    expect(Singleton).toBeInstanceOf(Object);\n    expect(Singleton.getInstance).toBeInstanceOf(Function);\n  });\n\n  describe(\"instance\", () => {\n    test(\"getInstance returns a Map\", () => {\n      expect(Singleton.getInstance()).toBeInstanceOf(Map);\n    });\n\n    test(\"Map methods work\", () => {\n      const globalMap = Singleton.getInstance();\n      globalMap.set(\"count\", 42);\n      expect(globalMap.get(\"count\")).toBe(42);\n    });\n\n    test(\"separate modules use the same instance\", () => {\n      const globalMap = Singleton.getInstance();\n      globalMap.set(\"count\", 42);\n\n      const globalMap2 = Singleton2.getInstance();\n      expect(globalMap2.get(\"count\")).toBe(42);\n    });\n  });\n});\n";

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
