/**
 * Created by LEJU on 2017/7/25.
 */
let  Socket = require('ws');
//通过ws协议连接本机的8080端口
let socket = new Socket('ws://localhost:8080');
//当客户端连接服务器成功之后 会执行对应的回调函数
socket.on('open',function () {
    console.log('连接服务器成功');
    socket.send('服务器你好');//向服务器发送消息
});
socket.on('message',function (msg) {
    console.log('接到消息：'+msg);
})