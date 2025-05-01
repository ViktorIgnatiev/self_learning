'use strict'

/**/
// * Метод forEach(callback)
// * - Поелементно перебирає оригінальний масив
// * - Нічого не повертає
// * - Замінює класичний for, якщо не потрібно переривати цикл
// */

// !===================================================

// const arr = ["Hello","World","Test","Name","Max","Korz"]

// function showItem(item, index) {
//     console.log(item, index);
// }
// console.log(arr.forEach(showItem));
// *АБО
// console.log(arr.forEach((item, index) => {
//     console.log(item, index)
// }))


// !===================================================
// const numbers = [5, 10, 15, 20, 25];
// let total = 0;

// console.log(total);

// /**
//  * Виконайте рефакторинг коду за допомогою методу forEach та стрілочної функції
//  */
// function logItems(items) {
//     console.log(items);
//     for (let i = 0; i < items.length; i += 1) {
//         console.log('${i + 1} - ${items[i]}');
//     }
// }

// function logItems(items) {
//     console.log(items);
//     items.forEach((item, index) => { 
//         console.log(`${index + 1} - ${item}`)
//     });
// }

// logItems(['Mango', 'Poly', 'Ajax'])
// logItems(['apple', 'pineapple', 'banana', 'lime', 'juce'])

