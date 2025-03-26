/**
 * Array is data structure where we can organize multiple data under a single variable.
 */

const arra = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // array literal
const arra2 = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // array constructor

const str = 'Hello World';
const strArr = Array(str); // ['Hello World']
const strCArr = Array(...str); // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
const arrFirstElement = arra[0]; // 1
const arrLastElement = arra[arra.length - 1]; // 10
const arrLength = arra.length; // 10

// array travers

for (let i = 0; i < arra.length; i++) {
    console.log(arra[i]);
}
