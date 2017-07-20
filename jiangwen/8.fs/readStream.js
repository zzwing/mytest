/**
 * Created by LEJU on 2017/7/11.
 */
//可读流
let fs = require('fs');
let rs = fs.createReadStream('name.txt',{highWaterMark:3});
let arr = [];
rs.on('data',function (data) {
    arr.push(data);//读取的是buffer
    rs.pause();
    setTimeout(function () {
       rs.resume();
    },2000);
});
rs.on('end',function () {
    console.log(Buffer.concat(arr).toString());
});
