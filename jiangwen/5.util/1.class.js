/**
 * Created by LEJU on 2017/7/10.
 */

class Person{
    constructor(name){
        this.name = name;
    }
    static fn(){
        console.log('静态方法，外部子类不能调用')
    }
    dirnk(){
        console.log('喝水');
    }
}
class Girl extends Person{
    constructor(name,age){
        super(name);
        this.age = age;
    }

}
let girl = new Girl(1,2);
let person = new Person();
console.log(person.name);
console.log(girl.age);
girl.dirnk();