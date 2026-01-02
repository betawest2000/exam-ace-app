// JS Starter Code
const jsStarterCode = "/**\n * @param {number} value The number to clamp.\n * @param {number} lower The lower bound.\n * @param {number} upper The upper bound.\n * @returns {number} Returns the clamped number.\n */\nexport default function clamp(value, lower, upper) {\n  throw \"Not implemented\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function clamp(\n  value: number,\n  lower: number,\n  upper: number,\n): number {\n  throw \"Not implemented\";\n}\n";

// JS Test Cases
const jsTestCode = "import clamp from \"./clamp\";\n\ndescribe(\"clamp\", () => {\n  describe(\"within range\", () => {\n    test(\"negative numbers\", () => {\n      expect(clamp(-4, -5, 5)).toBe(-4);\n      expect(clamp(-5, -5, 5)).toBe(-5);\n      expect(clamp(-5.5, -5.6, 5.6)).toBe(-5.5);\n    });\n\n    test(\"positive numbers\", () => {\n      expect(clamp(4, -5, 5)).toBe(4);\n      expect(clamp(5, -5, 5)).toBe(5);\n      expect(clamp(4.5, -5.1, 5.2)).toBe(4.5);\n    });\n\n    test(\"should not alter `0` in range\", () => {\n      expect(1 / clamp(0, -5, 5)).toBe(Infinity);\n    });\n  });\n\n  describe(\"out of bounds\", () => {\n    test(\"positive numbers\", () => {\n      expect(clamp(4, -5, 2)).toBe(2);\n      expect(clamp(5, -5, 3)).toBe(3);\n      expect(clamp(4.5, 1, 3.2)).toBe(3.2);\n    });\n\n    test(\"negative numbers\", () => {\n      expect(clamp(-10, -5, 5)).toBe(-5);\n      expect(clamp(-10.2, -5.5, 5.5)).toBe(-5.5);\n      expect(clamp(-Infinity, -5, 5)).toBe(-5);\n    });\n\n    test(\"should clamp to `0`\", () => {\n      expect(1 / clamp(-10, 0, 5)).toBe(Infinity);\n    });\n  });\n});\n";

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
