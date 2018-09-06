const HTMLWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, '/app/index.html'),
  filename: 'index.html',
  inject: false,
})

module.exports = {
  entry: ['babel-polyfill', path.join(__dirname, '/app/index.js')],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"',
        }),
      }],
  },
  output: {
    filename: 'transformed.js',
    path: path.join(__dirname, '/build'),
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin('styles.css'),
  ],
  mode: 'production',
}
