import { test } from "./test";
import "../styles/index.css";
import "../styles/test.css";


document.body.innerHTML = `
    <h1 class="js">es6 learning with web pack</h1>`




/**
 * js iterator
 */

const array = [1, 2];
function createIterator (collection) {
    let index = 0;
    return {
        next() {
            return {
                value: collection[index++],
                done: index > collection.length
            }
        }
    }

}

const iterator = createIterator(array);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

/**
 * es6 sembol iterator
 */

const array2 = [1, 2, 3, 4, 5];

//console.log(array2[Symbol.iterator]());
// console.log("string iterator"[Symbol.iterator]());

const iterator2 = array2[Symbol.iterator]();
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());

const str = "string iterator";
const iterator3 = str[Symbol.iterator]();
// console.log(iterator3.next());
// console.log(iterator3.next());
// console.log(iterator3.next());

/**
 * for of loop
 */




