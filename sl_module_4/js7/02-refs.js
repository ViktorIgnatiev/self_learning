'use strict'

/**
 * *Обєкти
 *  
 * - Тип даних за посиланням
 * - Масиви і функції - це об'єкти
 */

/**
 * Приклади об'єктів (типів за посиланням)
 */

// Масив (спеціальний тип об'єкта)
// const arr = [1, 2, 3];

// Функція (також об'єкт)
// function foo() {
//     console.log("hello");
// }

// * масив як і обєкт це референсний
// * тип дпнних  і приклад записування посилання на масив у змінну

// const arrRef = [1, 2, 3]
// const arrRef2 = arrRef
// arrRef2.push(300)
// console.log(arrRef, arrRef2);
// console.log(arrRef === arrRef2);

// * З обєктами тке саме 
// const user1 = {
//     username: 'Max',
//     age: '34',
//     city: 'Lviv',
// }
// const user2 = user1;
// user2.username = 'Viktor'
// console.log(user1, user2);

// * ЯК РОБИТИ ДУБЛІКАТ ОБЄКТА??? запис в 04 JS IERATIONS**********


// const user = {
//     username: 'Max',
//     age: '34',
//     city: 'Lviv',
// }
// function prettyPrint(object){
//     object.username = object.username.toUpperCase()
//     console.log(object.username);
    
// }

// prettyPrint(user)
// console.log(user);


