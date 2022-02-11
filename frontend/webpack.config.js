const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
  },
  entry: {
    app: './src/client',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          plugins: ['react-hot-loader'],
        },
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: __dirname + '/dist',
    },
    hot: true,
    host: 'localhost',
    port: 3000,
  },
};
