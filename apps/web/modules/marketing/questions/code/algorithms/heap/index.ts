// JS Starter Code
const jsStarterCode = "export default class Heap {\n  constructor(array = []) {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Constructs the initial heap structure with a given `array`.\n   * @param {Array} array The initial array.\n   */\n  heapify(array) {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Adds an item into the heap.\n   * @param {*} item The item to be added into the heap.\n   */\n  insert(value) {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Removes the top of the heap / maximum element.\n   * @return {*} The element removed.\n   */\n  delete() {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Returns the value of the maximum element.\n   * @return {number} The maximum element.\n   */\n  findMax() {\n    throw \"Not implemented!\";\n  }\n}\n";

// TS Starter Code
const tsStarterCode = "export default class Heap<T> {\n  constructor(array: T[] = []) {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Constructs the initial heap structure with a given `array`.\n   * @param array The initial array to be used for the heap.\n   */\n  heapify(array: T[]): void {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Adds an item to the heap.\n   * @param value The item to be added into the heap.\n   */\n  insert(value: T): void {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Removes the top of the heap / maximum element.\n   * @return The element removed, or undefined if the heap is empty.\n   */\n  delete(): T | undefined {\n    throw \"Not implemented!\";\n  }\n\n  /**\n   * Returns the value of the maximum element.\n   * @return The maximum element.\n   */\n  findMax(): T | undefined {\n    throw \"Not implemented!\";\n  }\n}\n";

// JS Test Cases
const jsTestCode = "import Heap from \"./heap\";\n\ndescribe(\"Heap\", () => {\n  test(\"constructor\", () => {\n    const heap = new Heap<number>();\n    expect(heap instanceof Heap).toBeTruthy();\n  });\n\n  test(\"insert and findMax\", () => {\n    const heap = new Heap<number>();\n    heap.insert(100);\n    expect(heap.findMax()).toBe(100);\n    heap.insert(200);\n    expect(heap.findMax()).toBe(200);\n    heap.insert(50);\n    expect(heap.findMax()).toBe(200);\n  });\n\n  test(\"delete functionality\", () => {\n    const heap = new Heap<number>();\n    heap.insert(300);\n    heap.insert(100);\n    heap.insert(200);\n    expect(heap.delete()).toBe(300);\n    expect(heap.findMax()).toBe(200);\n    expect(heap.delete()).toBe(200);\n    expect(heap.findMax()).toBe(100);\n    heap.insert(400);\n    expect(heap.delete()).toBe(400);\n    expect(heap.findMax()).toBe(100);\n  });\n\n  test(\"heapify from array\", () => {\n    const array = [5, 3, 17, 10, 84, 19, 6, 22, 9];\n    const heap = new Heap<number>(array);\n    expect(heap.findMax()).toBe(84);\n    expect(heap.delete()).toBe(84);\n    expect(heap.findMax()).toBe(22);\n  });\n\n  test(\"complex insert and delete sequence\", () => {\n    const heap = new Heap<number>();\n    heap.insert(20);\n    heap.insert(15);\n    heap.insert(30);\n    heap.insert(10);\n    expect(heap.findMax()).toBe(30);\n    expect(heap.delete()).toBe(30);\n    expect(heap.findMax()).toBe(20);\n    heap.insert(35);\n    heap.insert(45);\n    expect(heap.delete()).toBe(45);\n    expect(heap.findMax()).toBe(35);\n  });\n\n  test(\"delete on empty heap\", () => {\n    const heap = new Heap<number>();\n    expect(heap.delete()).toBeUndefined();\n  });\n\n  test(\"maintaining state after multiple operations\", () => {\n    const heap = new Heap<number>();\n    heap.insert(50);\n    heap.insert(30);\n    heap.insert(60);\n    expect(heap.delete()).toBe(60);\n    heap.insert(55);\n    heap.insert(65);\n    expect(heap.findMax()).toBe(65);\n    expect(heap.delete()).toBe(65);\n    expect(heap.findMax()).toBe(55);\n  });\n\n  test(\"integration test of operations\", () => {\n    const heap = new Heap<number>();\n    heap.insert(5);\n    heap.insert(3);\n    heap.insert(17);\n    heap.insert(10);\n    heap.insert(84);\n    heap.insert(19);\n    heap.insert(6);\n    heap.insert(22);\n    heap.insert(9);\n    expect(heap.delete()).toBe(84);\n    expect(heap.findMax()).toBe(22);\n    heap.insert(55);\n    expect(heap.findMax()).toBe(55);\n    expect(heap.delete()).toBe(55);\n    expect(heap.findMax()).toBe(22);\n  });\n});\n";

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
