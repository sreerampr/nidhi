const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const { ports: { wdsPort }, dist } = require('../config/variables');

module.exports = merge(commonConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, `../${dist}`),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  devServer: {
    // lazy: true,
    contentBase: path.join(__dirname, `../${dist}`),
    compress: true,
    port: wdsPort,
    hotOnly: true,
    // https: true,
    proxy: {
      '**': 'http://localhost:9001',
    },
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        FIREBASE_API: JSON.stringify(process.env.FIREBASE_API),
      },
    }),
  ],
});