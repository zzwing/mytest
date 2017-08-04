/**
 * 创建websocket服务器
 */
let WsServer = require('ws').Server;
// 创建一个服务器实例
let server = new WsServer({port:8080});
//监听客户端的链接
//socket 代表的是与某个客户端的连接对象 每个客户端有唯一的socket服务
server.on('connection',function (socket) {
    //监听此客户端发过来的消息
    socket.on('message',function (msg) {
        console.log(msg);
        socket.send('服务器说：'+msg);
    });
});
