module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: "./src/main/index.js",
  // Put your normal webpack config below here
  devServer: {
    hot: true,
  },
  module: {
    rules: require("./webpack.rules"),
  },
};
