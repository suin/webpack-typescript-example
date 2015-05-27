var webpack = require('webpack');
var config = require("./webpack.config.js");
config.plugins = [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            // デバッグコードに使われているconsole.logを取り除く
            drop_console: true
        }
    })
];

module.exports = config;
