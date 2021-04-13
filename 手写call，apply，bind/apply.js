Function.prototype.myApply = function (context) {
  if (typeof this !== "function") {
    throw new TypeError('error')
  }
  let res = null;
  context = context || window;

  context.fn = this;

  if (arguments[1]) {
    res = context.fn(...arguments[1])
  } else {
    res = context.fn()
  }

  delete context.fn;
  return res;
}