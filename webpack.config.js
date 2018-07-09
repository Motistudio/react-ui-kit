'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpack = require('webpack')

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
        use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            'sass-loader'
          ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
	new MiniCssExtractPlugin({
        filename: 'style.css',
		chunkFilename: ''
      }),
    new CopyWebpackPlugin([
      {
        from: './style/style.scss',
        to: 'style.scss'
      }
    ])
  ],
  devtool: 'inline-source-map',
    optimization: {
      minimize: true,
	  splitChunks: {
		  cacheGroups: {
			  chunks: 'all'
		  }
	  },
      minimizer: [
        new UglifyJsPlugin({
          parallel: true,
          uglifyOptions: {
            mangle: false,
            ecma: 6,
            output: {
              comments: false
            }
          }
        }),
        new CompressionPlugin({
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.js$|\.css$|\.html$/,
          threshold: 10240,
          minRatio: 0
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {safe: true, discardComments: {removeAll: true}}
        })
      ]
    },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  }
}
