const webpack = require("webpack");
const merge = require("webpack-merge");
const commonConfig = require("./common");
const path = require("path");

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = require("./paths");

module.exports = merge(commonConfig, {
  mode: "production",
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        sourceMap: false
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(
      ["public/**/*.js", "public/**/*.map", "public/**/*.html"],
      {
        root: path.resolve(__dirname, ".."),
        verbose: true
      }
    ),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.TEMPLATE_HTML,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
});
