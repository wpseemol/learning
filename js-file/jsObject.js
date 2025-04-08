/**
 * JavaScript Objects are containers for named values called properties or methods. it is a collection of key-value pairs.
 */

const person = {name: 'John', age: 30, city: 'New York'}; // object literal
console.log(person);

const person1 = new Object(); // object constructor

person1.name = 'John';
person1.age = 30;
person1.city = 'New York';
console.log(person1);

personName = person.name; // accessing object properties dot notation
console.log(personName);

personAge = person['age']; // accessing object properties array notation

console.log(personAge);

// Object comparison is always done by reference

const obj1 = {name: 'John'};
const obj2 = {name: 'John'};
if ( obj1 === obj2) {
    console.log('Objects are equal');
} else {    
    console.log('Objects are not equal');
}

const obj3 = obj1; // obj3 is reference to obj1

const obj4 = Object.assign({age: 36}, obj1); // obj4 is a copy of obj1

console.log(obj4);

