/**
 * Created by LEJU on 2017/7/10.
 */
//先创建一个对象
//on 订阅 emit 发布
//先给对象绑定一个事件，
//触发对象绑定的事件
class Man{
    constructor() {
        this._events = {}
    }
    on(eventname,callback){
        if(this._events[eventname]){
            this._events[eventname].push(callback);
        }else {
            this._events[eventname] = [callback];
        }
    }
    emit(eventname,...args){
        if(this._events[eventname]){
            this._events[eventname].forEach(item=>item.apply(this,args));
        }
    }
    removeListener(eventname,callback){
        if(this._events[eventname]){
            this._events[eventname] = this._events[eventname].filter(cb=>{
               return cb !==  callback && cb.l !== callback
            });
        }
    }
    once(eventname,callback){
        //发布方法
        //1.绑定事件
        //2.当触发事件的时候，就删除此事件
        function one(...args){
            callback(args);
            this.removeListener(eventname,one);
        }
        this.on(eventname,one);
        one.l = callback;
    }
}

let buyCar=(...args)=>console.log('买车' + args);
let buyPack=(...args)=>console.log('买包'+ args);

let man = new Man();

man.on('haveMoney',buyCar);
man.once('haveMoney',buyPack);
man.removeListener('haveMoney',buyPack);
man.emit('haveMoney','小张','小李');
man.emit('haveMoney','小张','小李');