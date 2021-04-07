function unique (arr) {
   var res = arr.filter((item, index, array) => {
      return array.indexOf(item) === index // indexOf 返回数组元素第一个出现的索引
   })
   return res
}

var unique = arr => [...new Set(arr)]