// webpack.prod.js
// 存放 prod 配置
const path = require('path');
// 合并配置文件
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let webpack = require('webpack');

// let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  module: {},
  plugins: [
    new CleanWebpackPlugin(['dist/*'], {
        root: path.resolve(__dirname, '../')
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].[hash].css",
        chunkFilename: 'css/[id].[hash].css'
      }),

      // new BundleAnalyzerPlugin({
      //     analyzerMode: 'server',
      //     analyzerHost: '127.0.0.1',
      //     analyzerPort: 8899,
      //     reportFilename: 'report.html',
      //     defaultSizes: 'parsed',
      //     openAnalyzer: true,
      //     generateStatsFile: false,
      //     statsFilename: 'stats.json',
      //     statsOptions: null,
      //     logLevel: 'info'
      // })
  ],
  mode: 'production',
  output: {
    filename: 'js/[name].[contenthash].js', //contenthash 若文件内容无变化，则contenthash 名称不变
    path: path.resolve(__dirname, '../dist')
  },
    //...
    optimization: {
        splitChunks: {
            cacheGroups: {
                libs: {
                    name: "chunk-libs",// 只打包初始时依赖的第三方
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    chunks: "initial"
                },
                elementUI: {
                    name: "chunk-elementUI", // 单独将 elementUI 拆包
                    priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
                    test: /[\\/]node_modules[\\/]element-ui[\\/]/,
                    chunks: "all"
                }
            }
        }
    }
});
