const path = require("path");

const config = {
  entry: "./src/index.ts",
  target: "node",
  devtool: "source-map",
  node: { global: true },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist/browser"),
    filename: "api-divia-v2.js",
    library: {
      name: "ApiDivia",
      type: "umd",
    },
    globalObject: `typeof self !== 'undefined' ? self : this`,
  },
  optimization: {
    minimize: false,
  },
};

const configMinimized = {
  ...config,
  output: {
    ...config.output,
    filename: "api-divia-v2.min.js",
  },
  optimization: {
    minimize: true,
  },
};

module.exports = [config, configMinimized];
