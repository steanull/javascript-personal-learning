'use strict'
/*
    Получение элементов массивов в JavaScript.
    Обращение к элементам массива осуществляется подобно обращениям к символам строки.
    Каждый элемент массива имеет свой номер: первый элемент - номер 0, второй - номер 1 и так далее.
    Эти номера называются ключами элементов массива. Давайте посмотрим на примере.
    Пусть у нас дан следующий массив:
 */

let arr = ['a', 'b', 'c'];

// Давайте выведем его элементы:

console.log(arr[0]); // выведет a
console.log(arr[1]); // выведет b
console.log(arr[2]); // выведет c


// Задача 1. Создайте массив с элементами 1, 2, 3. Выведите на экран каждый из этих элементов.

let arr2 = [1, 2, 3];
console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[2]);

// Задача 2. Дан следующий массив:

let arr3 = [1, 2, 3];

// Выведите на экран каждый из его элементов.

console.log(arr3[0]);
console.log(arr3[1]);
console.log(arr3[2]);

// Задача 3. Дан следующий массив:

let arr4 = [1, 2, 3];

// Выведите на экран сумму элементов этого массива.

console.log(arr4[0] + arr4[1] + arr4[2]);

// Задача 4. Дан следующий массив:

let arr5 = ['a', 'b', 'c', 'd'];

// Выведите на экран с помощью этого массива строку: a+b+c+d

console.log(arr5[0] + '+' + arr5[1] + '+' + arr5[2] + '+' + arr5[3]);
