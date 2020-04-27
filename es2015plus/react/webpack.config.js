require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  filename: path.join(__dirname, '../../es2015plus-react.html'),
  inject: true,
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
  },
  template: path.join(__dirname, '/src/index.html')
});

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    chunkFilename: 'vendor.js',
    filename: 'es2015plus-react.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/react', '@babel/env']
        },
        test: /\.js$/
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        }
      }
    },
    runtimeChunk: 'single'
  },
  performance: false,
  plugins: [HTMLWebpackPluginConfig],
  devServer: {
    contentBase: path.join(__dirname, '..', '..'),
    compress: true,
    port: 8080,
    historyApiFallback: {
      index: 'index.html',
      rewrites: [
        {
          from: /^\/es5-module-mvc/,
          to: '/es5-module-mvc.html'
        },
        {
          from: /^\/es5-view-spaghetti/,
          to: '/es5-view-spaghetti.html'
        },
        {
          from: /^\/es2015plus-react$/,
          to: '/es2015plus-react.html'
        },
        {
          from: /^\/es2015plus-react-redux/,
          to: '/es2015plus-react-redux.html'
        }
      ]
    }
  }
};
