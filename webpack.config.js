const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const glob = require("glob");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const htmlPages = ["index", "about", "post", "contact", "todo", "help"];
const htmlPlugins = htmlPages.map(
  (page) =>
    new HtmlWebpackPlugin({
      template: `./src/${page}.html`,
      filename: `${page}.html`,
      minify: page !== "index",
    })
);

module.exports = {
  entry: {
    main: "./src/js/scripts.js",
  },
  output: {
    filename: "[name].[contenthash].min.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico|woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "styles.[contenthash].min.css" }),
    ...htmlPlugins,
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(__dirname, "src")}/**/*`, { nodir: true }),
      safelist: {
        standard: [/^col-/, /^row-/, /^container/, /^g-/, /^btn/, /^navbar/],
      },
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/assets/favicon.ico", to: "assets/favicon.ico" }],
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/assets", to: "assets" }, // Moves the entire assets folder to dist/assets
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: { comments: false },
        },
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: { chunks: "all" },
  },
  resolve: {
    extensions: [".js", ".css"],
  },
  devtool: "source-map",
  mode: process.env.NODE_ENV || "production",
};
