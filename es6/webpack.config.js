const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/scripts/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 2222,
    },
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ["@babel/plugin-transform-runtime"],
                    },
                },
            },

            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },

            {
                test: /\.html$/i,
                use: ["html-loader"],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),

        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
};
