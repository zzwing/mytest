/**
 * Created by LEJU on 2017/7/11.
 */
//可写流
let fs = require('fs');
let ws = fs.createWriteStream('1.txt',{highWaterMark:3});
let flag = ws.write('你好');
ws.end('ddd');