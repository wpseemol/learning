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
