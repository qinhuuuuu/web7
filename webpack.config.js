const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const basePath = '/';
module.exports = {
  performance: {
    hints: false
  },
  stats: {
    children: true,
  },
  entry: {
    index: {
      import: './src/js/index.js',
      filename: 'js/index.js'
    },
    news: {
      import: './src/js/news.js',
      filename: 'js/news.js'
    },
    about: {
      import: './src/js/about.js',
      filename: 'js/about.js'
    },
    categoryDetail: {
      import: './src/js/category-detail.js',
      filename: 'js/category-detail.js'
    },
    postDetail: {
      import: './src/js/post-detail.js',
      filename: 'js/post-detail.js'
    },
    contact: {
      import: './src/js/contact.js',
      filename: 'js/contact.js'
    },
  },
  output: {
    publicPath: basePath,
    path: path.join(__dirname, "/build"),
    clean: true,
  },
  devServer: {
    watchFiles: ['src/**/*'],
    port: 1900,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },

    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],

  },
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      new HtmlMinimizerPlugin(),
      new CssMinimizerPlugin(),
      new TerserWebpackPlugin({
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new webpack.BannerPlugin('Name: Web-demo ; Version-Deployment : v1.0; Version-Test: v1.0'),
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jQuery",
      "window.jQuery": "jquery",
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/views/index.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/views/about.html',
      inject: "body",
      chunks: ['about', 'index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'news.html',
      template: './src/views/news.html',
      inject: "body",
      chunks: ['news', 'index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'category-detail.html',
      template: './src/views/category-detail.html',
      inject: "body",
      chunks: ['categoryDetail', 'index', 'about'],
    }),
    new HtmlWebpackPlugin({
      filename: 'post-detail.html',
      template: './src/views/post-detail.html',
      inject: "body",
      chunks: ['postDetail', 'index', 'about'],
    }),
    new HtmlWebpackPlugin({
      filename: 'contact.html',
      template: './src/views/contact.html',
      inject: "body",
      chunks: ['contact', 'postDetail', 'index', 'about'],
    }),
    new HtmlWebpackPlugin({
      filename: 'page-not-found.html',
      template: './src/views/page-not-found.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'search-post.html',
      template: './src/views/search-post.html',
      inject: "body",
      chunks: ['index'],
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].min.css",
    }),
  ],
};