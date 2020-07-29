const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "eval-source-map",
    entry: "./src/index.js", //might not be needed?
    output: {
        path: path.resolve("dist"),
        filename: "index_bundle.js"
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: [/\.vert$/, /\.frag$/],
                use: "raw-loader"
            },
            {
                test: /\.(gif|png|jpe?g|svg|xml)$/i,
                use: "file-loader"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            CANVAS_RENDERER: JSON.stringify(true),
            WEBGL_RENDERER: JSON.stringify(true)
        }),
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
            inject: "body"
        })
    ]
};