const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./js/CampFeaturesList.js",
  devtool: "cheap-eval-source-map",
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/public/',
    hot: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
    {
      enforce: 'pre',
      test: /\.jsx?$/,
      exclude: /node_modules/
    },
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      query: { compact: true }
    }
    ]
  }
};
