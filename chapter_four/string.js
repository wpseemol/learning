/**
 * The string object is used to represent and manipulate a sequence of characters.
 * 
 */

// string reference:- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const str = "some thing"; // string literal
const str2 = String("some thing"); // string constructor

// string type conversion.

// 1. Number to string
const num = 123;
const str3 = num.toString(); // '123'

// 2. Boolean to string 
const bool = true;  
const str4 = bool.toString(); // 'true'

// 3. Date to string
const date = new Date();
const str5 = date.toString(); // 'Sun Dec 20 2020 18:00:00 GMT+0600 (Bangladesh Standard Time)'
