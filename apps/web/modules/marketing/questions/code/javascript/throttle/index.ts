// JS Starter Code
const jsStarterCode = "/**\n * @callback func\n * @param {number} wait\n * @return {Function}\n */\nexport default function throttle(func, wait) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "type ThrottleFunction<T extends any[]> = (...args: T) => any;\n\nexport default function throttle<T extends any[]>(\n  func: ThrottleFunction<T>,\n  wait: number,\n): ThrottleFunction<T> {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import throttle from \"./throttle\";\n\ndescribe(\"throttle\", () => {\n  test(\"can be initialized\", () => {\n    const increment = throttle(() => {}, 50);\n    expect(increment).toBeInstanceOf(Function);\n  });\n\n  test(\"invokes callback immediately\", () => {\n    let i = 0;\n    const increment = throttle(() => {\n      i++;\n    }, 50);\n\n    expect(i).toBe(0);\n    increment();\n    expect(i).toBe(1);\n  });\n\n  test(\"throttles immediate invocations\", () => {\n    let i = 0;\n    const increment = throttle(() => {\n      i++;\n    }, 50);\n\n    expect(i).toBe(0);\n    increment();\n    expect(i).toBe(1);\n    increment();\n    expect(i).toBe(1);\n  });\n\n  test(\"throttles delayed invocations\", (done) => {\n    let i = 0;\n    const increment = throttle(() => {\n      i++;\n    }, 100);\n\n    expect(i).toBe(0);\n    increment();\n    expect(i).toBe(1);\n\n    setTimeout(() => {\n      increment();\n      expect(i).toBe(1);\n    }, 25);\n\n    setTimeout(() => {\n      increment();\n      expect(i).toBe(1);\n      done();\n    }, 50);\n  });\n\n  test(\"uses arguments\", () => {\n    let i = 21;\n    const increment = throttle((a, b) => {\n      i += a * b;\n    }, 50);\n\n    expect(i).toBe(21);\n    increment(3, 7);\n    expect(i).toBe(42);\n  });\n\n  test(\"can be called again after first throttling window\", (done) => {\n    let i = 0;\n    const increment = throttle(() => {\n      i++;\n    }, 100);\n\n    expect(i).toBe(0);\n    increment();\n    expect(i).toBe(1);\n\n    // Should not fire yet.\n    setTimeout(() => {\n      expect(i).toBe(1);\n      increment();\n      expect(i).toBe(1);\n    }, 50);\n\n    setTimeout(() => {\n      expect(i).toBe(1);\n      increment();\n      expect(i).toBe(2);\n    }, 150);\n\n    setTimeout(() => {\n      expect(i).toBe(2);\n      increment();\n      expect(i).toBe(2);\n      done();\n    }, 200);\n  });\n\n  test(\"callbacks can access `this`\", (done) => {\n    const increment = throttle(function (delta) {\n      this.val += delta;\n    }, 50);\n\n    const obj = {\n      val: 2,\n      increment,\n    };\n\n    expect(obj.val).toBe(2);\n    obj.increment(3);\n    expect(obj.val).toBe(5);\n\n    setTimeout(() => {\n      obj.increment(10);\n      expect(obj.val).toBe(15);\n      done();\n    }, 100);\n  });\n});\n";

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
