const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/_[name][ext]",
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "./Public/index.html",
      title: "Gabooo Fashion",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});
