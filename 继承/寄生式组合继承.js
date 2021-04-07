function Person () {
   this.head = '脑袋瓜子';
   this.emotion = ['喜','怒','哀','乐']
}
Person.prototype.eat = function () {
   console.log('吃吃喝喝');
}

Person.prototype.sleep = function () {
   console.log('睡觉觉');
}

Person.prototype.run = function () {
   console.log('快跑');
}

function Student () {
   Person.call(this);
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

var stu1 = new Student();
console.log(stu1.emotion);

stu1.emotion.push('愁');

var stu2 = new Student();
console.log(stu2.emotion);

console.log(stu1.eat(), stu2.eat(),stu2.run());

console.log(stu1.constructor);
console.log(stu2.constructor);
