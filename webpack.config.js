const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  output: {
    filename: '[contenthash].js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      { from: 'src/favicon.ico', to: '' }
    ]),
    new HtmlWebpackPlugin({ template: 'src/index.html' })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        // exclude: /\.module.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
      // {
      //   test: /\.module.scss$/,
      //   use: ['style-loader', 'css-loader?modules', 'sass-loader']
      // }
    ]
  }
};
