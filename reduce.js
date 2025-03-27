const numberArray = [1, 2, 3, 4, 5];

const resultReduce = numberArray.reduce((acc, item) => acc + item, 0);

console.log("js builten \n", "reduce:", resultReduce);

function myReduce(array, callback, initialValue) {

    for(let i = 0; i < array.length; i++) {
        initialValue = callback(initialValue, array[i]);
    }

    return initialValue;
}

const myReduceResult = myReduce(numberArray, (acc, item) => acc + item, 0);

console.log("my create \n", "my reduce:", myReduceResult);

