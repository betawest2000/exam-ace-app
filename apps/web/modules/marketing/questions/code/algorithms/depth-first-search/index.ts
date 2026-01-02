// JS Starter Code
const jsStarterCode = "/**\n * @param {Record<string, Array<string>} graph The adjacency list representing the graph.\n * @param {string} source The source node to start traversal from. It has to exist as a node in the graph.\n * @return {Array<string>} A DFS-traversed order of nodes.\n */\nexport default function depthFirstSearch(graph, source) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function depthFirstSearch(\n  graph: Record<string, Array<string>>,\n  source: string,\n): Array<string> {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import depthFirstSearch from \"./depth-first-search\";\n\ndescribe(\"depthFirstSearch\", () => {\n  test(\"empty graph\", () => {\n    expect(depthFirstSearch({}, \"A\")).toEqual([]);\n  });\n\n  test(\"graphs with one node\", () => {\n    expect(depthFirstSearch({ A: [] }, \"A\")).toEqual([\"A\"]);\n  });\n\n  test(\"graphs with two nodes\", () => {\n    expect(depthFirstSearch({ A: [\"B\"], B: [] }, \"A\")).toEqual([\"A\", \"B\"]);\n    expect(depthFirstSearch({ A: [\"A\", \"B\"], B: [] }, \"A\")).toEqual([\"A\", \"B\"]);\n    expect(depthFirstSearch({ A: [\"A\", \"B\"], B: [] }, \"B\")).toEqual([\"B\"]);\n    expect(depthFirstSearch({ A: [\"A\", \"B\"], B: [\"A\"] }, \"B\")).toEqual([\n      \"B\",\n      \"A\",\n    ]);\n  });\n\n  test(\"graphs with multiple nodes\", () => {\n    expect(depthFirstSearch({ A: [\"B\"], B: [\"C\"], C: [] }, \"A\")).toEqual([\n      \"A\",\n      \"B\",\n      \"C\",\n    ]);\n    expect(depthFirstSearch({ A: [\"B\", \"C\"], B: [], C: [] }, \"A\")).toEqual([\n      \"A\",\n      \"B\",\n      \"C\",\n    ]);\n    expect(\n      depthFirstSearch(\n        { A: [\"B\", \"C\"], B: [], C: [], D: [\"B\"], E: [\"C\"] },\n        \"A\",\n      ),\n    ).toEqual([\"A\", \"B\", \"C\"]);\n    expect(\n      depthFirstSearch(\n        { A: [\"D\", \"E\"], B: [], C: [], D: [\"B\"], E: [\"C\"] },\n        \"A\",\n      ),\n    ).toEqual([\"A\", \"D\", \"B\", \"E\", \"C\"]);\n    expect(\n      depthFirstSearch(\n        {\n          A: [\"D\", \"E\"],\n          B: [\"A\", \"B\", \"C\", \"D\", \"E\"],\n          C: [],\n          D: [\"B\"],\n          E: [\"C\"],\n        },\n        \"A\",\n      ),\n    ).toEqual([\"A\", \"D\", \"B\", \"C\", \"E\"]);\n    expect(\n      depthFirstSearch(\n        {\n          A: [\"A\", \"B\", \"C\", \"D\", \"E\"],\n          B: [],\n          C: [],\n          D: [\"B\"],\n          E: [\"C\"],\n        },\n        \"A\",\n      ),\n    ).toEqual([\"A\", \"B\", \"C\", \"D\", \"E\"]);\n    // Graph taken from https://www.geeksforgeeks.org/breadth-first-traversal-for-a-graph/\n    const graph = {\n      A: [\"B\", \"C\"],\n      B: [\"A\", \"D\", \"E\"],\n      C: [\"A\", \"E\"],\n      D: [\"B\", \"E\", \"F\"],\n      E: [\"B\", \"C\", \"D\", \"F\"],\n      F: [\"D\", \"E\"],\n    };\n    expect(depthFirstSearch(graph, \"A\")).toEqual([\n      \"A\",\n      \"B\",\n      \"D\",\n      \"E\",\n      \"C\",\n      \"F\",\n    ]);\n    expect(depthFirstSearch(graph, \"B\")).toEqual([\n      \"B\",\n      \"A\",\n      \"C\",\n      \"E\",\n      \"D\",\n      \"F\",\n    ]);\n    expect(depthFirstSearch(graph, \"C\")).toEqual([\n      \"C\",\n      \"A\",\n      \"B\",\n      \"D\",\n      \"E\",\n      \"F\",\n    ]);\n    expect(depthFirstSearch(graph, \"D\")).toEqual([\n      \"D\",\n      \"B\",\n      \"A\",\n      \"C\",\n      \"E\",\n      \"F\",\n    ]);\n    expect(depthFirstSearch(graph, \"E\")).toEqual([\n      \"E\",\n      \"B\",\n      \"A\",\n      \"C\",\n      \"D\",\n      \"F\",\n    ]);\n    expect(depthFirstSearch(graph, \"F\")).toEqual([\n      \"F\",\n      \"D\",\n      \"B\",\n      \"A\",\n      \"C\",\n      \"E\",\n    ]);\n  });\n\n  test(\"disjoint graphs\", () => {\n    expect(depthFirstSearch({ A: [\"B\"], B: [], C: [], D: [\"C\"] }, \"A\")).toEqual(\n      [\"A\", \"B\"],\n    );\n    expect(depthFirstSearch({ A: [\"B\"], B: [], C: [], D: [\"C\"] }, \"C\")).toEqual(\n      [\"C\"],\n    );\n    expect(depthFirstSearch({ A: [\"B\"], B: [], C: [], D: [\"C\"] }, \"D\")).toEqual(\n      [\"D\", \"C\"],\n    );\n  });\n\n  test(\"cyclic graphs\", () => {\n    expect(depthFirstSearch({ A: [\"A\"] }, \"A\")).toEqual([\"A\"]);\n    expect(\n      depthFirstSearch(\n        {\n          A: [\"B\", \"C\", \"D\"],\n          B: [\"E\", \"F\"],\n          C: [\"G\", \"H\"],\n          D: [\"I\", \"J\"],\n          E: [\"D\"],\n          F: [],\n          G: [],\n          H: [],\n          I: [],\n          J: [],\n        },\n        \"A\",\n      ),\n    ).toEqual([\"A\", \"B\", \"E\", \"D\", \"I\", \"J\", \"F\", \"C\", \"G\", \"H\"]);\n    expect(\n      depthFirstSearch(\n        {\n          A: [\"B\", \"C\", \"D\"],\n          B: [\"E\", \"F\"],\n          C: [\"G\", \"H\"],\n          D: [\"I\", \"J\"],\n          E: [\"D\"],\n          F: [],\n          G: [],\n          H: [],\n          I: [],\n          J: [],\n        },\n        \"B\",\n      ),\n    ).toEqual([\"B\", \"E\", \"D\", \"I\", \"J\", \"F\"]);\n    expect(\n      depthFirstSearch(\n        {\n          A: [\"B\", \"C\"],\n          B: [\"D\", \"E\"],\n          C: [\"F\", \"G\"],\n          D: [],\n          E: [],\n          F: [],\n          G: [],\n        },\n        \"A\",\n      ),\n    ).toEqual([\"A\", \"B\", \"D\", \"E\", \"C\", \"F\", \"G\"]);\n    expect(\n      depthFirstSearch(\n        {\n          A: [\"B\", \"C\"],\n          B: [\"D\", \"E\"],\n          C: [\"F\", \"G\"],\n          D: [],\n          E: [],\n          F: [],\n          G: [],\n        },\n        \"E\",\n      ),\n    ).toEqual([\"E\"]);\n  });\n});\n";

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
