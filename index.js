module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "arrow-body-style": 0,
    "react/jsx-indent": 0,
    "react/jsx-indent-props": 0,
    "react/function-component-definition": 0,
    "react/require-default-props": 0,
    "react/jsx-props-no-spreading": 0,
    "import/prefer-default-export": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/no-unused-vars": 1,
    "@typescript-eslint/no-unsafe-assignment": 0,
    "object-curly-newline": 0,
    "prettier/prettier": 0,
    "import/no-cycle": 0,
    "import/order": 0,
  },
  plugins: ["@typescript-eslint"],
};
