const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // Added HtmlWebpackPlugin to generate HTML file
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
      }),

      // Added WebpackPwaManifest to generate manifest file
      new WebpackPwaManifest({
        name: 'Your App Name',
        short_name: 'App',
        description: 'Your app description',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
        ],
      }),

      // Added InjectManifest plugin for service worker
      new InjectManifest({
        swSrc: './src-sw.js',
      }),
    ],

    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },

        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};
