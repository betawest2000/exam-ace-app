// JS Starter Code
const jsStarterCode = "export default class Turtle {\n  constructor() {\n    throw \"Not implemented\";\n  }\n\n  /**\n   * @param {number} distance Distance to move forward while facing the current direction.\n   * @return {Turtle}\n   */\n  forward(distance) {\n    throw \"Not implemented\";\n  }\n\n  /**\n   * @param {number} distance Distance to move backward while facing the current direction.\n   * @return {Turtle}\n   */\n  backward(distance) {\n    throw \"Not implemented\";\n  }\n\n  /**\n   * Turns the turtle left.\n   * @return {Turtle}\n   */\n  left() {\n    throw \"Not implemented\";\n  }\n\n  /**\n   * Turns the turtle right.\n   * @return {Turtle}\n   */\n  right() {\n    throw \"Not implemented\";\n  }\n\n  /**\n   * @return {[number, number]} Coordinates [x, y]\n   */\n  position() {\n    throw \"Not implemented\";\n  }\n}\n";

// TS Starter Code
const tsStarterCode = "export default class Turtle {\n  constructor() {\n    throw \"Not implemented\";\n  }\n\n  /**\n   * @param {number} distance Distance to move forward while facing the current direction.\n   * @return {Turtle}\n   */\n  forward(distance: number): Turtle {\n    throw \"Not implemented\";\n  }\n\n  /**\n   * @param {number} distance Distance to move backward while facing the current direction.\n   * @return {Turtle}\n   */\n  backward(distance: number): Turtle {\n    throw \"Not implemented\";\n  }\n\n  /**\n   * Turns the turtle left.\n   * @return {Turtle}\n   */\n  left(): Turtle {\n    throw \"Not implemented\";\n  }\n\n  /**\n   * Turns the turtle right.\n   * @return {Turtle}\n   */\n  right(): Turtle {\n    throw \"Not implemented\";\n  }\n\n  /**\n   * @return {[number, number]} Coordinates [x, y]\n   */\n  position(): [number, number] {\n    throw \"Not implemented\";\n  }\n}\n";

// JS Test Cases
const jsTestCode = "import Turtle from \"./turtle\";\n\ndescribe(\"turtle\", () => {\n  test(\"constructor\", () => {\n    const turtle = new Turtle();\n    expect(turtle).toBeInstanceOf(Turtle);\n  });\n\n  describe(\"movement\", () => {\n    test(\"forward\", () => {\n      const turtle = new Turtle();\n      turtle.forward(2);\n      expect(turtle.position()).toEqual([0, 2]);\n      turtle.forward(3);\n      expect(turtle.position()).toEqual([0, 5]);\n    });\n\n    test(\"backward\", () => {\n      const turtle = new Turtle();\n      turtle.backward(2);\n      expect(turtle.position()).toEqual([0, -2]);\n      turtle.backward(3);\n      expect(turtle.position()).toEqual([0, -5]);\n    });\n  });\n\n  describe(\"turning\", () => {\n    test(\"left\", () => {\n      const turtle = new Turtle();\n      turtle.left();\n      turtle.forward(3);\n      expect(turtle.position()).toEqual([-3, 0]);\n      turtle.backward(3);\n      expect(turtle.position()).toEqual([0, 0]);\n      turtle.left();\n      turtle.forward(5);\n      expect(turtle.position()).toEqual([0, -5]);\n      turtle.left();\n      turtle.forward(3);\n      expect(turtle.position()).toEqual([3, -5]);\n    });\n\n    test(\"right\", () => {\n      const turtle = new Turtle();\n      turtle.right();\n      turtle.forward(3);\n      expect(turtle.position()).toEqual([3, 0]);\n      turtle.backward(3);\n      expect(turtle.position()).toEqual([0, 0]);\n      turtle.right();\n      turtle.forward(5);\n      expect(turtle.position()).toEqual([0, -5]);\n      turtle.right();\n      turtle.forward(3);\n      expect(turtle.position()).toEqual([-3, -5]);\n    });\n  });\n\n  test(\"position\", () => {\n    const turtle = new Turtle();\n    expect(turtle.position()).toEqual([0, 0]);\n    turtle.forward(1);\n    expect(turtle.position()).toEqual([0, 1]);\n  });\n\n  describe(\"method chaining\", () => {\n    test(\"turning\", () => {\n      const turtle = new Turtle();\n      turtle.left().left().left().right().right().right().forward(3);\n      expect(turtle.position()).toEqual([0, 3]);\n      turtle.right().right().right().left().left().left().forward(3);\n      expect(turtle.position()).toEqual([0, 6]);\n    });\n\n    test(\"forward and backward\", () => {\n      const turtle = new Turtle();\n      turtle.right().forward(3);\n      expect(turtle.position()).toEqual([3, 0]);\n      turtle.backward(3);\n      expect(turtle.position()).toEqual([0, 0]);\n      turtle.right().forward(5);\n      expect(turtle.position()).toEqual([0, -5]);\n      turtle.left().backward(3);\n      expect(turtle.position()).toEqual([-3, -5]);\n    });\n  });\n});\n";

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
