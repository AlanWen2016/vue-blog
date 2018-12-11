// webpack.base.js
// 存放 dev 和 prod 通用配置
const webpack = require('webpack');
const path = require('path');
const srcPath = path.join(__dirname, '../src');

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
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         limit: 5000,
      //         // 分离图片至imgs文件夹
      //         name: "imgs/[name].[ext]",
      //       }
      //     },
      //   ]
      // },
      {
        test: /\.(png|jpg|jpeg|gif|svg|svgz)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 5000,
            name : 'images/[name].[hash:7].[ext]'// 将图片都放入images文件夹下，[hash:7]防缓存
          }
        }]
      },
      {
        test : /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use : [
            {
                loader : 'url-loader',
                options : {
                    limit : 6000,
                    name : 'fonts/[name].[hash:7].[ext]'// 将字体放入fonts文件夹下
                }
            }
        ]
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
  resolve: { 
    extensions : ['.js', '.jsx', '.vue', 'vue'],
    alias: { 
      'vue': 'vue/dist/vue.js',
      'Pages' : path.resolve(srcPath, 'pages/'),
      'Services' : path.resolve(srcPath, 'services/'),
      'Filters' : path.resolve(srcPath, 'filters/'),
      'Stores' : path.resolve(srcPath, 'stores/'),
      'Libs' : path.resolve(srcPath, 'libs/'),
      'Assets' : path.resolve(srcPath, 'assets/'),
   } 
  }
};
