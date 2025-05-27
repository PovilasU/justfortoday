const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Add this line

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "main.min.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Optional: cleans dist folder before build
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
  ],
  optimization: {
    minimize: true,
    minimizer: [
      `...`, // keep existing minimizers (like Terser for JS)
      new CssMinimizerPlugin(),
    ],
  },
  mode: "production",
};
