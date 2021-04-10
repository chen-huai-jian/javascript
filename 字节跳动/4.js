var name = 'world!';

function abc() {
  if (typeof name === 'undefined') {
    var name = 'Jack';
    console.log('Goodbye' + name); // GoodbyeJack
  } else {
    console.log('Hello' + name);
  }
}
abc()
