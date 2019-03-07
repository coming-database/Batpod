const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const commonConfigs = require('./common')
const paths = require('./paths')

module.exports = commonConfigs.map(commonCfg => {
  return merge(commonCfg, {
    mode: 'production',
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          parallel: true,
          sourceMap: false,
          uglifyOptions: {
            compress: {
              drop_console: true
            },
            output: {
              comments: false
            }
          }
        })
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['public/**/*.js', 'public/**/*.map', 'public/**/*.html'], {
        root: path.resolve(__dirname, '..'),
        verbose: true
      }),
      new HtmlWebpackPlugin({
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
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    ]
  })
})
