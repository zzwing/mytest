/**
 * Created by LEJU on 2017/7/11.
 */
let fs = require('fs');
let user = {};
function read(url){
    return new Promise(function ( resolve,reject) {
        fs.readFile(url,'utf-8',function(err,data){
            if(err)reject(err);
            resolve(data);
        });
    });
}
/*
read('name.txt').then(function (data) {
    user.name = data;
    if(Object.keys(user).length === 2){
        console.log(user);
    }
},function (err) {
    console.log(err);
});

read('age.txt').then(function (data) {
    user.age = data;
    if(Object.keys(user).length === 2){
        console.log(user);
    }
},function (err) {
    console.log(err);
});*/
Promise.all([read('name.txt'),read('age.txt')]).then(function ([name,age]) {
    user = {
        name,age
    }
    console.log(user);
});