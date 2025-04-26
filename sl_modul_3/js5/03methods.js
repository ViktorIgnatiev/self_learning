'use strict'

/*
* Методи масивів
*
* - join - обєднує елементи масиву у строчку
* - split - метод строчки і ділить її на частини у *масив 
* - slice - зрізає частину вказаного (індексу) масиву. Або проміжок від - до 
* - concat - обєднує два масиви у один
* - indexOf - показує  індекс першого елемента співпадіння
* - push/pop - для додавання до мвсиву (в кінець push) \ pop видаляє останній елемент
*/

const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

const newCourses = ["JAVA", "C#", "Angular"]

// console.log(courses);

// * join
// const strElements = courses.join(" | ");
// console.log(strElements);

// *split
// const phoneNumber = "097 456 78 90"
// const arr = phoneNumber.split(" ")
// console.log(arr);
// const result = arr.join("-")
// console.log(result);

// * slice
// const newArr = courses.slice(2, 4)
// console.log(newArr);

// * conctat
// const secondNewArr = courses.concat(newCourses, "hello")
// console.log(secondNewArr);

// * index off

// const findI = courses.indexOf("JavaScript")
// console.log(findI);

// * push + pop - видаляє останній елемент 
// courses.push("TEST")
// console.log(courses); // додає в кінець
// courses.pop()
// console.log(courses); // видаляє останній елемент

// courses.unshift('start') // додає до початку масиву
// console.log(courses);
// courses.shift()
// console.log(courses); // видаляє з почату масиву


// * це для себе - ДЕСТРУКТУРИЗАЦІЯ МАСИВУ
// const [first, third] = courses
// console.log(first, third);
// *

