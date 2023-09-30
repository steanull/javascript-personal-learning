"use strict"
/*
    Специальные значения в JS.
    В JS, как и в других языках программирования, существуют ключевые слова для некоторых специальных значений.
    Вот они: undefined, null, true, false, NaN, Infinity, -Infinity.
 */

// Значение undefined

/*
    Значение undefined обозначает неопределенность.
    Такое значение будет у переменной, если мы объявили ее, но не записали в нее значение:
 */

let a1a;
alert(a1a); // Выведет undefined

// Это значение можно присвоить переменной явно:

let a2a = undefined;
alert(a2a); // Выведет undefined

/* Значение null.
    Значение null обозначает "ничего".
    К примеру, мы можем присвоить переменной такое значение в знак того, что так ничего не лежит:
 */

let a3a = null;
alert(a3a); // Выведет null

let a4a = null;
alert(a4a);

/*
    Значения true и false.
    Значения true и false обозначают истину и ложь соответственно.
    Они используются для таких вещей, которые предполагают два варианта ответа - да или нет.
 */

let a5a = true;
alert (a5a);

let a6a = false;
alert(a6a);

/*
    Значение NaN.
    Значение NaN (Not-A-Number) обозначает не число.
    Такое значение получается тогда, когда вы пытаетесь делать математические операции не с числами, а с чем-то другим.
    К примеру, такое значение даст попытка умножить строку на число:
 */

alert('abc' * 3); // Выведет NaN

// Любые операции с NaN приводят к тому, что результатом все равно остается NaN:

alert(NaN + 1); // Выведет NaN

let str1a = 'Hello';
let str2a = 'World';
alert(str1a * str2a);

/*
    Infinity и -Infinity.
    Значения Infinity и -Infinity обозначают соответственно бесконечность и минус бесконечность.
    Такие значения получаются, если какое-то число поделить на ноль - в этом случае JS не выдает ошибку,
    как в других языках программирования, а возвращает эти значения:
 */

alert(1 / 0); // Выведет Infinity
alert(-1 / 0); // Выведет -Infinity

alert(10 / 0);
alert(-10 / 0);