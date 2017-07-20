/**
 * Created by LEJU on 2017/7/11.
 */
//读取俩个文件同时把属性赋值给一个对象，并且做到同步执行
//使用事件订阅发布
let EventEmitter = require('events');
let user = {};
let fs = require('fs');
let e = new EventEmitter();

fs.readFile('name.txt','utf-8',function(err,data){
    if(err)return console.log(err);
    user.name = data;
    e.emit('readed');
});

fs.readFile('age.txt','utf-8',function(err,data){
    if(err)return console.log(err);
    user.age = data;
    e.emit('readed');
});
e.on('readed',out);
function out(){
    //判断对象中有几个属性，把对象转换成数组再进行判断
    if(Object.keys(user).length === 2){
        console.log(user);
    }
}