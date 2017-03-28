var LiveReloadPlugin = require('webpack-livereload-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/assets/index.html',
  filename: 'index.html',
  inject: 'body'
})

var ExtractTextPluginConfig =
new ExtractTextPlugin({ filename: 'public/style.css', allChunks: true })

module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: __dirname + '/build',
    filename: "app.js"
  },
  resolve: {
    extensions: ['.js','.scss']
  },
  devServer: {
    port: 8080,
    inline: true
  },
  module: {
    loaders: [
      {
        test: /(\.js|.jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig, LiveReloadPlugin, ExtractTextPluginConfig]
};
