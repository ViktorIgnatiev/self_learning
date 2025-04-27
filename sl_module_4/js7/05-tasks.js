'use strict'

/*Напиши скрипт, який для об'єкта user, послідовно:**

* - додає поле mood зі значенням 'happy'
* - замінює значення hobby на 'skydiving'
* - замінює значення premium на false
* - виводить вміст об'єкта user у форматі ключ:значення використовуючи 
Object.keys() та for...of
*/

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true,
// };

// user.mood = 'happy'
// console.log(user);
// user.hobby = 'skydiving'
// console.log(user);
// user.premium = 'false'
// console.log(user);

// * Option 1  with out Object keys 
// for (const key in user) {
//     console.log(`${key}:${user[key]}`);
// }

// *Option 2 with Object.keys
// const keys = Object.keys(user)
// console.log(keys);
// const values = Object.values(user)
// console.log(values);
// for (let i = 0; i < keys.length; i++) {
//     console.log(`${keys[i]}:${values[i]}`);
// }

// * Option 3 wit For of
// const keys = Object.keys(user)
// for (const key of keys) {
//     console.log(`${key}:${user[key]}`);
// }



/**
* У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код 
для підсумовування всіх зарплат і збережіть результат у змінній sum.
* Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має 
бути 0.

*/

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// let sum = 0;

// for (const val of Object.values(salaries)) { // Object.values(salaries) повертає масив 
//     sum += val
// }
// console.log(sum);

