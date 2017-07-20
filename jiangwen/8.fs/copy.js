/**
 * Created by LEJU on 2017/7/11.
 */
//使用可读流 可写流 实现文件内容的拷贝
let fs = require('fs');

let copy=(target,source)=>{
    let rs = fs.createReadStream(target,{highWaterMark:12});
    let ws = fs.createWriteStream(source,{highWaterMark:3});

    rs.on('data',function (data) {
        let flag = ws.write(data);
        if(!flag)rs.pause();
    });
    ws.on('drain',function (data) {
        //每一次全部写入完成触发
        rs.resume();
    })
    rs.on('end',function () {
        ws.end();
    });
    rs.on('error',function (err) {
        console.log(err);
    })
}
copy('name.txt','age.txt');
//可读流
// rs.on('data',function(data){}); node不停的 emit 发布这个时间 每次读取固定大小的内容
// rs.on('end',function(){}); 文件整个内容读取完毕触发的事件
// rs.on('error',function(err){}); 读取的内容抛出错误时
// rs.pause(); 暂停读取 一般用于一次写入还没完成的时候先暂停
// rs.resume(); 恢复读取 一般用于一次写入完成时候
//可写流
// flag = ws.write(data) 往文件里写入内容 返回是否将data全部写入完成
// ws.on('drain',function(){}) 当一次写入的内容完成时 触发事件
// ws.end(); 全部内容写入完成 关闭 可写流