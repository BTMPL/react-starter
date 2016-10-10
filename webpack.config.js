const webpack = require("webpack");

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/index'
  ],
  output: {
    path: __dirname + "/dist/static",
    filename: "bundle.js",
    publicPath: "static"
  },

  devServer: {
    contentBase: "./dist"
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ["babel"],
      exclude: /(node_modules)/
    }]
  }
}