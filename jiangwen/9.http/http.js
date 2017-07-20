/**
 * Created by LEJU on 2017/7/12.
 */
let  http = require('http');
let fs = require('fs');
http.createServer(function(req,res){
    console.log('df');
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end('你好');
}).listen(3000);
