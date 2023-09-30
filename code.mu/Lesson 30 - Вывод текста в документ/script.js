'use strict'
/*
    Вывод текста в документ в JavaScript.
    Средствами JavaScript можно управлять тегами HTML страницы, например, выводить в них текст.
    Этому мы будем учиться позднее, когда будем проходить раздел, посвященный работе с DOM.
    Иногда, однако, в отладочных целях требуется вывести какой-нибудь текст в окно браузера.
    Это делается с помощью команды document.write. Посмотрим работу с ней на примерах.
    Выведем числовое значение:
 */

document.write(123);

// Выведем какой-нибудь текст:

document.write('text');

// Выведем текст, заключенный в теги:

document.write('<b>text</b>');

// Выведем текст из переменной:

let str = 'text';
document.write(str);

// Заключим текст из переменной в теги:

let str1 = 'text';
document.write('<b>'+ str1 + '</b>');

// Выведем текст в два ряда:

document.write('text <br> text');

// Выведем много текстов в колонку:

document.write('text');
document.write('<br>');
document.write('text');

// Задача 1. Выведите в окно браузера какой-нибудь текст.

document.write('Какой-нибудь текст');

// Задача 2. Выведите в окно браузера какой-нибудь текст, сделав его курсивом.

document.write('<i>какой-нибудь текст</i>');

// Задача 3. Дана переменная. Выведите текст из переменной в окно браузера так, чтобы он был курсивом.

let str3 = 'text';
document.write('<i>' + str3 + '</i>');

// Задача 4. Выведите в окно браузера столбец чисел от 1 до 5.

document.write('<br>');
document.write('<table>');
document.write('<tr>');
document.write('<td>1</td>');
document.write('<td><b>2</b></td>');
document.write('<td>3</td>');
document.write('<td>4</td>');
document.write('<td>5</td>');
document.write('</tr>');
document.write('</table>');
