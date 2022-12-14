module.exports = {
  root: true,
  env: {
    "jest/globals": true,
  },
  extends: [
    "@react-native-community",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-shadow": ["error"],
        "no-shadow": "off",
        "no-undef": "off",
        "prettier/prettier": "error",
        "no-tabs": ["error", { allowIndentationTabs: true }],
      },
    },
  ],
}
