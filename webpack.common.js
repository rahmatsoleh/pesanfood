const HtmlWebpackPlugin = require('html-webpack-plugin');
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
        use: ["style-loader", "css-loader","sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
            {
              loader : 'file-loader',
              options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "images",
                    },
            },
        ],
      },
      {
        test: /font-awesome\.config\.js/,
        use: [ "style-loade","font-awesome-loader"],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
      favicon: path.resolve(__dirname,'src/public/images/favicon.jpg'),
    }),
  ],
};
