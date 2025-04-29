'use strict'

/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

// ! callback фунція  простий приклад
// const x = function () { };
// function test(userValue) {
//     //useValue = fuction(){}
//     userValue
// }
// test(x)

// !==============
// function myDay(breakfest, instructions) {
//     console.log('Wake up');
//     console.log('Go to school');
//     console.log(`eat ${breakfest}`);
//     console.log('Back from school');
//     console.log(instructions());
//     console.log('Prepare for sleeping');
// }


// function goToMusicSchool() {
//     console.log('Go to Music school');
//     console.log('Come back from Music School');
// }
// function goToDanceSchool() {
//     console.log('Go to Dance School');
//     console.log('Come back from Dance School');
// }
function gooShopping() {
    console.log('Go to Shopping');
    console.log('Back from shopping')
}

// myDay('apple', goToMusicSchool)
// !=====================

// функція вищого поядку приклад
// document.addEventListener('click', gooShopping)

// !=====================
// Приклад 1: Проста передача функції як значення



/**
 * Функція calc(a, b, callback)
 */
// function sum(x1, x2) {
//     return x1 + x2
// }

// function calc(a, b, callback) {
//  console.log(callback(a, b));
 
// }
// calc(2, 3, sum)

// !==============

/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим – функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */

// function showItem(item) {
//     console.log(`ITEM - ${item}`);
    
// }
// function multipleItem(item) {
//     return item * item
    
// }


// function each(array, callback) {
//     const newArr = []
//     for (let i = 0; i < array.length; i++) {
//         const res = callback(array[i])
//         newArr.push(res)
//     }
//     return newArr
// }
// each([1,2,32,34,455], showItem)
// console.log(each([1, 2, 3], multipleItem));

// !!!!++++++  INLINE CALLBACK FUNCTION++++++++++++++++

// function foo(userValue) {
//     console.log(userValue);

// }

// const x = 10
// function x(){}
// foo(x)
//????
// foo(10) //  або так 
// foo(function y(){}) // <= inline callback function передаєть одразу як параметр



