/**
 * Created by LEJU on 2017/7/11.
 */
let fs = require('fs');

let copy=(target,source)=>{
    let rs = fs.createReadStream(target,{highWaterMark:4});
    let ws = fs.createWriteStream(source,{highWaterMark:1});
    rs.pipe(ws);
}
copy('name.txt','2.txt');