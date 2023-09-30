'use strict'
describe('Практика на формулы в JavaScript', function () {
    describe('Нахождение площади круга', function () {
        function makeTestRoundSquare(r) {
            let s = 3.14 * (r * r).toFixed(2);
            it(`Площадь круга с радиусом ${r} равна: ${s}`, function () {
                assert.equal(getRoundSquare(r), s);
            });
        }

        for (let i = 0; i < 10; i++) {
            makeTestRoundSquare(i);
        }
    });

    describe('Нахождение площади квадрата', function () {
        function makeTestSquareArea(a) {
            let s = a ** 2;
            it (`Площадь квадрата со стороной ${a} равна ${s}`, function() {
                assert.equal(getSquareArea(a), s);
            });
        }

        for (let i = 0; i <= 10; i++) {
            makeTestSquareArea(i);
        }
    });

    describe('Нахождение площади прямоугольника', function () {
        function makeTestRectangleArea(a, b) {
            let s = a * b;
            it(`Площадь прямоугольника со сторонами ${a} и ${b} равна ${s}`, function () {
               assert.equal(getRectangleArea(a, b), s);
            });
        }

        for (let i = 1; i <= 5; i++) {
            for (let j = 1; j <= i; j++) {
                makeTestRectangleArea(i, j);
            }
        }
    });
});