'use strict'

/**
 * Масив обєктів
 *
 * - Перебір масиву
 * - Пошук об'єкта за значенням властивості
 * - Колекція значень властивості
 */

// const friends = [
//     { name: "Mango", online: false },
//     { name: "Kiwi", online: true },
//     { name: "Poly", online: false },
//     { name: "Ajax", online: false },
// ];

// console.log(friends);

/**
 * Пошук друга за іменем
 */
// function findFriendByName(allFriends, friendName) {
//      for (const friend of friends) {
//         if (friend.name === friendName) {
//             return friend
//         }
//      }
// }

// console.log(findFriendByName(friends, "Poly")); // { name: "Poly", online: false }
// console.log(findFriendByName(friends, "Chelsy")); // undefined

/**
 * Отримуємо імена всіх друзів
 */
// function getAllNames(allFriends) {
//     const getAllNames = []
//     for (const friend of allFriends) {
//         getAllNames.push(friend.name)
//     }
//     return getAllNames
// }

// console.log(getAllNames(friends)); // ["Mango", "Kiwi", "Poly", "Ajax"]



/**
 * Отримуємо імена тільки тих друзів, які зараз онлайн
 */
// function getOnlineFriends(a1lFriends) {
//     let onlineUser = []
//     for (const friend of a1lFriends) {
//         if (friend.online) {
//             onlineUser.push(friend.name)
//         }
//     }
//     return onlineUser
// }

// console.log(getOnlineFriends(friends));



/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//     { name: "Смарагд", price: 1300, quantity: 4 },
//     { name: "Діамант", price: 2700, quantity: 3 },
//     { name: "Салфір", price: 400, quantity: 7 },
//     { name: "Щебінь", price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//     for (const stone of stones) {
//         if (stone.name === stoneName) {
//             return `${stone.name}: Amount ${stone.quantity} Result: ${stone.price * stone.quantity}`
//         }
//     }
// }


// console.log(calcTotalPrice(stones, 'Смарагд'));

