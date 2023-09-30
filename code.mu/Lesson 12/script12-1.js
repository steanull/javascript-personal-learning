"use strict"
/*
    Работа с консолью в JavaScript.
    Для удобства программистов в каждом браузере есть специальная панель разработчика.
    Чтобы открыть эту панель, вам нужно, находясь на странице сайта, кликнуть правой кнопкой мыши в любое место.
    В появившемся меню нужно выбрать самый нижний пункт (он будет называться Inspect или как-то похоже на это).
    В открывшейся панели вы в основном будете пользоваться двумя вкладками: Elements и Console.
    В первой вкладке вы можете получать информацию по тегам страницы, а во второй - отладочную информацию JS.
    Давайте разберемся с возможностями консоли.
    С помощью специальной команды console.log вы в своих скриптах можете выводить данные в консоль.
    Это применяется для того, чтобы заниматься отладкой программ.
    Давайте для примера что-нибудь выведем в консоль:
 */


    console.log(123);
    let num = 123;
    console.log(num);

    let num1 = 123;
    let num2 = 456;

    console.log(num1);
    console.log(num2);

    /*
        Можно вывести несколько переменных с помощью одной команды, написав эти переменные через запятую:
     */

    let num3 = 123;
    let num4 = 456;
    console.log(num3, num4);

    let num5 = 213;
    console.log(num5);

    let num6 = 123,
        num7 = 234,
        num8 = 345;
    
    console.log(num6, num7, num8);

    // Тип данных в консоли JS

    /*
        В консоли разным цветом выводятся строки и числа. Это часто помогает найти ошибки в программе.
        Давайте выведем рядом число и строку, чтобы можно было увидеть разницу в цвете:
     */

    console.log(123); //число
    console.log('123'); // Строка
    console.log(11234567890n); // BigInt
    console.log(true); // Boolean
    console.log(null); // Null
    console.log(undefined); // Undefined
    console.log(NaN); // Число
    console.log({user: "John"}); // Объект и символ


    /*
        Ошибки в консоли JS.
        Когда вы в вашем коде допускаете синтаксическую ошибку, JS выведет информацию об этом в консоль.
        Такая ошибка будет выведена красным цветом, а справа от нее будет указан номер строки, на которой случилась ошибка.
        Этот номер является ссылкой - на него можно нажать и в консоли откроется ваш код на строке с ошибкой.
        Давайте на практике попробуем ошибиться.
        Обратимся к несуществующей переменной.
        В этом случае JS выдаст ошибку:
     */

     // alert(eee); // Uncaught ReferenceError: eee is not defined

    eee;
    console.log (eee);


