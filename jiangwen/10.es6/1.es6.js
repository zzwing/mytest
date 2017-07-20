/**
 * Created by LEJU on 2017/7/11.
 */
let obj = {name:'zcf',age:18};
let {name,age}=obj;
let {name:myname,age:myage} = {name,age};
console.log(name,age,myname,myage);