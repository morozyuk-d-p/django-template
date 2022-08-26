const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');

const isDevelopment = true;

module.exports = [
    {
        name: 'main',
        context: __dirname,
        entry: {
            main: './src/js/main.js'
        },
        output: {
            path: path.resolve('./assets/webpack_bundles/'),
            filename: '[name]-[fullhash].js'
        },
        plugins: [
            new BundleTracker({filename: './webpack-stats.json'})
        ],
        mode: ((isDevelopment) ? 'development' : 'production'),
    }
]