const webpack = require("webpack");
const merge = require("webpack-merge");
const commonConfig = require("./common");
const paths = require("./paths");

module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    contentBase: paths.PUBLIC_DIR,
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ],
  watch: true
});
