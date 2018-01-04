'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

// "transform-object-rest-spread",

module.exports = {
  entry: path.resolve(__dirname, './components/index.js'),
  output: {
    library: 'react-ui-collection',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$|\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new ExtractTextPlugin({
      filename: 'style.css'
    }),
    new CopyWebpackPlugin([
      {
        from: './style/style.scss',
        to: 'style.scss'
      }
    ])
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  }
}
