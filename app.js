var express = require('express');
var router = require('./router/router').router;
var bodyParser = require('body-parser')


//启动服务器
var app = express();

// 设置静态文件目录
app.use('/public',express.static('./public'))
app.use('/node_modules/', express.static('./node_modules'))

// 设置parse-body
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

// 设置模板引擎
app.engine('art', require('express-art-template'))
app.set('views','./views')



// 启动路由
app.use(router);



// 开启服务器

app.listen(3000,'127.0.0.1',function(){
    console.log('running!');
})