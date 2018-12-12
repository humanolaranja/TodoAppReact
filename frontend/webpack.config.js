const modoDev = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: modoDev ? 'development' : 'production',
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/public',
    filename: './app.js'
  },
  devServer: {
    port: 8080,
    contentBase: './public',
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({ cache: true, parallel: true }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      modules: __dirname + '/node_modules'
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "app.css"
    })
  ],
  module: {
    rules: [{
      test: /.js[x]?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-object-rest-spread']
      }
    },
    {
      test: /\.s?[ac]ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ]
    },
    {
      test: /\.woff|.woff2|.ttf|.eot|.png|.jpg|.gif|.svg*.*$/,
      loader: 'file-loader'
    }]
  }
}
