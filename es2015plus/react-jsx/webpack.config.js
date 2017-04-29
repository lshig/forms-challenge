const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, '/src/index.html'),
  filename: 'es2015plus-react-jsx.html',
  inject: 'body'
})
const VendorChunkPluginConfig = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  filename: 'es2015plus/react-jsx/dest/vendor.js',
  minChunks: function(module){
    return module.context && module.context.indexOf("node_modules") !== -1;
  }
})
const config = {
  entry: {
    'es2015plus/react-jsx/dest/ES2015plus-React-JSX': './src/index.js'
  },
  output: {
    path: path.join(__dirname, '..', '..'),
    libraryTarget: 'umd',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'babel-loader',
        options: {
          presets: ['env']
        },
      }
    ]
  },
  performance: {
    // hints: 'warning',
    maxAssetSize: 200000,
    maxEntrypointSize: 400000
  },
  plugins: [HTMLWebpackPluginConfig, VendorChunkPluginConfig],
  devServer: {
    watchOptions: {
      poll: true
    },
    contentBase: path.join(__dirname, '..', '..'),
    compress: true,
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
        }, {
          from: /^\/es2015plus-react-redux-jsx/,
          to: '/es2015plus-react-redux-jsx.html'
        }
      ]
    }
  }
}
module.exports = config
