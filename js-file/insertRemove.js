
const frutes = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

frutes.push('pear');

console.log(frutes); // ['apple', 'banana', 'orange', 'grape', 'kiwi', 'pear']
frutes.pop();

console.log(frutes); // ['apple', 'banana', 'orange', 'grape', 'kiwi']

frutes.unshift('pear');
console.log(frutes); // ['pear', 'apple', 'banana', 'orange', 'grape', 'kiwi']
frutes.shift();
console.log(frutes); // ['apple', 'banana', 'orange', 'grape', 'kiwi']

frutes.splice(2, 0, 'pear');
console.log(frutes); // ['apple', 'banana', 'pear', 'orange', 'grape', 'kiwi']  
