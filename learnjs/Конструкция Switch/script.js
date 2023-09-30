"use strict"

let browser = prompt("Enter your browser", '');
if (browser === 'Edge') {
    alert ("Edge");
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    alert ('Cool browsers');
} else {
    alert ('Unknown browser');
}

const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
    case 0:
        alert('You entered number 0');
        break;
    case 1:
        alert('You entered number 1');
        break;
    case 2:
    case 3:
        alert('You entered number 2 or 3');
        break;
}
