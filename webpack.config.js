const path = require("path");

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
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  mode: "production",
};
