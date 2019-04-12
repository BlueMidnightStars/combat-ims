module.exports = {

    // 打包时候使用到的四个属性
    //  第一是网址前缀
    // 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。
    // devServer.proxy 可以是一个指向开发环境 API 服务器的字符串
    devServer: {
        proxy: 'http://localhost:3000'
    },
    //  第二是打包目录 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。
    outputDir: '../public/admin',
    //  第三是指定渲染模版 
    indexPath:'index.html',
    // 第四是路由前缀
    publicPath:'/admin',
}