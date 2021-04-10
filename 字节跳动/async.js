const getjson = () => {
  return 'json'
}

// 函数前面加async 只是声明这个函数内部存在异步
async function testAsync (){
  try {
    // 函数前面加，await 那么逻辑就会等到这个异步函数执行完毕后再执行,在往下执行
    await getjson()
    
  } catch (error) {
    console.log(error);
  }
  
  // ...
}

testAsync().then(() => {
  getjson()
})
  .then(() => {
  // ...
})