// JS Starter Code
const jsStarterCode = "/**\n * @param {any} thisArg\n * @param {...*} argArray\n * @return {any}\n */\nFunction.prototype.myCall = function (thisArg, ...argArray) {\n  throw \"Not implemented!\";\n};\n";

// TS Starter Code
const tsStarterCode = "interface Function {\n  myCall(this: Function, thisArg: any, ...argArray: any[]): any;\n}\n\nFunction.prototype.myCall = function (thisArg, ...argArray) {\n  throw \"Not implemented!\";\n};\n";

// JS Test Cases
const jsTestCode = "import \"./function-call\";\n\ndescribe(\"Function.prototype.myCall\", () => {\n  const person = {\n    name: \"John\",\n  };\n\n  function getName(this: any) {\n    return this.name;\n  }\n\n  function sum(...args: Array<number>) {\n    return args.reduce((acc, num) => acc + num, 0);\n  }\n\n  function greeting(this: any, prefix: string, message: string) {\n    return `${prefix} ${this.name}, ${message}`;\n  }\n\n  test(\"Function.prototype.myCall is a function\", () => {\n    expect(typeof Function.prototype.myCall).toBe(\"function\");\n  });\n\n  test(\"`this` is bound\", () => {\n    expect(getName.myCall(person)).toStrictEqual(\"John\");\n  });\n\n  describe(\"without `this`\", () => {\n    test(\"single parameter\", () => {\n      expect(sum.myCall(null, 1)).toBe(1);\n    });\n\n    test(\"two parameters\", () => {\n      expect(sum.myCall(null, 1, 2)).toBe(3);\n    });\n\n    test(\"three parameters\", () => {\n      expect(sum.myCall(null, 1, 2, 3)).toBe(6);\n    });\n  });\n\n  test(\"`this` and parameters\", () => {\n    expect(greeting.myCall(person, \"Hello\", \"how are you?\")).toStrictEqual(\n      \"Hello John, how are you?\",\n    );\n  });\n});\n";

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
