function Animal () {  // 构造函数
   this.color = ["black", "white"];
}

Animal.prototype.getColor = function () {
   return this.color
}

function Dog () {
   
}

Dog.prototype = new Animal(); /// Dog继承Animal

let dog1 = new Dog(); // 生成实例
console.log(dog1.color);
dog1.color.push('brown');
let dog2 = new Dog();
console.log(dog2.color); //[ 'black', 'white', 'brown' ]
let dog3 = new Dog();
console.log(dog3.getColor()); // [ 'black', 'white', 'brown' ]


/* 原型链继承的问题 */
// 1. 原型链包含的引用类型属性将被所有实例共享
// 2. 子类在实例化的时候不能给父类构造函数传参