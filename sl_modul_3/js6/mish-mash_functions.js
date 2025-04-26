'use strict'

// * псевдомасив  arguments i array.from

// проста функція
// function foo(a, b, c){
// console.log(a, b, c);
// }
// foo(1, 2, 3)

// фунція де кількість аргументів не відома. Використовуємо arguments для псевдомасиву і перетворення у масив

// function foo(){
//     console.log(Array.isArray(arguments)); // псевдомасив
//     const arr = Array.from(arguments) // перетворення в масив
//     console.log(arr); // масив
//     console.log(Array.isArray(arr)); // перевірка га масив Array.isArray
//     }
//     foo(1, 2, 3)
// =============================================================


// *функція для складання довільної кількості аргументів 

// const add = function() {
// const arr = Array.from(arguments)
// let total = 0
// console.log(arr);
//  for (const item of arr) {
//     total +=item
//  }
//  return total
// }


// // console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6));


// * похоже Фу дл прийняття довільної кількості аргументів і виведення середньог числа 

// function calAverage(){
//     const arr = Array.from(arguments)
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length
// }
// console.log(calAverage(1, 2, 3, 4, 5));


// * Задачка
/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення
 * у форматі <номер елемента> - <значення елемента>.
 * Нумерація елементів повинна починатися з 1.
 */

// function logItems(arr){
// for (let i = 0; i < arr.length; i++) {
//     console.log(`${i+1} : ${arr[i]}`);  
//     }
// }
// // logItems(["Mango", "Poly", "Ajax"]);
// logItems(["●", "●", "●", "▲", "●"]);


// * нижче задача була на попередньому занняті
/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача.
 * У параметри names та phones передаються рядки імен та
 * телефонних номерів, розділені комами. 
 * Порядковий номер імен та телефонів у рядках
 * вказує на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */

// printInfo(
//     "Jacob,William,Solomon,Artemis",
//     "89001234567,89001112233,890055566377,890055566300"
//   );


/**
 * Напиши функцію formatTime(minutes), яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

// function formatTime(allMinutes){

// const hours = Math.floor(allMinutes / 60)
//     // console.log(hours);
// const minutes = allMinutes % 60
//     // console.log(minutes);
// const finalHours = String(hours).padStart(2, 0)
// const finalMinutes = String(minutes).padStart(2, 0)
// console.log(`${finalHours}:${finalMinutes}`);

    
// }
// // Приклади використання:
// console.log(formatTime(70));    // "01:10"
// console.log(formatTime(450));   // "07:30"
// console.log(formatTime(1441));  // "24:01"


// * можна зробити
/**
 * Перевіряє, чи кожен елемент масиву більший за задане значення.
 * функція принімає два параметри
 *  Масив чисел для перевірки
 * число / значення для порівняння
 * функція повертає: "Success ✔" якщо всі елементи більші 
 * за value, інакше "Fail ✗"
 */



//* ЦІКАВА ЗАДАЧА 
/** 
 * функція яка Розбиває масив на підмасиви заданого розміру.
//  * @param {Array} arr - Початковий масив значень
//  * @param {number} count - Кількість елементів у кожному підмасиві
//  * @returns {Array} Масив, що містить підмасиви з заданою кількістю елементів
 */
// function getCombinations(arr, count) {
//     const result = [];
//     for (let i = 0; i < arr.length; i += count) {
//       const comb = arr.slice(i, i + count);
//       result.push(comb);
//     }
//     return result;
//   }
  
//   const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
//   // Приклади використання:
//   console.log(getCombinations(data, 2));
//   // [[1, 2], [3, 4], [5, 6], [7, 8], [9]]
  
//   console.log(getCombinations(data, 3));
//   // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  
//   console.log(getCombinations(data, 4));
//   // [[1, 2, 3, 4], [5, 6, 7, 8], [9]]

