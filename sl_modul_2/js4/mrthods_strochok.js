'use strict'

// *Методи рядків 

// slice 
// toLowerCase/toUpperCase
// includes
// startsWith/endsWith
// indexOf
// trim

const username = "Jacob Mercer"

// console.log(username);

// const firstName = username.slice(0,5)
// console.log(firstName);

// const lastName = username.slice(6)
// console.log(lastName);
//  або можна -6 з кінця строчни рахує при мінусі 



// const upperUsername = username.toUpperCase()
// console.log(upperUsername);

// const lowerUsername = username.toLowerCase()
// console.log(lowerUsername);


// const userHave = username.includes("J")
// console.log(userHave);


// const startUsername = username.startsWith("Ja")
// console.log(startUsername);
// *endsEith to samo jak z startsWith 


// const index = username.indexOf("e")
// console.log(index);


// TRIM - обрізає пробіли з ліва і право 
const correctLogin = "Maksim123"
const userInput = "          Maksim123   "
console.log(correctLogin === userInput.trim());



// *** всі мтоди враховують ргістр !!!!!!!!!