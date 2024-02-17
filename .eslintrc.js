module.exports = {
  root: true,
  extends: [
    "@react-native",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:diff/ci",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react", "react-native"],
  rules: {
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    "no-extra-semi": "off",
    semi: ["error", "never"],
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 1,
    "react-native/no-raw-text": 1,
    "@typescript-eslint/no-explicit-any": 1,
    "react-native/no-single-element-style-arrays": 2,
    "react/prop-types": 1,
    "react/no-unescaped-entities": 1,
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
}
