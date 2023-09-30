/*    "use strict"

    let i = 0;
    while (i < 3) {
        console.log(i); //  Выводить 0, 1, 2
        i++;
    }

    let i1 = 3;
    while (i1) {
        console.log(i1); // 3, 2, 1
        i1--;
    }

    let i2 = 3;
    while (i2) alert(`i2: ${i2--}`);

    let i3 = 0;
    do {
        alert(i3);
        i3++;
    } while (i3 < 3);

    for (let i = 0; i < 3; i++) {
        console.log(i);
    }

    let i4 = 0;

    for(;i4 < 3;i4++) {
        console.log(i4); // 0,1,2
    }

    console.log(i4); // 3

    let sum = 0;
    while(true) {
        let value = +prompt("Введите число", "");
        if (!value) break;

        sum += value;
    }

    console.log('Сумма: ' + sum);


    for (let i= 0; i < 10; i++) {
        // Если true пропустить оставшуюся часть
        if (i % 2 === 0) continue;

        alert(i); // 1,3,5,7,9
    }


    for (let i = 0; i < 10; i++) {
        if (i % 2) {
            alert (i); // 1,3,5,7,9
        }
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let input = prompt(`Значение на координатах (${i},${j})`, '');
        }
    }

    alert ('Готово');

    outer: for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let input = prompt(`Задайте координаты ${i}, ${j}`, '');
            if(!input) break outer;
        }
    }

    console.log ('Готово');




let i = 3;

while(i) {
    alert(--i); //2, 1, 0 Префиксная форма
}

let i1 = 3;

while(i1) {
    alert(i1--); //3, 2, 1 Постфиксная форма
}

let i2 = 0;
while (++i2 < 5) alert (i2); // 1, 2, 3, 4

let i3 = 0;
while (i3++ < 5) alert (i3); // 1, 2, 3, 4, 5

for (let i = 1; i <= 10; i++) {
    if (i % 2) continue;
    console.log(i);
}

let i5 = 0;
while (i5 < 3) {
    alert(`number ${i5}`);
    i5++;
}

let number = +prompt('Введите число', '');
while (number <= 100 && number) {
    +prompt('Введите число', '');
    break;
}
console.log (number);



let num;
do {
    +prompt('Введите число', '');
    console.log(num)
} while (num <= 100 && num)

let n = +prompt('Введите число', '');
outer: for (; n > 1; n--) {
    for (let j = 2; j < n; j++) {
        if (n % j === 0) continue outer;
    }
    console.log(n)
}
 */




let n = +prompt('Введите число', '');
for (; n > 1; n--) {
    for (let j = 2; j < n; j++) {
        if (n % j === 0) continue;
    }
    console.log(n);
    continue;
}
