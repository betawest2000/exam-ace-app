// JS Starter Code
const jsStarterCode = "/**\n * @param {string} text\n * @param {string} query\n * @return {string}\n */\nexport default function textSearch(text, query) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function textSearch(text: string, query: string): string {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import textSearch from \"./text-search\";\n\ndescribe(\"textSearch\", () => {\n  test(\"empty string\", () => {\n    expect(textSearch(\"\", \"\")).toBe(\"\");\n    expect(textSearch(\"\", \"xyz\")).toBe(\"\");\n  });\n\n  test(\"empty query\", () => {\n    expect(textSearch(\"\", \"\")).toBe(\"\");\n    expect(textSearch(\"The quick brown fox jumps over the lazy dog\", \"\")).toBe(\n      \"The quick brown fox jumps over the lazy dog\",\n    );\n  });\n\n  test(\"no matches\", () => {\n    expect(textSearch(\"The quick brown fox jumps over the lazy dog\", \"\")).toBe(\n      \"The quick brown fox jumps over the lazy dog\",\n    );\n    expect(\n      textSearch(\"The quick brown fox jumps over the lazy dog\", \"aaa\"),\n    ).toBe(\"The quick brown fox jumps over the lazy dog\");\n    expect(\n      textSearch(\"The quick brown fox jumps over the lazy dog\", \"abc\"),\n    ).toBe(\"The quick brown fox jumps over the lazy dog\");\n    expect(\n      textSearch(\"The quick brown fox jumps over the lazy dog\", \"dogo\"),\n    ).toBe(\"The quick brown fox jumps over the lazy dog\");\n  });\n\n  describe(\"matches\", () => {\n    test(\"exact match\", () => {\n      expect(\n        textSearch(\"The quick brown fox jumps over the lazy dog\", \"quick\"),\n      ).toBe(\"The <b>quick</b> brown fox jumps over the lazy dog\");\n      expect(\n        textSearch(\"The quick brown fox jumps over the lazy dog\", \"jumps\"),\n      ).toBe(\"The quick brown fox <b>jumps</b> over the lazy dog\");\n    });\n\n    test(\"case-insensitive match\", () => {\n      expect(\n        textSearch(\"The Quick Brown Fox Jumps Over The Lazy Dog\", \"fox\"),\n      ).toBe(\"The Quick Brown <b>Fox</b> Jumps Over The Lazy Dog\");\n      expect(\n        textSearch(\"The Quick Brown Fox Jumps Over The Lazy Dog\", \"QUICK\"),\n      ).toBe(\"The <b>Quick</b> Brown Fox Jumps Over The Lazy Dog\");\n    });\n\n    test(\"partial match\", () => {\n      expect(\n        textSearch(\"The quick brown fox jumps over the lazy dog\", \"jump\"),\n      ).toBe(\"The quick brown fox <b>jump</b>s over the lazy dog\");\n      expect(\n        textSearch(\"The quick brown fox jumps over the lazy dog\", \"he\"),\n      ).toBe(\"T<b>he</b> quick brown fox jumps over t<b>he</b> lazy dog\");\n    });\n\n    test(\"characters do not match the same word more than once\", () => {\n      expect(textSearch(\"aaabbcc\", \"aa\")).toBe(\"<b>aa</b>abbcc\");\n    });\n\n    test(\"consecutive matches have combined tags\", () => {\n      expect(textSearch(\"aabbcc\", \"a\")).toBe(\"<b>aa</b>bbcc\");\n      expect(textSearch(\"aabbbbcc\", \"bb\")).toBe(\"aa<b>bbbb</b>cc\");\n    });\n  });\n});\n";

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
