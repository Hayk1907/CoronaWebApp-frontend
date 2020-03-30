require('dotenv').config();

import Vue from 'vue';
import App from './components/App/';

import { store } from './vuex/store/store';

import Buefy from 'buefy';
import Bulma from 'bulma';

import 'buefy/dist/buefy.css';

import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    //key: process.env.KEY,
    key: 'AIzaSyCV7Rtf2dRYulqFXiwg1cbIWLiweYJVdWo',
    libraries: 'places,drawing,visualization',
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
  },
  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,
  installComponents: true,
});

Vue.use(Buefy);
Vue.use(Bulma);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');

// const merge = require('webpack-merge');
// const common = require('./webpack.common.js');

// module.exports = env =>
//   merge(common(env), {
//     mode: 'production',
//     devtool: 'source-map',
//     output: {
//       filename: 'main.bundle.[hash].js',
//     },
//   });

//"build:development": "webpack --env.NODE_ENV=development --config webpack.prod.js",
// const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const autoprefixer = require('autoprefixer');

// const getEnvKeys = require('./getEnvKeys');

// module.exports = (env = {}) => {
//   const envKeys = getEnvKeys(env);

//   return {
//     entry: path.join(__dirname, 'src', 'index.js'),
//     module: {
//       rules: [
//         {
//           enforce: 'pre',
//           test: /\.(js|jsx)$/,
//           exclude: /node_modules/,
//           loader: 'eslint-loader',
//         },
//         {
//           test: /\.(js|jsx)$/,
//           exclude: /(node_modules|bower_components)/,
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/env'],
//             sourceMap: true,
//           },
//         },
//         {
//           test: /\.s[ac]ss$/i,
//           use: [
//             'style-loader',
//             {
//               loader: 'css-loader',
//               options: {
//                 importLoaders: 2,
//                 sourceMap: true,
//               },
//             },
//             {
//               loader: 'postcss-loader',
//               options: {
//                 plugins: () => [autoprefixer],
//                 sourceMap: true,
//               },
//             },
//             {
//               loader: 'sass-loader',
//               options: {
//                 sourceMap: true,
//               },
//             },
//           ],
//         },
//         {
//           test: /\.css$/i,
//           use: ['style-loader', 'css-loader'],
//         },
//         {
//           test: /\.(svg|png|jpg|jpeg|gif)$/,
//           use: {
//             loader: 'file-loader',
//             options: {
//               outputPath: 'images',
//             },
//           },
//         },
//         {
//           test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
//           use: {
//             loader: 'file-loader',
//             options: {
//               outputPath: 'fonts',
//             },
//           },
//         },
//       ],
//     },
//     plugins: [
//       new CleanWebpackPlugin(),
//       new CopyWebpackPlugin([
//         {
//           from: path.join(__dirname, 'node_modules', 'tinymce', 'skins'),
//           to: path.join(__dirname, 'dist', 'skins'),
//         },
//         {
//           from: path.join(__dirname, 'public'),
//           to: path.join(__dirname, 'dist'),
//           ignore: ['index.html'],
//         },
//       ]),
//       new webpack.DefinePlugin(envKeys),
//       new HtmlWebpackPlugin({
//         template: path.join(__dirname, 'public', 'index.html'),
//       }),
//     ],
//     resolve: {
//       extensions: ['*', '.js', '.jsx'],
//     },
//     output: {
//       path: path.join(__dirname, 'dist'),
//       publicPath: '/',
//     },
//   };
// };
