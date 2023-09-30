"use strict"
/*
    Шаблонные строки в JS.
    Существует специальный тип кавычек - косые (обратные):
 */

let str1b = `abc`
alert(str1b); // Выведет abc

/*
    В косых кавычках можно выполнять вставку переменных.
    Для этого имя переменной нужно написать в конструкции ${}.
 */

let str2b = 'xxx';
let txt2b = 'aaa ' + str2b + ' bbb';

alert(txt2b);

let str3b = 'xxx';
let txt3b = `aaa ${str} bbb`;
alert(str3b + '' + txt3b);

let str4b = 'xxx';
let str5b = 'yyy';
let txt5b = `aaa ${str4b} bbb ${str5b} ccc`;
alert(txt5b);

