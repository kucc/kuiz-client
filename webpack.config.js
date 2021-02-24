const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.tsx"],
  devtool: "eval-source-map",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@asset": path.resolve(__dirname, "src/asset/"),
      "@common": path.resolve(__dirname, "src/common/"),
      "@component": path.resolve(__dirname, "src/component/"),
      "@container": path.resolve(__dirname, "src/container/"),
      "@view": path.resolve(__dirname, "src/view/"),
      "@modules": path.resolve(__dirname, "src/modules"),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: true,
    compress: false,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "main.[hash].js",
    path: path.join(__dirname, "dist"),
    publicPath: "/",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      path: path.resolve(__dirname, "./dist"),
      filename: "index.html",
    }),
  ],
};
