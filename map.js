
const array = [1, 2, 3, 4, 5];

const newArray = array.map((element, index, array) => element * 2);

//console.log("newArray builtin map use:", newArray);

function myMap(array,cb) {
    let newArray = [];
    for(let i =0; i < array.length; i++) {
        const result = cb(array[i], i, array);
        newArray.push(result);
    }
    return newArray;
}

const myNewArray = myMap(array, (element, index, array) => {
    console.log("element:", element);
    console.log("index:", index);
    console.log("array:", array);
    return element * 2;
});

console.log("myNewArray custom map use:", myNewArray);
