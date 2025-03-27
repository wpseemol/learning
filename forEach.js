const arr = [1, 2, 3, 4, 5];

/*
array.forEach(function (element) {
    console.log(element);
});
*/




function myForEach(array =[], callback) {
    
    for (let i = 0; i < array.length; i++){
      console.log("array[i]:", array[i]);
        callback(array[i],i, array);
    }
}

myForEach(arr, function (element, index, array) {
    console.log("element:", element);
    console.log("index:", index);
    console.log("array:", array);
});


// console.log("array:", array);