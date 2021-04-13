Function.prototype.myCall = function (context) {
  /* 判断调用对象是否为函数 */
  if (typeof this !== "function") {
    throw new TypeError('Error')
  }
  // 判断传入上下文是否存在，不存在为window
  context = context || window;
  // 将调用函数设为对象的方法
  context.fn = this;
  let res = null;
  // 获取参数
  let args = [...arguments].slice(1);
  
  // 调用函数
  result = context.fn(...args);

  // 将属性删除
  delete context.fn;

  return res;
};

/**
 * 1. 判断是否为函数
 * 2. 判断传入上下文是否存在，不存在为window
 * 3. 给context创建一个函数,并将函数作为上下文对象的一个属性
 * 4. 处理传入的参数，截取第一个参数后的所有参数
 * 5. 调用这个函数并删除
 * 6. 返回结果
 */
