/* 递归实现 */
// function flatten (arr) {
//    var res = [];
//    for (let i = 0; i < arr.length; i++){
//       if (Array.isArray(arr[i])) {
//          res = res.concat(flatten(arr[i]))
//       } else {
//          res.push(arr[i])
//       }
//    }
   // return res
// }

// const demo = flatten([1, [2, [3]]]);
// console.log(demo);


/* ES6实现 */
function flatten (arr) {
   while (arr.some((item) => Array.isArray(item))){
      arr = [].concat(...arr)
   }
   return arr
}






