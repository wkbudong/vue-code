const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  entry: {
    vendor: [
      'babel-polyfill',
      'vue',
      'vue-router'
    ],
    client: ['./client/src/main.js']
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
      loader: 'babel-loader'
    }, {
      test: /\.vue$/,
      exclude: /node_modules/,
      use: ['vue-loader']
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