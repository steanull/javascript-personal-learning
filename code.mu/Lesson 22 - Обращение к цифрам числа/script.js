"use strict"
/*
    Обращение к цифрам числа в JavaScript.
    Пусть теперь в переменной у нас хранится не число в кавычках, а просто число.
    В этом случае попытка обратиться к его отдельному символу выдаст undefined,
    так как такое обращение работает только для строк:
 */

let test = 12345;
console.log(test[0]); // выдаст undefined

// Для решения проблемы преобразуем наше число в строку:

let test1 = String(12345); // Строка
console.log(test1[0]); // выведет 1

// Пусть мы теперь хотим найти сумму первых двух цифр:

let test2 = String(12345); // Строка
console.log(test2[1] + test2[2]); // Выведет 12 - суммирует как строки

// Добавим функцию Number для того, чтобы символы суммировались как числа:

let test3 = String(12345); // Строка
console.log(Number(test3[0]) + Number(test3[1])); // Выведет 3

/*
    Напоминаю, что проблема такого рода возникает только при суммировании.
    При умножении, например, преобразование к числам можно не выполнять:
 */

let test4 = String(12345); // Строка
console.log(test4[0] * test4[1]); // Выведет 6

//  Задача 1. Дано число 12345. Найдите сумму цифр этого числа.
let test5 = '' + 12345;
let sum5 = 0;
for (let i = 0; i <= (test5.length - 1); i++) {
    sum5 += +test5[i];
}
console.log(sum5);

let test6 = String(12345);
console.log(Number(test6[0]) + Number(test6[1]) + Number(test6[2]) + Number(test6[3]) + Number(test6[4]));

// Задача 2. Дано число 12345. Найдите произведение цифр этого числа.

let test8 = '' + 12345;
let sum8 = 1;
for (let i = 0; i <= test8.length - 1; i++) {
    sum8 *= test8[i];
}
console.log(sum8);

let test9 = String(12345);
console.log(test9[0] * test9[1] * test9[2] * test9[3] * test9[4]);

// Задача 3. Дано число 12345. Переставьте цифры этого числа в обратном порядке.

let test10 = String(12345);
console.log(test10[4] + test10[3] + test10[2] + test10[1] + test10[0]);

let test11 = '' + 12345;
let reverse11 = '';
for (let i = test11.length - 1;i >= 0; i--) {
    reverse11 += test11[i];
}
console.log(reverse11);