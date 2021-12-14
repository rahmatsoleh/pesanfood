const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /font-awesome\.config\.js/,
        use: ['style-loade', 'font-awesome-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
      favicon: path.resolve(__dirname, 'src/public/images/favicon.png'),
    }),
    new WebpackPwaManifest({
      name: 'PesanFood',
      short_name: 'PesanFood',
      description: 'Aplikasi Katalog Resto Terbaik',
      background_color: '#ffffff',
      theme_color: '#f78812',
      crossorigin: 'use-credentials',
      start_url: '/index.html',
      inject: true,
      ios: true,
      icons: [
        {
          src: path.resolve(__dirname, 'src/public/images/logo.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          purpose: 'maskable',
          ios: true,
        },
        {
          src: path.resolve(__dirname, 'src/public/images/logo.png'),
          sizes: '144x144',
          purpose: 'any',
        },
      ],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),
  ],
};
