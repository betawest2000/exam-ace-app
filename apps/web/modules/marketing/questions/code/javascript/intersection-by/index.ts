// JS Starter Code
const jsStarterCode = "/**\n * @param {Function} iteratee - The iteratee function to apply to each value.\n * @param {Array[]} arrays - The arrays to perform the intersection on.\n * @returns {Array} - A new array containing the unique values present in all given arrays.\n */\nexport default function intersectionBy(iteratee, ...arrays) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function intersectionBy<T, R>(\n  iteratee: (value: T) => R,\n  ...arrays: Array<Array<T>>\n): Array<T> {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import intersectionBy from \"./intersection-by\";\n\ndescribe(\"intersectionBy\", () => {\n  test(\"empty arrays\", () => {\n    const arr1: Array<number> = [];\n    const arr2: Array<number> = [1, 2, 3];\n    const arr3: Array<number> = [];\n    const iteratee = String;\n\n    expect(intersectionBy(iteratee, arr1, arr2, arr3)).toEqual([]);\n  });\n\n  test(\"intersection of arrays based on iteratee function\", () => {\n    const arr1 = [2.1, 1.2];\n    const arr2 = [2.3, 3.4];\n    const arr3 = [4.5, 2.6];\n    const iteratee = Math.floor;\n\n    expect(intersectionBy(iteratee, arr1, arr2, arr3)).toEqual([2.1]);\n  });\n\n  test(\"no intersection\", () => {\n    const arr1 = [1, 2, 3];\n    const arr2 = [4, 5, 6];\n    const arr3 = [7, 8, 9];\n    const iteratee = String;\n\n    expect(intersectionBy(iteratee, arr1, arr2, arr3)).toEqual([]);\n  });\n\n  test(\"single array\", () => {\n    const arr1 = [1, 2.5, 3, 7.8];\n    const iteratee = Math.floor;\n\n    expect(intersectionBy(iteratee, arr1)).toEqual([1, 2.5, 3, 7.8]);\n  });\n\n  test(\"multiple intersections\", () => {\n    const arr1 = [1.2, 2.3, 3.4];\n    const arr2 = [2.1, 1.2, 4.5];\n    const arr3 = [1.2, 4.5, 2.3, 3.4];\n    const iteratee = Math.floor;\n\n    expect(intersectionBy(iteratee, arr1, arr2, arr3)).toEqual([1.2, 2.3]);\n  });\n\n  test(\"non-primitive values\", () => {\n    const arr1 = [{ id: 1 }, { id: 2 }];\n    const arr2 = [{ id: 2 }, { id: 3 }];\n    const iteratee = (obj: { id: number }) => obj.id;\n\n    expect(intersectionBy(iteratee, arr1, arr2)).toEqual([{ id: 2 }]);\n  });\n\n  test(\"different iteratee values\", () => {\n    const arr1 = [\"apple\", \"banana\", \"pear\"];\n    const arr2 = [\"orange\", \"kiwi\", \"banana\"];\n    const arr3 = [\"grape\", \"pear\", \"watermelon\"];\n    const iteratee = (value: string) => value.length;\n\n    expect(intersectionBy(iteratee, arr1, arr2, arr3)).toEqual([\"pear\"]);\n  });\n\n  test(\"same iteratee values in one array\", () => {\n    expect(\n      intersectionBy(\n        (str) => str.toLowerCase(),\n        [\"apple\", \"banana\", \"ORANGE\", \"orange\"],\n        [\"Apple\", \"Banana\", \"Orange\"],\n      ),\n    ).toEqual([\"apple\", \"banana\", \"ORANGE\"]);\n  });\n});\n";

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
