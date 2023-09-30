"use strict"

let userName = null;
let userNick = undefined;
let userLastName = 'Никита';
console.log(userName ?? userNick ?? userLastName ?? 'Анон');  // Выведет первое определенное значение, которое не null или undefined


let height = 0;
console.log(height ?? 100); // 0 - height - определенное значение
console.log(height || 100); // 100 - height преобразуется в false

let width = null;
let heightTop = null;
console.log((width ?? 10) * (heightTop ?? 5)); // 50