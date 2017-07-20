/**
 * Created by LEJU on 2017/7/12.
 */
let  http = require('http');
let fs = require('fs');
let mime = require('mime');
http.createServer(function(req,res){
     console.log(req.url);
    let pathname = req.url;
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        fs.createReadStream('index.html').pipe(res);
    }else if(pathname == "/clock"){
       // res.setHeader('Content-Type','text/html;charset=utf-8');
        res.end(JSON.stringify({timer:new Date().toLocaleString()}));
    }else{
        let flag = fs.existsSync('.'+pathname);
        console.log(flag);
        if(flag){
            res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf-8');
            fs.createReadStream('.'+pathname).pipe(res);
        }else{
            res.statusCode = 404;
            res.end('not found');
        }
    }
}).listen(3000);