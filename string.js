/**
 * The string object is used to represent and manipulate a sequence of characters.
 * 
 */

// string reference:- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const str = "some thing"; // string literal
const str2 = String("some thing"); // string constructor
const strObj = new String("some thing"); // string object
// string type conversion.

// 1. Number to string
const num = 123;
const strTostring = num.toString(); // '123'

// 2. Boolean to string 
const bool = true;  
const str4 = bool.toString(); // 'true'

// 3. Date to string
const date = new Date();
const str5 = date.toString(); // 'Sun Dec 20 2020 18:00:00 GMT+0600 (Bangladesh Standard Time)'

// string Escape notation.

// string comparison.

let a = "abc";
let b = 'bcd';

const strCompar = a === b;
//console.log(strCompar); // false

const aa = "some text here";
const bb = "bb text";

const stringConcat = aa.concat(bb); // 'some text herebb text'

const subString = aa.substring(4); // ' text here'

const subStr = aa.subStr(4); // ' text here'

const charAt = aa.charAt(4); // 'e'

const startWith = aa.startsWith("s"); // true
const endWith = aa.endsWith("e")  ; // true
const uppercased = aa.toUpperCase(); // 'SOME TEXT HERE'
const lowercased = aa.toLowerCase(); // 'some text here'   
const strTrim = "  some text here  ".trim(); // 'some text here'
const strTrimStart = "  some text here  ".trimStart(); // 'some text here  '

const strLenght = aa.length; // 15



