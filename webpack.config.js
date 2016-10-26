const webpack = require("webpack");
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");


module.exports = {
  entry: [
    "./src/index"
  ],
  output: {
    filename: "bundle.js",
    // eslint-disable-next-line
    path: __dirname + "/dist"
  },
  plugins: [
    new webpack.ResolverPlugin(new DirectoryNamedWebpackPlugin()),
    new webpack.DefinePlugin({
      // eslint-disable-next-line
      NODE_ENV: '"' + process.env.NODE_ENV + '"'
    })
  ],
 
  devServer: {
    contentBase: "./dist"
  },
  
  module: {
    loaders: [
      {
        test: /\.js/,
        loaders: ["babel"],
        exclude: /(node_modules)/
      }
    ]
  }
};
