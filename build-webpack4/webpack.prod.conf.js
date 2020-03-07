'use strict';
// const path = require('path');
const utils = require('./utils').default;
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// console.log('processs', process.env.NODE_ENV);

const entry = {
  calf: utils.resolve('./src/index.js')
  // calf: utils.resolve('./src/test.js')
};

const webpackConfig = merge(baseWebpackConfig, {
  entry: entry,
  mode: 'production',
  devtool: false,
  output: {
    path: config.build.assetsRoot, // 静态资源目录
    filename: 'index.js',
    library: 'calf',
    libraryTarget: 'umd'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new CleanWebpackPlugin(),
    new OptimizeCSSAssetsPlugin()
  ]
});

module.exports = webpackConfig;
