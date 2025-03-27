/**
 * Recursive function is a function that calls itself.
 */

function testRecursive(n) {
    console.log("recursive value:", n);
    if (n === 0) {
    return 0;
  }
  return n + testRecursive(n - 1);
}

testRecursive(5); // 15