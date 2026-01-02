// JS Starter Code
const jsStarterCode = "export default class LinkedList {\n  constructor() {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Adds an item to the head of the linked list.\n   * @param {*} value The item to be added to the head of the list.\n   */\n  insertHead(value) {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Adds an item to the tail of the linked list.\n   * @param {*} value The item to be added to the tail of the list.\n   */\n  insertTail(value) {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Remove the item in the given index and return its value or `undefined` if index is out of bound.\n   * @param {int} i The index of the item to be removed.\n   * @return {*} The value of the item in index i if it exists, `undefined` otherwise.\n   */\n  remove(i) {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Return the value of the item in the given index or `undefined` if index is out of bound.\n   * @param {int} i The index of the value of the item to be returned.\n   * @return {*} The value of the item in index i if it exists, `undefined` otherwise.\n   */\n  get(i) {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Return an array containing all the values of the items in the linked list from head to tail.\n   * @return {*} The array of all the values in the linked list from head to tail.\n   */\n  toArray() {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Return the length / number of elements in the linked list.\n   * @return {*} Length of the linked list.\n   */\n  length() {\n    throw \"Not implemented!\";\n  }\n}\n";

// TS Starter Code
const tsStarterCode = "export default class LinkedList<T> {\n  constructor() {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Adds an item to the head of the linked list.\n   * @param {T} value The item to be added to the head of the list.\n   */\n  insertHead(value: T): void {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Adds an item to the tail of the linked list.\n   * @param {T} value The item to be added to the tail of the list.\n   */\n  insertTail(value: T): void {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Remove the item in the given index and return its value or `undefined` if index is out of bounds.\n   * @param {number} i The index of the item to be removed.\n   * @return {T | undefined} The value at index i if it exists, `undefined` otherwise.\n   */\n  remove(i: number): T | undefined {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Return the value of the item at the given index or `undefined` if index is out of bounds.\n   * @param {number} i The index of the value to retrieve.\n   * @return {T | undefined} The value at index i if it exists, `undefined` otherwise.\n   */\n  get(i: number): T | undefined {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Return an array containing all the values in the linked list from head to tail.\n   * @return {Array<T>} The array of all values in the linked list from head to tail.\n   */\n  toArray(): Array<T> {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Return the number of elements in the linked list.\n   * @return {number} The length of the list.\n   */\n  length(): number {\n    throw \"Not implemented!\";\n  }\n}\n";

// JS Test Cases
const jsTestCode = "import LinkedList from \"./linked-list\";\n\ndescribe(\"LinkedList\", () => {\n  test(\"constructor\", () => {\n    const list = new LinkedList();\n    expect(list).toBeInstanceOf(LinkedList);\n  });\n\n  describe(\"insert\", () => {\n    test(\"insertHead()\", () => {\n      const list = new LinkedList();\n      list.insertHead(200);\n      list.insertHead(100);\n      expect(list.toArray()).toEqual([100, 200]);\n    });\n\n    test(\"insertTail()\", () => {\n      const list = new LinkedList();\n      list.insertTail(100);\n      list.insertTail(150);\n      list.insertTail(200);\n      expect(list.toArray()).toEqual([100, 150, 200]);\n    });\n  });\n\n  describe(\"get()\", () => {\n    test(\"returns correct value at valid index\", () => {\n      const list = new LinkedList();\n      list.insertTail(10);\n      list.insertTail(20);\n      expect(list.get(0)).toBe(10);\n      expect(list.get(1)).toBe(20);\n    });\n\n    test(\"returns undefined for out-of-bounds indexes\", () => {\n      const list = new LinkedList();\n      expect(list.get(0)).toBeUndefined();\n      list.insertTail(5);\n      expect(list.get(1)).toBeUndefined();\n    });\n  });\n\n  test(\"remove()\", () => {\n    const list = new LinkedList();\n    list.insertHead(100);\n    list.insertTail(200);\n    expect(list.remove(1)).toBe(200);\n    expect(list.length()).toEqual(1);\n    expect(list.remove(1)).toBe(undefined);\n    expect(list.length()).toEqual(1);\n  });\n\n  test(\"remove()\", () => {\n    const list = new LinkedList();\n    expect(list.length()).toEqual(0);\n    expect(list.toArray()).toEqual([]);\n    list.insertTail(2);\n    expect(list.length()).toEqual(1);\n    expect(list.toArray()).toEqual([2]);\n    list.remove(0);\n    expect(list.toArray()).toEqual([]);\n    expect(list.length()).toEqual(0);\n  });\n\n  test(\"mixed\", () => {\n    const linked = new LinkedList();\n    expect(linked.toArray()).toEqual([]);\n    linked.insertTail(1);\n    linked.insertHead(2);\n    expect(linked.toArray()).toEqual([2, 1]);\n    linked.insertTail(3);\n    expect(linked.toArray()).toEqual([2, 1, 3]);\n    expect(linked.get(1)).toBe(1);\n    expect(linked.get(2)).toBe(3);\n    expect(linked.remove(1)).toBe(1);\n    expect(linked.toArray()).toEqual([2, 3]);\n    expect(linked.remove(1)).toBe(3);\n    expect(linked.remove(4)).toBe(undefined);\n    expect(linked.remove(0)).toBe(2);\n    expect(linked.remove(0)).toBe(undefined);\n    expect(linked.toArray()).toEqual([]);\n  });\n});\n";

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
