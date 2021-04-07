function Person () {
   this.head = '脑袋瓜子';
   this.emotion = ['喜','怒','哀','乐']
}

function Student () { 
   Person.call(this);  // 构造函数继承
}

var stu1 = new Student();//生成实例
console.log(stu1.emotion);//[ '喜', '怒', '哀', '乐' ]

stu1.emotion.push('愁');
console.log(stu1.emotion); //[ '喜', '怒', '哀', '乐', '愁' ]

var stu2 = new Student();
console.log(stu2.emotion); //[ '喜', '怒', '哀', '乐' ]

/** 缺点
 * 1.  每个实例都拷贝一份，占用内存大，尤其是方法过多的时候
 * 2. 方法都作为了实例自己的方法，当需求改变，要改动其中的一个方法时，之前所有的实例，他们的该方法都不能及时作出更新。只有后面的实例才能访问到新方法
 */