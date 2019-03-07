const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfigs = require('./common')

module.exports = commonConfigs.map(commonCfg => {
  return merge(commonCfg, {
    mode: 'development',
    devServer: {
      historyApiFallback: true,
      hot: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ],
    watch: true
  })
})
