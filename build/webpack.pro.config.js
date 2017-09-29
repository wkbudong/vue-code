const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    vendor: [
      'babel-polyfill',
      'vue',
      'vue-router',
      'vuex'
    ],
    client: ['./client/main.js']
  },
  output: {
    path: path.join(__dirname, '/../assets/js'),
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    new AssetsPlugin({
      path: path.join(__dirname, '/../assets/js')
    }), //生成编译映射json
    new webpack.DefinePlugin({
      __DEBUG__: false,
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
         // 该配置假定你引入的 vendor 存在于 node_modules 目录中
         return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      minChunks: Infinity
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    })
  ],
  resolve: { 
    alias: { 
      'vue': 'vue/dist/vue.js' 
    } 
  },
  module: {
    rules: [{
      test: /\.gif/,
      loader: "url-loader",
      options:{
        limit: 1000,
        mimetype: "image/jpg"
      }
    }, {
      test: /\.jpg/,
      loader: "url-loader",
      options:{
        limit: 1000,
        mimetype: "image/jpg"
      }
    }, {
      test: /\.png/,
      loader: "url-loader",
      options:{
        limit: 1000,
        mimetype: "image/npg"
      }
    }, {
      test: /\.svg/,
      loader: "url-loader",
      options:{
        limit: 1000,
        mimetype: "image/svg+xml"
      }
    }, {
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader?cacheDirectory' //cacheDirectory ---babel-loader缓存
    }, {
      test: /\.vue$/,
      exclude: /node_modules/,
      use: ['vue-loader'],
      options: {
        // vue-loader options go here
        postcss: [require('autoprefixer')({ browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8'] })]
      }
    }, {
      test: /\.s[a|c]ss$/,
      use: ["style-loader","css-loader","sass-loader"]
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      use: ["style-loader","css-loader","sass-loader"]
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader:"url-loader",
      options:{
        limit:1000,
        mimetype:"application/font-woff"
      }
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader:"url-loader",
      options:{
        limit:1000,
        mimetype:"application/font-woff2"
      }
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader:"url-loader",
      options:{
        limit:1000,
        mimetype:"application/octet-stream"
      }
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader:"url-loader",
      options:{
        limit:1000,
        mimetype:"image/svg+xml"
      }
    },{
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader:"url-loader",
      options:{
        limit:1000,
        mimetype:"image/svg+xml"
      }
    }]
  }
};