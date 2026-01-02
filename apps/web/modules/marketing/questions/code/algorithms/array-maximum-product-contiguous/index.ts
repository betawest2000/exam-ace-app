// JS Starter Code
const jsStarterCode = "/**\n * @param {number[]} numbers\n * @return {number}\n */\nexport default function maxProductSubArray(numbers) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function maxProductSubArray(numbers: number[]): number {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import submitTestCases from \"./sumbit.tests.json\";\nimport maxProductSubArray from \"./array-maximum-product-contiguous\";\n\ndescribe(\"maxProductSubArray\", () => {\n  (submitTestCases as any[]).forEach((example: any) => {\n    test(`numbers = [${example.input[0][1]}]`, () => {\n      expect(maxProductSubArray(example.input[0][1])).toStrictEqual(\n        example.output,\n      );\n    });\n  });\n});\n";

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
