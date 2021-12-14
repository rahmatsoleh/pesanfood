const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { merge } = require('webpack-merge');
const prod = require('./webpack.prod');

module.exports = merge(prod, {
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerPort: 'auto',
        })
    ]
})