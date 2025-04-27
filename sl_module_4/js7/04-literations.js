'use strict'


/**

* Перебip об'скта
*
* - Цикл for...in
* - Метод Object.keys
* - Метод Object.values

*/

// * - Цикл for...in
// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,    
// };

// let totalFeedback = 0;

// for (const key in feedback) {
//     // console.log(feedback[key]);
//     totalFeedback += feedback[key]
//     }
// console.log("totalFeedback: ", totalFeedback);



/**
* *---  Метод Object.keys
*/
// const keys = Object.keys(feedback);
// console.log(keys);




// // * Метод Object.values
// const values = Object.values(feedback);
// console.log(values);



// *ЯК ЗРОБИТИ ДУБЛІКАТ / КОПІЮ ОБЄКТА 

// const car1 = {
//     color: 'reg',
//     model: 'BMW',
// }

//  *****Не дублює*****
// const car2 = car1
// car2.color = 'green';
// console.log(car1.color, car2.color);

// ********Що дублює********* ФУЕКЦІЯ 
// function makeCopy(objToCopy){
// const obj = {}
// for (const key in objToCopy) {
//     obj[key] = objToCopy[key]   
//     }
//     return obj
// }

// console.log(makeCopy(car1));

// const car2 = makeCopy(car1)
// car1.color = 'green'

// console.log(car1, car2);


