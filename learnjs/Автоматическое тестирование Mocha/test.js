'use strict'

/*
    describe - задает описание функции
    it - задает описание результата
    assert - проверяет соответсвие результату

*/

describe('pow', function () {


    it('Для отрицательных n возвращает NaN', function () {
        assert.isNaN(pow(2, -1));
    });

    it('Для дробных n возвращает NaN', function () {
        assert.isNaN(pow(2, 1.5));
    })

    describe('Возводит x в степень 2', function() {
       function makeTest(x) {
           let expected = x * x;
           it(`${x} в степени 2 будет ${expected}`, function () {
               assert.equal(pow(x, 2), expected);
           });
       }

       for (let x = 1; x <= 5; x++) {
           makeTest(x);
       }
    });

    describe('Возводит x в степень 3', function () {
        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} в степени 3 будет ${expected}`, function () {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }

    });

});