"use strict"
/*
    Преобразование к логическому типу в JavaScript.
    Давайте теперь изучим преобразование других типов данных к логическому.
    Такое преобразование осуществляется с помощью функции Boolean.
    Вот значения, которые при приведении к логическому типу дают false:
 */

console.log(Boolean("")); //false
console.log(Boolean(0)); //false
console.log(Boolean(+0)); //false
console.log(Boolean(-0)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false
console.log(Boolean(false));  //false

/*
    Все остальные значения в JavaScript (в других языках бывает не так) дают true.
    Вот значения, приводящиеся к true, но могущие вызывать у вас сомнения:
 */

console.log(Boolean(-1)); // true;
console.log(Boolean(Infinity)); // true
console.log(Boolean(-Infinity)); // true

/*
    Следующие значения являются строками, так как взяты в кавычки, и также приводятся к true:
 */

console.log(Boolean('0')); // true
console.log(Boolean('false')); // true
console.log(Boolean('NaN')); // true
console.log(Boolean('null')); // true
console.log(Boolean(undefined)); //true

let test = Boolean(3);
alert(test); //true

let test1 = Boolean(0);
alert(test1); //false

let test3 = Boolean(-1);
alert(test3); // true

let test4 = Boolean(-0);
alert(test4); // false

let test5 = Boolean(+0);
alert(test5); // false

let test6 = Boolean('abc');
alert(test6); // true

let test7 = Boolean('');
alert(test7); // false

let test8 = Boolean('0');
alert(test8); // true

let test9 = Boolean(true);
alert(test9); // true

let test10 = Boolean(false);
alert(test10); // false

let test11 = Boolean('true');
alert(test11); // true

let test12 = Boolean('false');
alert(test12);

let test13 = Boolean(null);
alert(test13); // false

let test14 = Boolean('null');
alert(test14); // true

let test15 = Boolean(undefined);
alert(test15); // false

let test16 = Boolean('undefined');
alert(test16); // true

let test17 = Boolean(NaN);
alert(test17); // false

let test18 = Boolean('NaN');
alert(test18); // true

let test19 = Boolean(3 * 'abc');
alert(test19); // false

let test20 = Boolean(Infinity);
alert(test20); // true

let test21 = Boolean(1 / 0 );
alert(test21); //true