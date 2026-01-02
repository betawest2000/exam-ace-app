// JS Starter Code
const jsStarterCode = "export default class BinarySearchTree {\n  constructor() {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Inserts a new value into the BST while maintaining BST properties.\n   * @param {*} value The value to be inserted into the BST.\n   */\n  insert(value) {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Searches for a value in the BST. Returns true if the value exists, false otherwise.\n   * @param {*} value The value to search for.\n   * @return {boolean} True if the value is found, false otherwise.\n   */\n  search(value) {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Deletes a value from the BST, if it exists, while maintaining BST properties.\n   * @param {*} value The value to be deleted from the BST.\n   */\n  delete(value) {\n    throw \"Not implemented!\";\n  }\n}\n";

// TS Starter Code
const tsStarterCode = "export default class BinarySearchTree<T> {\n  constructor() {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Inserts a new value into the BST while maintaining BST properties.\n   * @param value The value to be inserted into the BST.\n   */\n  insert(value: number): void {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Searches for a value in the BST. Returns true if the value exists, false otherwise.\n   * @param value The value to search for.\n   * @return True if the value is found, false otherwise.\n   */\n  search(value: number): boolean {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Deletes a value from the BST, if it exists, while maintaining BST properties.\n   * @param value The value to be deleted from the BST.\n   */\n  delete(value: number): void {\n    throw \"Not implemented!\";\n  }\n}\n";

// JS Test Cases
const jsTestCode = "import BST from \"./binary-search-tree\";\n\ndescribe(\"BST\", () => {\n  test(\"constructor\", () => {\n    const bst = new BST();\n    expect(bst instanceof BST).toBeTruthy();\n    expect(bst.root).toBeNull();\n  });\n\n  test(\"insert and search\", () => {\n    const bst = new BST();\n    bst.insert(100);\n    expect(bst.search(100)).toBeTruthy();\n    bst.insert(200);\n    expect(bst.search(200)).toBeTruthy();\n    bst.insert(50);\n    expect(bst.search(50)).toBeTruthy();\n  });\n\n  test(\"delete leaf node\", () => {\n    const bst = new BST();\n    bst.insert(50);\n    bst.insert(30);\n    bst.insert(70);\n    bst.delete(30);\n    expect(bst.search(30)).toBeFalsy();\n    expect(bst.root?.left).toBeNull();\n  });\n\n  test(\"delete node with one child\", () => {\n    const bst = new BST();\n    bst.insert(50);\n    bst.insert(30);\n    bst.insert(20);\n    bst.delete(30);\n    expect(bst.search(30)).toBeFalsy();\n    expect(bst.root?.left?.value).toBe(20);\n  });\n\n  test(\"delete node with two children\", () => {\n    const bst = new BST();\n    bst.insert(50);\n    bst.insert(30);\n    bst.insert(70);\n    bst.insert(20);\n    bst.insert(40);\n    bst.delete(30);\n    expect(bst.search(30)).toBeFalsy();\n    expect(bst.root?.left?.value).not.toBe(30);\n  });\n\n  test(\"delete root node\", () => {\n    const bst = new BST();\n    bst.insert(50);\n    bst.insert(30);\n    bst.insert(70);\n    bst.delete(50);\n    expect(bst.search(50)).toBeFalsy();\n    expect(bst.root?.value).not.toBe(50);\n  });\n\n  test(\"insert many and test structure\", () => {\n    const bst = new BST();\n    const values = [50, 30, 70, 20, 40, 60, 80];\n    values.forEach((value) => bst.insert(value));\n    expect(bst.root?.value).toBe(50);\n    expect(bst.root?.left?.value).toBe(30);\n    expect(bst.root?.right?.value).toBe(70);\n    expect(bst.root?.left?.left?.value).toBe(20);\n    expect(bst.root?.left?.right?.value).toBe(40);\n    expect(bst.root?.right?.left?.value).toBe(60);\n    expect(bst.root?.right?.right?.value).toBe(80);\n  });\n\n  test(\"search non-existent value\", () => {\n    const bst = new BST();\n    bst.insert(50);\n    expect(bst.search(100)).toBeFalsy();\n  });\n\n  test(\"complex insert and delete sequence\", () => {\n    const bst = new BST();\n    bst.insert(50);\n    bst.insert(30);\n    bst.insert(70);\n    bst.insert(20);\n    bst.insert(40);\n    bst.insert(60);\n    bst.insert(80);\n    bst.delete(70);\n    expect(bst.search(70)).toBeFalsy();\n    bst.delete(50);\n    expect(bst.search(50)).toBeFalsy();\n    bst.insert(35);\n    bst.insert(45);\n    expect(bst.search(35)).toBeTruthy();\n    expect(bst.search(45)).toBeTruthy();\n  });\n\n  test(\"delete on empty BST\", () => {\n    const bst = new BST();\n    bst.delete(100);\n    expect(bst.root).toBeNull();\n  });\n\n  test(\"maintaining state after multiple operations\", () => {\n    const bst = new BST();\n    bst.insert(50);\n    bst.insert(30);\n    bst.insert(60);\n    bst.delete(50);\n    bst.insert(55);\n    bst.insert(65);\n    expect(bst.search(55)).toBeTruthy();\n    expect(bst.search(65)).toBeTruthy();\n    bst.delete(65);\n    expect(bst.search(65)).toBeFalsy();\n  });\n\n  test(\"integration test of operations\", () => {\n    const bst = new BST();\n    bst.insert(50);\n    bst.insert(30);\n    bst.insert(70);\n    bst.insert(20);\n    bst.insert(60);\n    bst.insert(80);\n    bst.insert(40);\n    bst.delete(50);\n    expect(bst.search(50)).toBeFalsy();\n    bst.insert(55);\n    expect(bst.search(55)).toBeTruthy();\n    bst.delete(55);\n    expect(bst.search(55)).toBeFalsy();\n  });\n});\n";

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
