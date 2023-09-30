"use strict"
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}

function checkNewAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkNewAge1(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

function checkMinValue(a, b) {
    return (a < b) ? a : b;
}

console.log(checkMinValue(2,5));
console.log(checkMinValue(3,-1));
console.log(checkMinValue(1,1));

function getPow(x,n) {
    if (x % 1 === 0 && n % 1 === 0 && n >= 1) {
        return alert(x ** n);
    }
    return alert(`Вводите только натуральные числа ${n}, и целые ${x}`);
}

let x = +prompt('Введите x: ', '');
let n = +prompt('Введите n: ', '');
getPow(x,n);
