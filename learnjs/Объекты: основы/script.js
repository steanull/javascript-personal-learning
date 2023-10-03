'use strict'
/*
    Задача 1. Напишите код, выполнив задание из каждого пункта отдельной строкой:
*/

let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

/*
    Задача 2. Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false
 */

let schedule = {};
console.log(isEmpty(schedule));

schedule['8:30'] = "get up";
schedule['test'] = "test";
console.log(isEmpty(schedule));

function isEmpty(obj) {
    for (let prop in obj) {
        return false;
    }
    return true;
}

/* Задача 3.
    У нас есть объект, в котором хранятся зарплаты нашей команды.
    Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
    Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.
 */

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function getSumOfSalaries (obj) {
    let sum = 0;
    for (let prop in obj) {
        sum += obj[prop];
    }
    return sum;
}

console.log(getSumOfSalaries(salaries));

/*
    Задача 4. Объекты-константы?
    Можно ли изменить объект, объявленный с помощью const?
 */

const newUser = {
    name: 'John',
};

// Это будет работать?
newUser.name = 'Pete'; // ДА!!!
console.log(newUser.name);

/*
    Задача 5.
    Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
    Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменить объект.
 */

let menu = {
    width: 200,
    height: 300,
    title: 'My menu',
}

multiplyNumeric(menu);
console.log(menu);
console.log(Number(menu['title']))

function multiplyNumeric(obj) {
    for (let prop in obj) {
        if(obj[prop] === (Number(obj[prop]))) {
            obj[prop] *= 2;
        }
    }
    return obj;
}