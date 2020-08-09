module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "plugin:vue/essential",
    "airbnb-base",
  ],
  parserOptions: {
    ecmaVersion: 11,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: [
    "vue",
    "@typescript-eslint",
  ],
  rules: {
    quotes: [2, "double", { allowTemplateLiterals: true }],
    /**
     * Fix report missing file extension when importing a package
     *
     * see: https://stackoverflow.com/a/59268871/7574433
     *
     * missing ts extension for ts file in airbnb's config
     * https://github.com/airbnb/javascript/blob/c5bee75b1b358a3749f1a6d38ee6fad73de28e29/packages/eslint-config-airbnb-base/rules/imports.js#L139-L143
     *
     */
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    /**
     * no-unused-vars is broken for type variables
     * it will report type variables as unused
     *
     * see directly related issue here:
     * https://github.com/typescript-eslint/typescript-eslint/issues/1479#issuecomment-576347635
     *
     * Issue tracked on typescript-eslint side:
     * https://github.com/typescript-eslint/typescript-eslint/issues/1856
     * waiting for typescript-eslint to resolve this,
     * tempoary disable no-unused-vars
     */
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
  settings: {
    /**
     * fix module resolution failure upon package import
     */
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
