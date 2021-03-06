const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  entry: {
    client: ['./client/main.js']
  },
  output: {
    path: path.join(__dirname, '/./client/'),
    filename: '[name].js',
    publicPath: 'http://0.0.0.0:1992/client/'
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEBUG__: true
    }),

    new webpack.ProvidePlugin({
      $: "jquery",
    }),
    // new ExtractTextPlugin("[name].css"),
    // new AssetsPlugin({
    //   path: path.join(__dirname, '/../assets/')
    // }),
  ],
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
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
      // use: ['vue-loader'],
      // options: {
      //   // css: ExtractTextPlugin.extract({
      //   //   loader: 'css-loader',
      //   //   fallbackLoader: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
      //   //  }),
      //   // vue-loader options go here
      //   postcss: [require('autoprefixer')({ browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8'] })]
      // }
      use : [{
        loader: 'vue-loader',
        options :{
          postcss: [require('autoprefixer')({ browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8'] })]
        }
      }]
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