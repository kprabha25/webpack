var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['./source/app.js'],
    output: {
        path: path.join(__dirname, "/build/"),
        //publicPath: '/build/js',
        filename: 'app.all.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            //include: path.resolve(__dirname, "source"),
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    }
}