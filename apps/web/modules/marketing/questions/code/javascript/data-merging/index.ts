// JS Starter Code
const jsStarterCode = "/**\n * @param {Array<{user: number, duration: number, equipment: Array<string>}>} sessions\n * @return {Array}\n */\nexport default function mergeData(sessions) {\n  throw \"Not implemented!\";\n}\n";

// TS Starter Code
const tsStarterCode = "type Session = { user: number; duration: number; equipment: Array<string> };\n\nexport default function mergeData(sessions: Array<Session>): Array<Session> {\n  throw \"Not implemented!\";\n}\n";

// JS Test Cases
const jsTestCode = "import mergeData from \"./data-merging\";\n\nfunction dataSmall() {\n  return [\n    { user: 8, duration: 50, equipment: [\"bench\"] },\n    { user: 7, duration: 150, equipment: [\"dumbbell\", \"kettlebell\"] },\n    { user: 1, duration: 10, equipment: [\"barbell\"] },\n    { user: 7, duration: 100, equipment: [\"bike\", \"kettlebell\"] },\n    { user: 7, duration: 200, equipment: [\"bike\"] },\n    { user: 2, duration: 200, equipment: [\"treadmill\"] },\n    { user: 2, duration: 200, equipment: [\"bike\"] },\n  ];\n}\n\ndescribe(\"mergeData\", () => {\n  test(\"empty data\", () => {\n    expect(mergeData([])).toEqual([]);\n  });\n\n  test(\"does not mutate data\", () => {\n    const clonedData = dataSmall();\n    mergeData(clonedData);\n    expect(clonedData).toEqual(dataSmall());\n  });\n\n  describe(\"one user\", () => {\n    test(\"single session\", () => {\n      expect(\n        mergeData([{ user: 1, duration: 10, equipment: [\"barbell\"] }]),\n      ).toEqual([{ user: 1, duration: 10, equipment: [\"barbell\"] }]);\n    });\n\n    test(\"merge duration\", () => {\n      expect(\n        mergeData([\n          { user: 1, duration: 10, equipment: [\"barbell\"] },\n          { user: 1, duration: 30, equipment: [] },\n        ]),\n      ).toEqual([{ user: 1, duration: 40, equipment: [\"barbell\"] }]);\n    });\n\n    test(\"merge equipment\", () => {\n      expect(\n        mergeData([\n          { user: 1, duration: 10, equipment: [\"bike\"] },\n          { user: 1, duration: 30, equipment: [\"barbell\"] },\n        ]),\n      ).toEqual([{ user: 1, duration: 40, equipment: [\"barbell\", \"bike\"] }]);\n    });\n\n    test(\"multiple sessions\", () => {\n      expect(\n        mergeData([\n          { user: 1, duration: 10, equipment: [\"bike\"] },\n          { user: 1, duration: 30, equipment: [\"barbell\"] },\n        ]),\n      ).toEqual([{ user: 1, duration: 40, equipment: [\"barbell\", \"bike\"] }]);\n    });\n  });\n\n  describe(\"multiple users\", () => {\n    test(\"unique users\", () => {\n      expect(\n        mergeData([\n          { user: 8, duration: 50, equipment: [\"bench\"] },\n          { user: 7, duration: 150, equipment: [\"dumbbell\", \"kettlebell\"] },\n        ]),\n      ).toEqual([\n        { user: 8, duration: 50, equipment: [\"bench\"] },\n        { user: 7, duration: 150, equipment: [\"dumbbell\", \"kettlebell\"] },\n      ]);\n    });\n\n    test(\"merge duration\", () => {\n      expect(\n        mergeData([\n          { user: 8, duration: 50, equipment: [\"bench\"] },\n          { user: 8, duration: 50, equipment: [\"bench\"] },\n          { user: 7, duration: 150, equipment: [\"dumbbell\", \"kettlebell\"] },\n        ]),\n      ).toEqual([\n        { user: 8, duration: 100, equipment: [\"bench\"] },\n        { user: 7, duration: 150, equipment: [\"dumbbell\", \"kettlebell\"] },\n      ]);\n    });\n\n    test(\"merge equipment\", () => {\n      expect(\n        mergeData([\n          { user: 8, duration: 50, equipment: [\"bench\", \"dumbbell\"] },\n          { user: 8, duration: 50, equipment: [\"bench\"] },\n          { user: 7, duration: 150, equipment: [\"dumbbell\", \"kettlebell\"] },\n        ]),\n      ).toEqual([\n        { user: 8, duration: 100, equipment: [\"bench\", \"dumbbell\"] },\n        { user: 7, duration: 150, equipment: [\"dumbbell\", \"kettlebell\"] },\n      ]);\n    });\n\n    test(\"preserves order\", () => {\n      expect(\n        mergeData([\n          { user: 8, duration: 50, equipment: [\"bench\", \"dumbbell\"] },\n          { user: 7, duration: 150, equipment: [\"dumbbell\", \"kettlebell\"] },\n          { user: 8, duration: 50, equipment: [\"bench\"] },\n          { user: 6, duration: 50, equipment: [\"kettlebell\"] },\n        ]),\n      ).toEqual([\n        { user: 8, duration: 100, equipment: [\"bench\", \"dumbbell\"] },\n        { user: 7, duration: 150, equipment: [\"dumbbell\", \"kettlebell\"] },\n        { user: 6, duration: 50, equipment: [\"kettlebell\"] },\n      ]);\n    });\n\n    test(\"integration\", () => {\n      expect(mergeData(dataSmall())).toEqual([\n        { user: 8, duration: 50, equipment: [\"bench\"] },\n        {\n          user: 7,\n          duration: 450,\n          equipment: [\"bike\", \"dumbbell\", \"kettlebell\"],\n        },\n        { user: 1, duration: 10, equipment: [\"barbell\"] },\n        { user: 2, duration: 400, equipment: [\"bike\", \"treadmill\"] },\n      ]);\n    });\n  });\n});\n";

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
