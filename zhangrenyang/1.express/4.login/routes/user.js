/**
 * Created by LEJU on 2017/7/18.
 */
let express = require('express');
let user = express.Router();
module.exports = user;
let users = [];
//登录页面返回
user.get('/signin',function (req,res) {
    res.render('signin.html');
});
//登录按钮post请求
user.post('/signin',function (req,res) {
    let user = req.body;
    let flag = users.find(item=>{
        return item.username  == user.username && item.password == user.password;
    });
    if(flag){
        res.redirect('/user/welcome');
    }else{
        res.redirect('/user/signin');
    }

});

//注册页面返回
user.get('/signup',function (req,res) {
    res.render('signup.html');
});
//注册按钮post提交
user.post('/signup',function (req,res) {
    let user = req.body;
    let flag = users.find(item=>{
        return item.username  == user.username;
    });
    if(flag){
        res.redirect('/user/signin');
    }else{
        users.push(user);
        res.redirect('/user/signin');
    }
});
//注册页面返回
user.get('/welcome',function (req,res) {
    res.send('welcome');
});