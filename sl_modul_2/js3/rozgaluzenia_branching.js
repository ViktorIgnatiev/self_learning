'use strict'

// if, if..else, else..if, тернарний оператор

// if (condition) {
    
// } else {}


// let number = 1;

// if (number > 12){
//     console.log("Good!!!");  
// }
// else{
//     console.log("Bad!!!");
// }

let points = 5001;

if (points >= 7000) {
    points += points * 0.1
} 
else if (points <= 5000) {
    points -= points *0.15
} 
else if (points > 5000 || points < 7000) {
    points += 200;
    
}

console.log(points);


