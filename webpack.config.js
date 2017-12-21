'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, './components/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
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
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      }
    ]
  },
  externals: {
    'react': 'React'
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new ExtractTextPlugin({
      filename: 'style.css'
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  }
}
