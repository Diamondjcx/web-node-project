var express = require('express');
var path = require('path');
var ejs = require('ejs');
// 修改定界符
ejs.delimiter = '?';

var app = express();

// 设置静态资源的请求中间件
app.use('/node_modules/', express.static(path.join(__dirname, '/node_modules/')));

// 设置express的默认模板引擎
app.engine('ejs', require('ejs').renderFile);

// 拿到用户的Controller
var UserCtrl = require('./controllers/userCtrl');

app.get('/', function (req, res) { // 或取首页
    UserCtrl.getAllUsers(req, res);
}).get('/getusers', function (req, res) { // 或取用户列表
    UserCtrl.getAllUsersByAjax(req, res);
});

app.listen(3008, function () {
    console.log('App listening on port 3008!');
});