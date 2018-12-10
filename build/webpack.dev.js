// webpack.dev.js
// 存放 dev 配置
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.base.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: { // 开发服务器
    contentBase: '../dist'
  },
  output: { // 输出
    filename: 'js/[name].[hash].js', // 每次保存 hash 都变化
    path: path.resolve(__dirname, '../dist')
  },
  module: {},
  mode: 'development',
});
