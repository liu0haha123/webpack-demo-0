let path = require("path")
module.exports = {
    mode:"production",
    entry: './src/index.js', //打包文件入口
    output: {               //打包文件出口
        path: path.resolve(__dirname, "dist"),
        filename: '[name].[contenthash].js'
    }
}