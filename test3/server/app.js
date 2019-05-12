var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
const session = require("express-session");
var cookieParser = require('cookie-parser');
const svgCaptcha = require('svg-captcha');
var app = express();

// 注册users接口
var users = require('./routes/users');
var pruduct = require('./routes/pruduct');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge:200000
  }
}));
app.use('/users', users);
app.use('/pruduct',pruduct)
// 访问静态资源
app.use(express.static(path.resolve(__dirname, '../dist')));
//svg 验证码
app.get('/captcha', function (req, res) {
	var captcha = svgCaptcha.create({noise: 1});
	req.session.captcha = captcha.text;
	res.type('svg');
	res.status(200).send(captcha.data);
});
// 访问单页
app.get('/', function (req, res) {
  var html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
  res.send(html);
});

// 监听
app.listen(8081, function () {
  console.log('success listen...8081');
});