// webpack.base.js
// 存放 dev 和 prod 通用配置
const webpack = require('webpack');
const path = require('path');
// vue-loader 插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', //入口
  module: {
    rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        { test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 5000,
              // 分离图片至imgs文件夹
              name: "imgs/[name].[ext]",
            }
          },
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }
    
    
      ]
  },
  plugins: [
    // 解决vender后面的hash每次都改变
    new webpack.HashedModuleIdsPlugin(),
     // 请确保引入这个插件来施展魔法
     new VueLoaderPlugin(),
     new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../index.html'),
      }),
  ],// 插件
  resolve: { alias: { 'vue': 'vue/dist/vue.js' } }
};
