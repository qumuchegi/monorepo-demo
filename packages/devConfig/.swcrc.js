module.exports = {
  $schema: "https://json.schemastore.org/swcrc",
  jsc: {
    parser: {
      syntax: "ecmascript",
      jsx: true,
      dynamicImport: true,
      privateMethod: false,
      functionBind: false,
      exportDefaultFrom: false,
      exportNamespaceFrom: false,
      decorators: false,
      decoratorsBeforeExport: false,
      topLevelAwait: false,
      importMeta: false,
    },
    transform: {
      react: {
        runtime: "automatic",
      },
    },
    target: "es5",
    loose: false,
    externalHelpers: true,
    // Requires v1.2.50 or upper and requires target to be es2016 or upper.
    keepClassNames: false,
  },
  minify: true,
  sourceMaps: true,
};
