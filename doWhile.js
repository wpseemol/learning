/**
 * The do while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once. 
 */

// While loop refrance:-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while

let result = "";
let i = 5;

do {
    i = i + 1;
    result = result + i;
    console.log(result);
} while (i < 5);    

