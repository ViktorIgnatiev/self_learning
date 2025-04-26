'use strict'

/**
* Ітерація по масиву
*
* - Ітерація по масиву циклом for
* - Метод includes
* - Цикл for...of
* - Різниця у використанні for та for...of
*/

const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.log(friends);

// Ітерація циклом for з модифікацією елементів
// for (let i = 0; i < friends.length; i += 1) {
//     console.log(i);
//     console.log(friends[i]);
//     friends[i] += `-${i}`;  // Виправлено лапки на зворотні
// }
// console.log(friends);
// for (let i = 0; i < friends.length; i++) {
//     if (friends[i].includes("o")) {
//         console.log(friends[i]);
        
//     }
    
// }


// * цикл for...of
// Ітерація циклом for...of (без модифікації)
// for (let friend of friends) {
//     console.log(friend);
//     console.log(friends);
// }
// for (let element of friends) {
//     console.log(element);   
// }

/**
* Напиши скрипт для обчислення площі прямокутника зі сторонами,
* значення яких зберігаються у змінній values у вигляді рядка.
* Значення гарантовано розділені пробілом.
*/

// const values = "8 11";
// const sideSize = values.split(' ')
// console.log(sideSize);

// const a = Number.parseInt(sideSize[0])
// const b= Number.parseInt(sideSize[1]) 
// console.log(a * b)


/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

// const fruits = ["^", "&", "●", "⏰", "●"];

// for (let i = 0; i < fruits.length; i++) {
//     const s = `${i +1}:${fruits[i]}`
//     console.log(s);  
// }