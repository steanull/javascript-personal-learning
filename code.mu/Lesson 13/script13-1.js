"use strict"

/*
    Константы в JS.
    Кроме переменных в JS можно создавать еще и константы.
    В них можно записывать данные только один раз, а затем из значения нельзя изменять.
    Константы объявляются с помощью оператора const.
    Обычно константы используются для значений, которые не должны быть случайно изменены в коде.
    Для примера сделаем константу, в которой будет храниться значение числа пи:
 */

const pi = 3.14;
// Обычно константы записываются большими буквами, чтобы их можно было отличить от обычных переменных:

const PI = 3.14;

// Давайте попробуем изменить значение нашей константы:

const PI1 = 3.14;
// PI1 = 3; // Выдаст ошибку Uncaught TypeError: Assigment to constant variable

let radius = 5;
const PI2 = 3.14;
let c = 2 * radius * PI2;
console.log(c);
