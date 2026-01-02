// JS Starter Code
const jsStarterCode = "/**\n * @param {Record<string, Record<string, number>>} graph The adjacency list representing the graph with weights.\n * @param {string} source The source node from which to calculate shortest paths.\n * @return {Record<string, number>} A dictionary where keys are node labels and values are the shortest distances from the source node.\n */\nexport default function dijkstra(graph, source) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "/**\n * @param {Record<string, Record<string, number>>} graph The adjacency list representing the graph with weights.\n * @param {string} source The source node from which to calculate shortest paths.\n * @return {Record<string, number>} A dictionary where keys are node labels and values are the shortest distances from the source node.\n */\nexport default function dijkstra(\n  graph: Record<string, Record<string, number>>,\n  source: string,\n): Record<string, number> {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import dijkstra from \"./dijkstra\";\n\ndescribe(\"dijkstra\", () => {\n  test(\"empty graph\", () => {\n    expect(dijkstra({}, \"A\")).toEqual({});\n  });\n\n  test(\"graph with one node\", () => {\n    expect(dijkstra({ A: {} }, \"A\")).toEqual({ A: 0 });\n  });\n\n  test(\"graph with two nodes\", () => {\n    expect(dijkstra({ A: { B: 1 }, B: {} }, \"A\")).toEqual({ A: 0, B: 1 });\n    expect(dijkstra({ A: { B: 5 }, B: { A: 2 } }, \"A\")).toEqual({ A: 0, B: 5 });\n    expect(dijkstra({ A: { B: 5 }, B: { A: 2 } }, \"B\")).toEqual({ A: 2, B: 0 });\n  });\n\n  test(\"graphs with multiple nodes\", () => {\n    expect(\n      dijkstra({ A: { B: 1, C: 4 }, B: { D: 1 }, C: {}, D: {} }, \"A\"),\n    ).toEqual({\n      A: 0,\n      B: 1,\n      C: 4,\n      D: 2,\n    });\n    expect(\n      dijkstra({ A: { B: 2, C: 5 }, B: { C: 3 }, C: { D: 1 }, D: {} }, \"A\"),\n    ).toEqual({\n      A: 0,\n      B: 2,\n      C: 5,\n      D: 6,\n    });\n    expect(\n      dijkstra(\n        { A: { B: 1, C: 2 }, B: { C: 1, D: 2 }, C: { D: 5 }, D: {} },\n        \"A\",\n      ),\n    ).toEqual({\n      A: 0,\n      B: 1,\n      C: 2,\n      D: 3,\n    });\n  });\n\n  test(\"disjoint graphs\", () => {\n    expect(dijkstra({ A: { B: 3 }, B: {}, C: { D: 1 }, D: {} }, \"A\")).toEqual({\n      A: 0,\n      B: 3,\n      C: Infinity,\n      D: Infinity,\n    });\n    expect(dijkstra({ A: { B: 3 }, B: {}, C: { D: 1 }, D: {} }, \"C\")).toEqual({\n      A: Infinity,\n      B: Infinity,\n      C: 0,\n      D: 1,\n    });\n  });\n\n  test(\"graph with cycles\", () => {\n    expect(\n      dijkstra(\n        { A: { B: 1, C: 2 }, B: { A: 2 }, C: { D: 3 }, D: { A: 1 } },\n        \"A\",\n      ),\n    ).toEqual({\n      A: 0,\n      B: 1,\n      C: 2,\n      D: 5,\n    });\n    expect(\n      dijkstra(\n        { A: { B: 4, C: 1 }, B: { C: 2, D: 2 }, C: { D: 2 }, D: { A: 7 } },\n        \"A\",\n      ),\n    ).toEqual({\n      A: 0,\n      B: 4,\n      C: 1,\n      D: 3,\n    });\n  });\n});\n";

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
