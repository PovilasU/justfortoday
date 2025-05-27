const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const glob = require("glob");

module.exports = {
  entry: "./src/js/scripts.js",
  output: {
    filename: "scripts.min.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "styles.min.css" }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      minify: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/about.html",
      filename: "about.html",
      minify: true,
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(__dirname, "src")}/**/*`, { nodir: true }),
      safelist: {
        standard: [/^col-/, /^row-/, /^container/, /^g-/, /^btn/, /^navbar/],
      },
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  mode: "production",
};
