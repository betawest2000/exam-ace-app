// JS Starter Code
const jsStarterCode = "/**\n * @param {Node} nodeA\n * @param {Node} nodeB\n * @return {boolean}\n */\nexport default function identicalDOMTrees(nodeA, nodeB) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function identicalDOMTrees(nodeA: Node, nodeB: Node): boolean {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import identicalDOMTrees from \"./identical-dom-trees\";\n\ndescribe(\"identicalDOMTrees\", () => {\n  test(\"single nodes\", () => {\n    const treeA = document.createElement(\"div\");\n    const treeB = document.createElement(\"div\");\n    expect(identicalDOMTrees(treeA, treeB)).toBe(true);\n  });\n\n  test(\"nodes with same children\", () => {\n    const treeA = new DOMParser().parseFromString(\n      `<div><span>Foo</span><p>Para</p></div>`,\n      \"text/html\",\n    );\n    const treeB = new DOMParser().parseFromString(\n      `<div><span>Foo</span><p>Para</p></div>`,\n      \"text/html\",\n    );\n    expect(identicalDOMTrees(treeA.body, treeB.body)).toBe(true);\n  });\n\n  test(\"nodes with different children\", () => {\n    const treeA = new DOMParser().parseFromString(\n      `<div><span>Foo</span><p>Para</p></div>`,\n      \"text/html\",\n    );\n    const treeB = new DOMParser().parseFromString(\n      `<div><span>Bar</span><p>Para</p></div>`,\n      \"text/html\",\n    );\n    expect(identicalDOMTrees(treeA.body, treeB.body)).toBe(false);\n  });\n\n  test(\"nodes with different tagnames\", () => {\n    const treeA = new DOMParser().parseFromString(\n      `<div>Foo</div>`,\n      \"text/html\",\n    );\n    const treeB = new DOMParser().parseFromString(`<p>Foo</p>`, \"text/html\");\n\n    expect(identicalDOMTrees(treeA.body, treeB.body)).toBe(false);\n  });\n\n  test(\"nodes with same attributes\", () => {\n    const treeA = new DOMParser().parseFromString(\n      `<div class=\"foo\" data-id=\"123\">hello</div>`,\n      \"text/html\",\n    );\n    const treeB = new DOMParser().parseFromString(\n      `<div class=\"foo\" data-id=\"123\">hello</div>`,\n      \"text/html\",\n    );\n\n    expect(identicalDOMTrees(treeA.body, treeB.body)).toBe(true);\n  });\n\n  test(\"nodes with different attributes\", () => {\n    const treeA = new DOMParser().parseFromString(\n      `<div class=\"foo\">hello</div>`,\n      \"text/html\",\n    );\n    const treeB = new DOMParser().parseFromString(\n      `<div class=\"bar\">hello</div>`,\n      \"text/html\",\n    );\n\n    expect(identicalDOMTrees(treeA.body, treeB.body)).toBe(false);\n  });\n\n  test(\"nodes with different styles\", () => {\n    const treeA = new DOMParser().parseFromString(\n      `<div style=\"color: red;\">hello</div>`,\n      \"text/html\",\n    );\n    const treeB = new DOMParser().parseFromString(\n      `<div style=\"color: blue;\">hello</div>`,\n      \"text/html\",\n    );\n\n    expect(identicalDOMTrees(treeA.body, treeB.body)).toBe(false);\n  });\n\n  test(\"nodes with different comment and text nodes\", () => {\n    const treeA = new DOMParser().parseFromString(\n      `<div><span>Foo</span><!-- comment --></div>`,\n      \"text/html\",\n    );\n    const treeB = new DOMParser().parseFromString(\n      `<div><span>Foo</span>text node</div>`,\n      \"text/html\",\n    );\n\n    expect(identicalDOMTrees(treeA.body, treeB.body)).toBe(false);\n  });\n\n  test(\"nodes with different numbers of children\", () => {\n    const treeA = new DOMParser().parseFromString(\n      `<div>\n        <span>Foo</span>\n        <p>Para</p>\n      </div>`,\n      \"text/html\",\n    );\n    const treeB = new DOMParser().parseFromString(\n      `<div>\n        <span>Foo</span>\n        <p>Para</p>\n        <div></div>\n      </div>`,\n      \"text/html\",\n    );\n    expect(identicalDOMTrees(treeA.body, treeB.body)).toBe(false);\n  });\n\n  test(\"nodes with nested elements\", () => {\n    const treeA = new DOMParser().parseFromString(\n      `<div>\n        <span>Foo</span>\n        <p>Para</p>\n        <div>\n          <span>Bar</span>\n          <p>Para</p>\n        </div>\n      </div>`,\n      \"text/html\",\n    );\n    const treeB = new DOMParser().parseFromString(\n      `<div>\n        <span>Foo</span>\n        <p>Para</p>\n        <div>\n          <span>Bar</span>\n          <p>Para</p>\n        </div>\n      </div>`,\n      \"text/html\",\n    );\n    expect(identicalDOMTrees(treeA.body, treeB.body)).toBe(true);\n  });\n\n  test(\"nodes with nested elements in different order\", () => {\n    const treeA = new DOMParser().parseFromString(\n      `<div>\n        <span>Foo</span>\n        <p>Para</p>\n        <div>\n          <span>Bar</span>\n          <p>Para</p>\n        </div>\n      </div>`,\n      \"text/html\",\n    );\n    const treeB = new DOMParser().parseFromString(\n      `<div>\n        <div>\n          <p>Para</p>\n          <span>Bar</span>\n        </div>\n        <span>Foo</span>\n        <p>Para</p>\n      </div>`,\n      \"text/html\",\n    );\n    expect(identicalDOMTrees(treeA.body, treeB.body)).toBe(false);\n  });\n});\n";

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
