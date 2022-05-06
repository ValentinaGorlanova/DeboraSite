module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "eslint-plugin-import-helpers", "unused-imports", "jsx-a11y"],

  settings: {
    "import/resolver": {
      typescript: {},

      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },

  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-unresolved": [2, { caseSensitive: false }],
    "@typescript-eslint/no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "no-unused-vars": "off",
    "import-helpers/order-imports": "off",
    // "jsx-a11y/no-static-element-interactions": [
    //   "error",
    //   {
    //     handlers: ["onClick", "onMouseDown", "onMouseUp", "onKeyPress", "onKeyDown", "onKeyUp"],
    //   },
    // ],

    // "import-helpers/order-imports": [
    //   "warn",
    //   {
    //     // example configuration
    //     newlinesBetween: "ignore", // new line between groups
    //     groups: ["/^react/", "module", "/^@/", ["parent", "sibling", "index"]],
    //     alphabetize: { order: "asc", ignoreCase: true },
    //   },
    // ],
    quotes: [2, "double", { avoidEscape: true }],
    //
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        useTabs: false,
      },
    ],
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "import/prefer-default-export": "off",
    "jsx-quotes": ["error", "prefer-double"],
    "react/require-default-props": "off",
    "react/self-closing-comp": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/button-has-type": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/alt-text": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
      },
    ],
  },
  globals: {
    React: "writable",
  },
};
