const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

const getEnvKeys = require('./getEnvKeys');

module.exports = (env = {}) => {
  const envKeys = getEnvKeys(env);

  return {
    entry: path.join(__dirname, 'src', 'index.js'),
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            sourceMap: true,
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer],
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(svg|png|jpg|jpeg|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
            },
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin([
        {
          from: path.join(__dirname, 'node_modules', 'tinymce', 'skins'),
          to: path.join(__dirname, 'dist', 'skins'),
        },
        {
          from: path.join(__dirname, 'public'),
          to: path.join(__dirname, 'dist'),
          ignore: ['index.html'],
        },
      ]),
      new webpack.DefinePlugin(envKeys),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
      }),
    ],
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
    },
  };
};
