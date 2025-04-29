'use strict'

// ✰️ Синтаксис spread і rest
    // *sred - розбирає щось на данні(масив нп.)
    // *rest - збирає данні у щось 
// ✰️ - Залишкові параметри
// ✰️ - Збір частини аргументів
// ✰️ - Входження параметрів
// ✰️ - Створення масиву
// ✰️ - Створення об'єкта
// ✰️

// const numbers = [];
// console.log(numbers);

/**
✰️ Пошук найменшої або найбільшої температури (числа)
/** */

// const temps = [18, 14, 12, 21, 17, 29, 24];
// console.log(Math.min(...temps)); // spred
// console.log(Math.max(...temps)); // spred


/**
✰️ Створення масиву і тип за посиланням
✰️/** */

// const a = [{x: 1}, { y: 2 }, { z: 3 }];
// const b = [...a]; // копійовання масиву spred
// a.push({s: 34})
// a[0].x = 100 // міняємо у обєкті Їх посилання остаються ті самі навіть при дубльованню масиву

// console.log("a:", a);
// console.log("b:", b);


/*  
* Послугемо кілька масивів в один через spread */  

// const lastWeekTemps = [1, 2, 3];  
// const currentTemps = [4, 5, 6];  
// const nextWeekTemps = [7, 8, 9];  

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);  

/*  
* Створення об'єкта */  

// const objA = { x: 1, y: 2 };  
// const objB = { x: 0, z: 3 };  
// const objC = {hello: 1000, ...objA, ...objB};  

// console.log(objC);



// Оновлюємо налаштовання користувача

// const defaultSettings = {
//     theme: "Light",
//     showNotifications: true,
//     hideSidebar: false,
// };

// const userSettings = {
//     showNotifications: false,
//     hideSidebar: true,
// };

// const finalSettings = {...defaultSettings, ...userSettings}

// console.log(finalSettings)


