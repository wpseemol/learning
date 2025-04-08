/**
 * higher order function is a function that takes another function as an argument or returns a function as a result.
 */

function multeplay (a, b, fanc) {
    const c = a + b;
    const d = a - b;

    return function () {
        const result = fanc(c, d);
        return c * d * result;
    }
}

const result = multeplay(10, 5, function (a, b) {return a+b} );

console.log(result());