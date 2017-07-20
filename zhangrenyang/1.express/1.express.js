/**
 * Created by LEJU on 2017/7/17.
 */
let express = require('express');
let app = express();
app.get('/home',function (req,res) {
    res.setHeader('Content-Type','text/html;charset=utf-8');
    console.log(req.url);
    console.log(req.query);
    console.log(req.params);
    res.end('好好');
});
app.get('/home/:id',function (req,res) {
    res.setHeader('Content-Type','text/html;charset=utf-8');
    console.log(req.url);
    console.log(req.query);//问号传参参数获取
    console.log(req.params);//路径参数获取
    res.end('好好');
});
app.all('*',function (req,res) {
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end('好');
})
app.listen(8080);