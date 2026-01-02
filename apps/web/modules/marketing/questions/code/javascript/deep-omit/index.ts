// JS Starter Code
const jsStarterCode = "/**\n * @param {any} val\n * @param {Array<string>} keys\n * @returns any\n */\nexport default function deepOmit(val, keys) {\n  throw \"Not implemented\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function deepOmit(val: unknown, keys: Array<string>): unknown {\n  throw \"Not implemented\";\n}\n";

// JS Test Cases
const jsTestCode = "import deepOmit from \"./deep-omit\";\n\nconst data = {\n  a: 1,\n  b: 2,\n  c: {\n    d: 3,\n    e: 4,\n  },\n  f: [5, 6],\n};\n\ndescribe(\"deepOmit\", () => {\n  test(\"empty object\", () => {\n    expect(deepOmit({}, [])).toEqual({});\n  });\n\n  test(\"empty keys\", () => {\n    const data = {\n      a: 1,\n      b: 2,\n      c: {\n        d: 3,\n        e: 4,\n      },\n      f: [5, 6],\n    };\n    const result = deepOmit(data, []);\n    expect(result).toEqual(data);\n  });\n\n  describe(\"non-nested object\", () => {\n    test(\"single key\", () => {\n      const keysToOmit = [\"b\"];\n      const result = deepOmit(\n        {\n          a: 1,\n          b: 2,\n          c: 3,\n        },\n        keysToOmit,\n      );\n      expect(result).toEqual({\n        a: 1,\n        c: 3,\n      });\n    });\n\n    test(\"multiple keys\", () => {\n      const keysToOmit = [\"b\", \"c\", \"e\"];\n      const result = deepOmit(data, keysToOmit);\n      expect(result).toEqual({\n        a: 1,\n        f: [5, 6],\n      });\n    });\n  });\n\n  describe(\"nested objects\", () => {\n    test(\"remove from nested objects\", () => {\n      const nestedData = {\n        a: 1,\n        b: 2,\n        c: {\n          d: 3,\n          e: {\n            f: 4,\n            g: 5,\n          },\n        },\n      };\n      const keysToOmit = [\"b\", \"f\"];\n      const result = deepOmit(nestedData, keysToOmit);\n      const expected = {\n        a: 1,\n        c: {\n          d: 3,\n          e: {\n            g: 5,\n          },\n        },\n      };\n      expect(result).toEqual(expected);\n    });\n\n    test(\"remove entire nested object\", () => {\n      const nestedData = {\n        a: 1,\n        b: 2,\n        c: {\n          d: 3,\n          e: {\n            f: 4,\n            g: 5,\n          },\n        },\n      };\n      const keysToOmit = [\"e\"];\n      const result = deepOmit(nestedData, keysToOmit);\n      const expected = {\n        a: 1,\n        b: 2,\n        c: {\n          d: 3,\n        },\n      };\n      expect(result).toEqual(expected);\n    });\n\n    test(\"remove all keys from object\", () => {\n      const nestedData = {\n        a: 1,\n        b: 2,\n        c: {\n          d: 3,\n          e: {\n            f: 4,\n            g: 5,\n          },\n        },\n      };\n      const keysToOmit = [\"d\", \"e\"];\n      const result = deepOmit(nestedData, keysToOmit);\n      const expected = {\n        a: 1,\n        b: 2,\n        c: {},\n      };\n      expect(result).toEqual(expected);\n    });\n  });\n\n  describe(\"arrays\", () => {\n    test(\"basic\", () => {\n      const dataWithArray = {\n        a: 1,\n        b: [2, 3],\n        c: {\n          d: 4,\n          e: [5, 6],\n        },\n      };\n      const keysToOmit = [\"b\", \"e\"];\n      const result = deepOmit(dataWithArray, keysToOmit);\n      const expected = {\n        a: 1,\n        c: {\n          d: 4,\n        },\n      };\n      expect(result).toEqual(expected);\n    });\n\n    test(\"objects within arrays\", () => {\n      const dataWithArray = {\n        a: 1,\n        b: [{ c: 2 }, 3],\n        c: [{ a: 2, b: 3 }],\n      };\n      const keysToOmit = [\"b\", \"e\"];\n      const result = deepOmit(dataWithArray, keysToOmit);\n      const expected = {\n        a: 1,\n        c: [{ a: 2 }],\n      };\n      expect(result).toEqual(expected);\n    });\n\n    test(\"arrays within arrays\", () => {\n      const dataWithArray = {\n        a: 1,\n        b: [{ c: 2 }, [3]],\n        c: [[{ a: 2, b: 3 }]],\n      };\n      const keysToOmit = [\"b\", \"e\"];\n      const result = deepOmit(dataWithArray, keysToOmit);\n      const expected = {\n        a: 1,\n        c: [[{ a: 2 }]],\n      };\n      expect(result).toEqual(expected);\n    });\n  });\n\n  test(\"should not mutate the original object\", () => {\n    const keysToOmit = [\"b\", \"c\", \"e\"];\n    deepOmit(data, keysToOmit);\n    expect(data).toEqual({\n      a: 1,\n      b: 2,\n      c: {\n        d: 3,\n        e: 4,\n      },\n      f: [5, 6],\n    });\n  });\n});\n";

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
