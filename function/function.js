/**
 * function is a block of code that can be called by name. The code inside a function can be executed when the function is invoked.
 */

// Function Declaration :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

function functionCreate () {
    console.log('Function Declaration');
}

// functionCreate(); // functon invocation.

//console.log(functionCreate()) // functionCreate() return undefined.

var a = 10
function test (a) {
    console.log(a);
}

// test('Hello World');


function test1 (a) {
    console.log(typeof arguments) }

// test1('Hello World');


function test2 () {
    let message = 'refarance to inside function'
    function insideFunction () {
        console.log(message);
    }

    return insideFunction;


}

// const insideFunction = test2();

// insideFunction();


for (var i = 1; i < 6; i++) {


    (function (i){
        setTimeout(() => {
            console.log(i);
        }, 1000);
    })(i)
    
       
    };




