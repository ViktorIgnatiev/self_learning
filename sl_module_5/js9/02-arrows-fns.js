'use strict'

/**
 * Стрілочні функції
 * - Оголошення
 * - Явне і неявне повернення
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */


// !
// function name(a, b) { } // проста функція. Повернення через  return
// const x = (a, b) => { return a + B } // стрілочна функція. з return явним 
// const y = (a, d) => a + b; // трілочна функція. !БЕЗ return нявним
// !

// function add(a, b, c) {
//     return a + b + c;
// }

// // const addArrow =

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));

// !======================

// function fnA() {
//     return {
//         a: 5, // повертє обєкт
//     };
// }

// console.log(fnA());

// const arrowFnA = () => ({ a: 5 }) // * повернення оюбєкту у стрілочній фунції без return і тіла фунції (потрібно обвернути в круглі дужки)

// let с = 3
// const arr = b => b * 2; // найпростіший запис функції, за умови що параметр один
// console.log(arr(с));

// console.log(arrowFnA());


/*
* функція calc(a, b, callback)
*/

// function calc(a, b, callback) {
//     const result = callback(a, b);
//     console.log(result);
// }

// calc(2, 3, function (x, y) {
//     return x + y;
// }); // * варінт 1

// calc(2, 3, (x, y) => x + y); // * варінт 2 

// calc(10, 8, function (x, y) {
//     return x - y;
// });