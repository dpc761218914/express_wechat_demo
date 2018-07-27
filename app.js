/**
 * 功能：
 * 作者： dpc
 * 日期： 2018/7/27.
 */
const express = require('express'), //express 框架
    wechat  = require('./wechat/wechat'),
    config = require('./config');//引入配置文件
var path = require('path');
var request = require('request');
var sha1=require('sha1');

var app = express();//实例express框架

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

var wechatApp = new wechat(config); //实例wechat 模块

//用于处理所有进入 3000 端口 get 的连接请求
app.get('/',function(req,res){
    wechatApp.auth(req,res);
});

//用于处理所有进入 3000 端口 post 的连接请求
app.post('/',function(req,res){
    wechatApp.handleMsg(req,res);
});

//用于请求获取 access_token
app.get('/getAccessToken',function(req,res){
    wechatApp.getAccessToken().then(function(data){
        res.send(data);
    });
});

//跳转网页，引入jssdk，注意
app.get('/jssdk',function(req,res){
    wechatApp.jssdk(req,res);
});

//用于请求获取个人信息，先获取code，再获取access_token
app.get('/wxLogin', function(req,res, next){
    wechatApp.wxLogin(req,res);
});
//获取用户信息重定向到get_wx_access_token 页面
app.get('/getWxAccessToken', function(req,res, next){
    wechatApp.getWxAccessToken(req,res);
});


app.get('/test',function(req,res){
   res.send('hello');
});




//监听3000端口
app.listen(80);