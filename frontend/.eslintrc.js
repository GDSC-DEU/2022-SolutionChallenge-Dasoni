module.export = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    project: "./tsconfig.json",
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["@typescript-eslint", "import", "react-hooks"],
  rules: {
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "unknown",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: false },
      },
    ],

    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": [
      "warn",
      {
        additionalHooks: "useRecoilCallback",
      },
    ],
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".js", ".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".tsx"],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
    "import/core-modules": [
      "node:fs",
      "node:fs/promises",
      "node:path",
      "node:readline",
      "node:url",
    ],
  },
};
