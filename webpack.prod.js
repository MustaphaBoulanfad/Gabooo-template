const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name]-[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    minimizer: [
      `...`,
      new htmlWebpackPlugin({
        filename: "index.html",
        title: "Gabooo Fashion",
        template: "./Public/index.html",
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "Css/[name].[contenthash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
});
