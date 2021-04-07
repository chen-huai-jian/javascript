function typeOf (obj) {
   /* Object.prototype.toString返回一个形如[Object xxx]的字符串 */
   let res = Object.prototype.toString.call(obj).split(' ')[1];
   // console.log(res);
   res = res.substring(0, res.length -1).toLowerCase();
   console.log(res);
   return res;
}

typeOf([])
typeOf({})
typeOf(new Date)

