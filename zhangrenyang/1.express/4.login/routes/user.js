/**
 * Created by LEJU on 2017/7/18.
 */
let express = require('express');
let user = express.Router();
module.exports = user;
let users = [];
//登录页面返回
user.get('/signin',function (req,res) {
    res.render('signin.html',{err:req.cookies.inErr});
});
//登录按钮post请求
user.post('/signin',function (req,res) {
    let user = req.body;
    let flag = users.find(item=>{
        return item.username  == user.username && item.password == user.password;
    });
    if(flag){
        res.cookie('inErr','');
        res.redirect('/user/welcome');
    }else{
        res.cookie('inErr','用户名或密码错误，请重新输入');
        res.redirect('/user/signin');
    }

});

//注册页面返回
user.get('/signup',function (req,res) {
    res.render('signup.html',{err:req.cookies.upErr});
});
//注册按钮post提交
user.post('/signup',function (req,res) {
    let user = req.body;
    let flag = users.find(item=>{
        return item.username  == user.username;
    });
    if(flag){
        res.cookie('upErr',user.username+' 该用户名已存在');
        res.redirect('/user/signup');
    }else{
        users.push(user);
        res.cookie('upErr','');
        res.cookie('inErr','注册成功，请登录');
        res.redirect('/user/signin');
    }
});
//注册页面返回
user.get('/welcome',function (req,res) {
    res.cookie('upErr','');
    res.cookie('inErr','');
    res.send('welcome');
});