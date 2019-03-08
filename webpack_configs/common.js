const HappyPack = require('happypack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const I18nPlugin = require('i18n-webpack-plugin')

const paths = require('./paths')
const translation = require('./translation')

module.exports = function generateCommonConfig(language = translation.langCodes.en) {
  return {
    entry: {
      game: paths.GAME_DASHBOARD_ENTRY
    },
    output: {
      filename: `dist/[name].bundle.${language}.js`,
      path: paths.PUBLIC_DIR,
      publicPath: '/'
    },
    plugins: [
      new HappyPack({
        loaders: ['babel-loader']
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: paths.TEMPLATE_HTML,
        filename: `index_${language}.html`
      }),
      new I18nPlugin(translation.languages[language])
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        },
        {
          test: /\.js|jsx$/,
          exclude: /node_modules/,
          loaders: ['babel-loader']
        },
        {
          test: /\.less$/,
          loaders: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]--[hash:base64:5]'
              }
            },
            {
              loader: 'less-loader',
              options: { javascriptEnabled: true }
            }
          ]
        },
        {
          test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=100000'
        }
      ]
    }
  }
}
