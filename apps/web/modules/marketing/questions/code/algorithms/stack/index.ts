// JS Starter Code
const jsStarterCode = "export default class Stack {\n  constructor() {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Pushes an item onto the top of the stack.\n   * @param {*} item The item to be pushed onto the stack.\n   * @return {number} The new length of the stack.\n   */\n  push(item) {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Remove an item at the top of the stack.\n   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.\n   */\n  pop() {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Determines if the stack is empty.\n   * @return {boolean} `true` if the stack has no items, `false` otherwise.\n   */\n  isEmpty() {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Returns the item at the top of the stack without removing it from the stack.\n   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.\n   */\n  peek() {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Returns the number of items in the stack.\n   * @return {number} The number of items in the stack.\n   */\n  length() {\n    throw \"Not implemented!\";\n  }\n}\n";

// TS Starter Code
const tsStarterCode = "export default class Stack<T> {\n  constructor() {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Pushes an item onto the top of the stack.\n   */\n  push(item: T): number {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Remove an item at the top of the stack.\n   */\n  pop(): T | undefined {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Determines if the stack is empty.\n   */\n  isEmpty(): boolean {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Returns the item at the top of the stack without removing it from the stack.\n   */\n  peek(): T | undefined {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Returns the number of items in the stack.\n   */\n  length(): number {\n    throw \"Not implemented!\";\n  }\n}\n";

// JS Test Cases
const jsTestCode = "import Stack from \"./stack\";\n\ndescribe(\"Stack\", () => {\n  test(\"constructor\", () => {\n    const s = new Stack();\n    expect(s instanceof Stack);\n  });\n\n  test(\"push()\", () => {\n    const s = new Stack();\n    expect(s.push(100)).toBe(1);\n    expect(s.length()).toBe(1);\n    expect(s.push(200)).toBe(2);\n    expect(s.length()).toBe(2);\n  });\n\n  test(\"pop()\", () => {\n    const s = new Stack();\n    s.push(100);\n    expect(s.length()).toBe(1);\n    expect(s.pop()).toBe(100);\n    expect(s.length()).toBe(0);\n    expect(s.pop()).toBe(undefined);\n  });\n\n  test(\"isEmpty()\", () => {\n    const s = new Stack();\n    expect(s.isEmpty()).toBeTruthy();\n    s.push(100);\n    expect(s.isEmpty()).toBeFalsy();\n    s.pop();\n    expect(s.isEmpty()).toBeTruthy();\n  });\n\n  test(\"length()\", () => {\n    const s = new Stack();\n    expect(s.length()).toBe(0);\n    s.push(100);\n    expect(s.length()).toBe(1);\n    s.push(200);\n    expect(s.length()).toBe(2);\n    s.pop();\n    expect(s.length()).toBe(1);\n    s.push(300);\n    expect(s.length()).toBe(2);\n  });\n\n  test(\"peek()\", () => {\n    const s = new Stack();\n    expect(s.peek()).toBe(undefined);\n    s.push(100);\n    expect(s.peek()).toBe(100);\n    s.push(200);\n    expect(s.peek()).toBe(200);\n    s.pop();\n    expect(s.peek()).toBe(100);\n    s.push(300);\n    expect(s.peek()).toBe(300);\n    s.pop();\n    s.pop();\n    expect(s.peek()).toBe(undefined);\n  });\n});\n";

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
