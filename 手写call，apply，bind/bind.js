Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw TypeError('error');
  }
  // 缓存this
  const self = this;
  const args = [...arguments].slice(1);

  //返回一个函数
  return function fn() {
    // 判断调用方式
    if (this instanceof fn) {
      return new self(...args, ...arguments);
    }
    return self.apply(context, args.concat(...arguments));
  };
};
