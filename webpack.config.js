var webpack=require('webpack');
var path=require('path');
module.exports = {
  entry: [
    './client/index.js',
  ],
  output: {
    path: path.join(__dirname,'../static'),
    filename: 'bundle.js',
    publicPath: '/static'
  },
  module: {
    // 優化並使用 HotModuleReplacement
    // plugins: [
    //   new webpack.optimize.OccurrenceOrderPlugin(),
    //   new webpack.HotModuleReplacementPlugin()
    // ],    
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }],
  },
};