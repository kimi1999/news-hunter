var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// 多个 入口文件 从webpack.base.conf.js 里面提出来写在这里
baseWebpackConfig.entry = {
  app: ['./src/main.js'],
  share:['./src/share.js'],
  share_img:['./src/share_img.js']
}
baseWebpackConfig.output = {
  path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
}

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
});


module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      chunks: ["app"],
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: 'share.html',
      template: 'share.html',
      chunks: ["share"],
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: 'share_img.html',
      template: 'share_img.html',
      chunks: ["share_img"],
      inject: true
    })
  ]
})
