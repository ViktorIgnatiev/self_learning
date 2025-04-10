'use strict'

// function sayHello(){
//     console.log("Hello world!");
//     console.log("Hello world!");
//     console.log("Hello world!");    
// }

// sayHello()

// function summa(num1, num2, num3){
//     const result = num1 + num2 + num3;
//     console.log(result);
    
// }

// summa(12, 23, 34)

// // return

// function calcP(a, b){
//     const p = (a + b) * 2;
// return p;
// }

// const b = calcP(1, 2)
// console.log(b);

 function calcBMI(weight, height){
    weight = Number.parseFloat(weight);
    height = Number.parseFloat(height);

    const bmi = weight / (height ** 2);
    return bmi.toFixed(1);
 }

const bmi = calcBMI("88,3", "1.75");
console.log(bmi);


