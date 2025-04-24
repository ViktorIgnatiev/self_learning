'use strict'

// логічний оператор && - END (перший falcse або оствнній true)
// логічний оператор || - EOR (перший true або останні false)
// оператор обертання !значення - обертає наоборот 

// console.log(5 && 4);
// console.log(5 && "mango");


// console.log(false || 5);
// console.log(false || null);

// console.log(!5);
// console.log(!false);

const resOfLogin = true
const resOfPass = false
const res = resOfLogin && resOfPass
console.log(res);

const benz = true
const gaz = false

console.log(benz || gaz);

