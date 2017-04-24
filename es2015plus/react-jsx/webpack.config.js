const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, '/src/index.html'),
  filename: 'es2015plus-react-jsx.html',
  inject: 'body'
})
const config = {
  entry: {
    'es2015plus/ES2015plus-React-JSX': './src/index.js'
  },
  output: {
    path: path.join(__dirname, '..', '..'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig],
  devServer: {
    watchOptions: {
      poll: true
    },
    contentBase: path.join(__dirname, '..', '..'),
    compress: false,
    port: 8080,
    historyApiFallback: {
      index: 'es2015plus-react-jsx.html',
      rewrites: [
        {
          from: /^\/es5-module-mvc/,
          to: '/es5-module-mvc.html'
        }, {
          from: /^\/es5-view-spaghetti/,
          to: '/es5-view-spaghetti.html'
        }, {
          from: /^\/es2015plus-react-jsx/,
          to: '/es2015plus-react-jsx.html'
        }
      ]
    }
  }
}
module.exports = config
