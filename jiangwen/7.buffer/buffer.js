/**
 * Created by LEJU on 2017/7/10.
 */
// buffer 创建方式
//1.长度方式
let buf1 = new Buffer(10);
//2.数组
let buf2 = new Buffer([1,3,2]);
//3.字符串
let buf3 = new Buffer('你好');
//buffer 中常用的方法 toString slice copy concat
//1.buffer转换为字符串
//console.log(buf3.toString());
//2.copy (targetBuffer,targetStart,sourceStart,sourceEnd)
//targetBuffer：把调用copy方法的buffer实例拷贝到哪个目标buf 必填
//targetStart：拷贝到目标buf从那个字节开始，默认为 0 ，多个buf拷贝时是之前所有buf的length和
//sourceStart：源buf开始位置 默认 0
//sourceEnd：源buf结束位置 默认值 源的length
let buf4 = new Buffer('美女');
let bigBuffer = new Buffer(12);
buf3.copy(bigBuffer);
buf4.copy(bigBuffer,buf3.length,0,buf4.length);
//console.log(bigBuffer.toString());
//3.slice
let buf5 = new Buffer([1,2,3]);
let buf6 = buf5.slice(0,1);
buf6[0] = 100;
//console.log(buf5.toString());
//4.concat 是BUffer类上的方法
var buf7 = new Buffer('珠峰培');
var buf8 = new Buffer('训');
var buf9 = new Buffer('美丽');
var buf10 = new Buffer('大方');
//模拟一个concat方法
let myConcat=(list,totalLength)=>{
    //判断总长度如果不传 就循环list 算出长度总和
    if(typeof totalLength == 'undefined'){
        totalLength = 0;
        list.forEach(item=>totalLength += item.length);
    }
    let buffer = new Buffer(totalLength);
    let index = 0;
    list.forEach(item=>{
        item.copy(buffer,index);
        index += item.length;
    });
    totalLength = totalLength>index?index:totalLength;
    return buffer.slice(0,totalLength);
}
console.log(myConcat([buf7,buf8,buf9,buf10],12).toString());