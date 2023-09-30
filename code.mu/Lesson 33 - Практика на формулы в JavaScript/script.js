'use strict'
/*
    Практика на формулы в JavaScript.
*/

// Задача 1. Пусть дана переменная r с радиусом круга.
// При соответствующей формуле найдите площадь круга и запишите ее в переменную s.
// Выведите содержимое этой переменной на экран.


function getRoundSquare (radius) {
    return 3.14 * (radius ** 2);
}

console.log(getRoundSquare(+prompt('введите радиус фигуры r: ','')));


/*
    Задача 2. Пусть дана переменная a со стороной квадрата.
    Найдите площадь квадрата и запишите ее в переменную s.
    Выведите содержимое этой переменной на экран.
*/

function getSquareArea (a) {
    return a * a;
}

console.log(getSquareArea(+prompt('введите длину стороны квадрата a: ','')));

/*
    Задача 3. Пусть даны переменные a и b со сторонами прямоугольника.
    Найдите площадь прямоугольника и запишите ее в переменную s.
    Выведите содержимое этой переменной на экран.
*/

function getRectangleArea(a , b) {
    return a * b;
}

let aRectSide = +prompt('Введите сторону прямоугольника a: ', '');
let bRectSide = +prompt('Введите сторону прямоугольника b: ', '');
console.log(getRectangleArea(aRectSide, bRectSide));

/*
    Задача 4. Пусть даны переменные a и b со сторонами прямоугольника.
    Найдите периметр прямоугольника и запишите его в переменную p.
    Выведите содержимое этой переменной.
 */

function getRectanglePerimeter(a, b) {
    return 2 * (a + b);
}

let aRectangleSide = +prompt('Введите сторону прямоугольника a: ', '');
let bRectangleSide = +prompt('Введите сторону прямоугольника b: ', '');
console.log(getRectanglePerimeter(aRectangleSide, bRectangleSide));

/*
    Задача 5. Пусть дана переменная tc с температурой в градусах Цельсия.
    По соответсвующей формуле выполните перевод этой температуры в градусы Фаренгейта.
 */

function getFTemperature(tc) {
    return tc * 32;
}

let tc = + prompt('Введите температуру в градусах Цельсия: ', '');
console.log (getFTemperature(tc));

/*
    Задача 6. Пусть дана переменная tf с температурой в градусах Фаренгейта.
    По соответствующей формуле выполните перевод этой температуры в градусы Цельсия.
 */

function getCTemperature(tf) {
    return tf / 32;
}

let tf = +prompt('Введите температуру в градусах Фаренгейта: ', '');
console.log(getCTemperature(tf));