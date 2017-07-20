## 继承

    - 只继承私有属性
        > 在子类的构造函数中 Parent.call(this,name); 相当于让父类在子类中执行，将this改变成子类这样父类的私有属性就会被子类拿到
    - 只继承公有属性
        > child.prototype.__proto__ = parent.prototype
        > function create(proto){
            function Fn (){};
            fn.prototype = proto;
            return new Fn();
            }
            child.prototype = create(parent.prototype)

        > Object.setPrototypeOf(child.prototype,parent.prototype);
    - 全部继承
        > child.prototype = new Parent(); 此方式不能传参数给父类
        > class child extends parent{ //es6
                constructor(name,age){
                    super(name);// //必须调用，相当于调用 父类函数,父类函数中的this指向girl
                    this.age = age;
                }
            }

