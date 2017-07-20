/**
 * Created by LEJU on 2017/7/12.
 */
let http = require('http');
let fs = require('fs');
let url = require('url');
let mime = require('mime');
let user = [{username:'zcf',password:'1111',id:1},{username:'zfpx',password:'22333',id:2}];
http.createServer(function (req,res) {
    let {pathname,query} = url.parse(req.url,true);
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname == '/user'){
        let method = req.method;
        switch(method){
            case 'GET':
                if(!query.id){
                    res.end(JSON.stringify(user));
                }
                break;
            case 'POST':
                let str = '';
                req.on('data',function (data) {
                    str += data;
                });
                req.on('end',function (err) {
                    let param = JSON.parse(str);
                    let newid = user.length>0?user[user.length-1].id+1:1;
                    user.push({username:param.username,password:param.password,id:newid});
                    res.end(JSON.stringify(user));
                });
                break;
            case 'DELETE':
                if(query.id){
                    for(let i=0;i<user.length;i++){
                        if(user[i].id == query.id){
                            user.splice(i,1);
                            break;
                        }
                    }
                    res.end(JSON.stringify(user));
                }
                break;
            case 'PUT':
                let strP = '';
                req.on('data',function (data) {
                    strP += data;
                });
                req.on('end',function () {
                    let {username,password,id} = JSON.parse(strP);
                    for(let i=0;i<user.length;i++){
                        if(user[i].id == id){
                            user[i].username = username;
                            user[i].password = password;
                            res.end(JSON.stringify(user));
                            break;
                        }
                    }
                });

                break;
        }
    }else{
        let flag = fs.existsSync('.'+pathname);
        if(flag){
            res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf-8');
            fs.createReadStream('.'+pathname).pipe(res);
        }else{
            res.statusCode = 404;
            res.end('not found');
        }
    }
}).listen(3000);