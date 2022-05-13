const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require("path")

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist' // 如果出错，请将 contentBase 替换为 static
    },
    entry: "./src/main.js",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '首页1',
            template:"./src/assets/index.html"
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,  //使用正则表达式匹配.css文件
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}

