'use strict'

console.log(Number('5'));
console.log(Number(false));
console.log(Number(undefined));

// неявне

console.log(Number('5' * 2));

const data = "234.56hello"

console.log(Number(data));
console.log(Number.parseInt(data)); //234
console.log(Number.parseFloat(data));
