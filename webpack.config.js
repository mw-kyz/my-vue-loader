const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, 'src/main.js'),
  output: {
    filename: 'main.js',
    path: resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  resolveLoader: {
    modules:[
      'node_modules',
      resolve(__dirname, 'modules')
    ]
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /.vue$/i,
        loader: 'vue-loader'
      },
      {
        test: /.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'public/index.html')
    })
  ]
}