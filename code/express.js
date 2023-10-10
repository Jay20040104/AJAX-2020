// 引入express模块
const express = require('express')
// 创建express对象
const app = express()
// 创建路由规则
app.get('/', (request, response) => {
    // 设置响应体
    response.send('HELLO EXPRESS')
})
// 监听端口8000启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中...')
})