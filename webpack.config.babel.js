/**
 * Created by tanDong on 2017/2/27.
 */
import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import OpenBrowser from "open-browser-webpack-plugin"
export default {
    entry: "./src/index.js",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "bundle")
    },
    module: {
        rules: [
            {test: /\.js?$/, use: "babel-loader", exclude: path.resolve(__dirname, "node_modules")},
            {test: /\.css$/, use: [ "style-loader","css-loader"]},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: "file-loader"},
            {test: /\.(woff|woff2)(\?v=\d\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=application/font-woff"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=application/octet-stream"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=application/svg+xml"},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Welcome to My System"
        }),
        new OpenBrowser({
            url: "http://localhost:8080/"
        })
    ],
    devtool: "eval"
}