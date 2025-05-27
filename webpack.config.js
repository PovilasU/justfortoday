const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "main.min.js",
    path: path.resolve(__dirname, "dist"),
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
    new MiniCssExtractPlugin({
      filename: "styles.min.css",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      `...`, // keep existing minimizers (like Terser for JS)
      new CssMinimizerPlugin(), // add this for CSS
    ],
  },
  mode: "production",
};
