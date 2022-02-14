const isDevelopment = process.env.NODE_ENV !== 'production';
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval' : 'hidden-source-map',
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
  },

  entry: {
    app: './src/client.tsx',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: path.join(__dirname, 'node_modules'),
        use: {
          loader: require.resolve('ts-loader'),
          options: {
            getCustomTransformers: () => ({
              before: [isDevelopment && ReactRefreshTypeScript()].filter(
                Boolean
              ),
            }),
            transpileOnly: isDevelopment,
          },
        },
      },
    ],
  },
  plugins: [
    isDevelopment && new ReactRefreshPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
  devServer: {
    static: { directory: path.resolve(__dirname, 'dist') },
    hot: true,
    historyApiFallback: true,
  },
};
