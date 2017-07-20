/**
 * Created by LEJU on 2017/7/17.
 */
let express = require('express');
let user = express.Router();
module.exports = user;
user.get('/signin',function (req,res) {
    res.render('index.html',{msg:'登录'});
})