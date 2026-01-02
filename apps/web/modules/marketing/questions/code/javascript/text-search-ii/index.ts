// JS Starter Code
const jsStarterCode = "/**\n * @param {string} text\n * @param {Array<string>} queries\n * @return {string}\n */\nexport default function textSearch(text, queries) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "export default function textSearch(\n  text: string,\n  queries: Array<string>,\n): string {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import textSearch from \"./text-search-ii\";\n\ndescribe(\"textSearch\", () => {\n  test(\"empty string\", () => {\n    expect(textSearch(\"\", [])).toBe(\"\");\n    expect(textSearch(\"\", [\"\"])).toBe(\"\");\n    expect(textSearch(\"\", [\"xyz\"])).toBe(\"\");\n    expect(textSearch(\"\", [\"xyz\", \"456\"])).toBe(\"\");\n  });\n\n  test(\"empty queries\", () => {\n    expect(textSearch(\"\", [])).toBe(\"\");\n    expect(textSearch(\"The quick brown fox jumps over the lazy dog\", [])).toBe(\n      \"The quick brown fox jumps over the lazy dog\",\n    );\n    expect(\n      textSearch(\"The quick brown fox jumps over the lazy dog\", [\"\"]),\n    ).toBe(\"The quick brown fox jumps over the lazy dog\");\n  });\n\n  test(\"no matching queries\", () => {\n    expect(textSearch(\"The quick brown fox jumps over the lazy dog\", [])).toBe(\n      \"The quick brown fox jumps over the lazy dog\",\n    );\n    expect(\n      textSearch(\"The quick brown fox jumps over the lazy dog\", [\"aaa\"]),\n    ).toBe(\"The quick brown fox jumps over the lazy dog\");\n    expect(\n      textSearch(\"The quick brown fox jumps over the lazy dog\", [\"abc\"]),\n    ).toBe(\"The quick brown fox jumps over the lazy dog\");\n  });\n\n  describe(\"matching queries\", () => {\n    test(\"case-insensitive match\", () => {\n      expect(\n        textSearch(\"The Quick Brown Fox Jumps Over The Lazy Dog\", [\"fox\"]),\n      ).toBe(\"The Quick Brown <b>Fox</b> Jumps Over The Lazy Dog\");\n      expect(\n        textSearch(\"The Quick Brown Fox Jumps Over The Lazy Dog\", [\n          \"fox\",\n          \"quick\",\n        ]),\n      ).toBe(\"The <b>Quick</b> Brown <b>Fox</b> Jumps Over The Lazy Dog\");\n      expect(\n        textSearch(\"The Quick Brown Fox Jumps Over The Lazy Dog\", [\"QUICK\"]),\n      ).toBe(\"The <b>Quick</b> Brown Fox Jumps Over The Lazy Dog\");\n    });\n\n    test(\"single whole queries\", () => {\n      expect(\n        textSearch(\"The quick brown fox jumps over the lazy dog\", [\"quick\"]),\n      ).toBe(\"The <b>quick</b> brown fox jumps over the lazy dog\");\n      expect(\n        textSearch(\"The quick brown fox jumps over the lazy dog\", [\n          \"jumps\",\n          \"quick\",\n        ]),\n      ).toBe(\"The <b>quick</b> brown fox <b>jumps</b> over the lazy dog\");\n    });\n\n    test(\"single partial queries\", () => {\n      expect(\n        textSearch(\"The quick brown fox jumps over the lazy dog\", [\"jump\"]),\n      ).toBe(\"The quick brown fox <b>jump</b>s over the lazy dog\");\n      expect(\n        textSearch(\"The quick brown fox jumps over the lazy dog\", [\n          \"jump\",\n          \"he\",\n          \"own\",\n        ]),\n      ).toBe(\n        \"T<b>he</b> quick br<b>own</b> fox <b>jump</b>s over t<b>he</b> lazy dog\",\n      );\n    });\n\n    test(\"consecutive matches have combined tags\", () => {\n      expect(textSearch(\"aabbcc\", [\"a\"])).toBe(\"<b>aa</b>bbcc\");\n      expect(textSearch(\"aabbbbcc\", [\"bb\"])).toBe(\"aa<b>bbbb</b>cc\");\n      expect(textSearch(\"aabbcc\", [\"aa\", \"bb\"])).toBe(\"<b>aabb</b>cc\");\n      expect(textSearch(\"This is Uncopyrightable!\", [\"copy\", \"right\"])).toBe(\n        \"This is Un<b>copyright</b>able!\",\n      );\n      expect(\n        textSearch(\"The quick brown fox jumps over the lazy dog\", [\n          \"jumps \",\n          \" over\",\n        ]),\n      ).toBe(\"The quick brown fox <b>jumps over</b> the lazy dog\");\n    });\n\n    describe(\"complex queries\", () => {\n      test(\"characters do not match the same word more than once\", () => {\n        expect(textSearch(\"aaabbcc\", [\"aa\"])).toBe(\"<b>aa</b>abbcc\");\n      });\n\n      test(\"overlapping queries\", () => {\n        expect(textSearch(\"aaabbcc\", [\"aaa\", \"aab\"])).toBe(\"<b>aaab</b>bcc\");\n        expect(textSearch(\"aaabbcc\", [\"aa\", \"ab\"])).toBe(\"<b>aaab</b>bcc\");\n        expect(textSearch(\"I am a rexpert\", [\"rex\", \"expert\"])).toBe(\n          \"I am a <b>rexpert</b>\",\n        );\n      });\n\n      test(\"query within another query\", () => {\n        expect(textSearch(\"This lock is Unlockable\", [\"lock\", \"unlock\"])).toBe(\n          \"This <b>lock</b> is <b>Unlock</b>able\",\n        );\n      });\n    });\n\n    test(\"integration\", () => {\n      expect(\n        textSearch(\"This is Uncopyrightable!\", [\"COPY\", \"right\", \"tAbLe\"]),\n      ).toBe(\"This is Un<b>copyrightable</b>!\");\n    });\n  });\n});\n";

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
