/**
 * first class function
 * 
 * 
 *  1. A function can be stored in a variable
 * 2. A function can be stored in an array
 * 3. A function can be stored in an object
 * 4. We can create function as needed
 * 5. We can pass function as an argument
 * 6. We can return function from another function
 * 7. We can store function in a variable
 * 
 */


function addNumber (a, b) {
    return a + b;
}

const sum = addNumber;

const obj = {
    addNumber
}

const arr = [addNumber];

console.log("variable:",sum(10, 20));
console.log("obj:",obj.addNumber(10, 20), obj);
console.log("array:",arr[0](10, 20), arr);