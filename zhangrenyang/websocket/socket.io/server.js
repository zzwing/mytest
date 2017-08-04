/**
 * 聊天室 页面（express）+消息通信(socket.io)
 */
let express = require('express');
let path = require('path');
let {Message} = require('./model');
let app = express();
app.get('/',function (req,res) {
    res.sendFile(path.resolve('index.html'));
});
app.use(express.static(path.resolve('../../../node_modules')))
//app.listen(8080);
let server = require('http').createServer(app);
let io = require('socket.io')(server);
let sockets = {};//存放每个客户端的用户名和socket对象对应关系
//监听客户端的连接 当连接到来的时候执行对应的回调函数
io.on('connection',function (socket) {
    //监听客户端发送消息
    let username;
    socket.on('message',function (msg) {
        if(username){
            let regexp = /@([^\s]+) (.+)/;
            let result = msg.match(regexp);
            if(result){
                //私聊 得到了私聊对方的用户名
                let toUser = result[1];
                let content = result[2];
                console.log(toUser);
                sockets[toUser].send({username,content,createAt:new Date().toLocaleString()});
                socket.send({username,content,createAt:new Date().toLocaleString()});
            }else{
                Message.create({username,content:msg},function (err,message) {
                    //广播给所有人
                    io.emit('message',message);//把消息发给所有人所有客户端
                });
            }
        }else{
            username = msg;
            sockets[username] = socket;//建立用户名和socket对象的对应关系
            //广播给所有人
            io.emit('message',{username:'系统',content:`欢迎${username}来到聊天室`,createAt:new Date().toLocaleString()});//把消息发给所有人所有客户端
        }

        //socket.send('服务器说：'+msg); //
    });
});

server.listen(8080);