'use strict'
/*
    Массивы в JavaScript.
    Сейчас мы начнем изучать специальный тип данных, который называется массив.
    Массив представляет собой переменную, в которой в упорядоченном виде можно хранить целый набор каких-то значений.
    Значения, которые хранит массив, называются элементами.
    Элементы разделяются между собой запятой.
    После этой запятой принято ставить пробелы.
    Для создания массива используются квадратные скобки:
 */

let arr = [];

// Давайте заполним наш массив строками:

let arr1 = ['a', 'b', 'c'];

// А теперь заполним массив числами:

let arr2 = [1, 2, 3];
console.log(typeof(arr2));

// Кроме строк и чисел в массиве можно хранить все допустимые типы данных, а также смешивать их между собой в одном массиве:

let arr3 = [1, 2, 'a', 'b', null, true, false];

// Задача 1. Создайте массив с числами. Выведите его на экран с помощью функции alert, а также выведите его в консоль с
// помощью console.log.

let arr4 = [1, 2, 3, 4, 5];
alert(arr4);
console.log(arr4);

/*
    Задача 2. Создайте массив со строками. Выведите его на экран с помощью функции alert, а также выведите его
    в консоль с помощью console.log.
 */

let arr5 = ['a', 'b', 'c'];
alert(arr5);
console.log(arr5);