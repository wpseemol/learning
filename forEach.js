const array = [1, 2, 3, 4, 5];

/*
array.forEach(function (element) {
    console.log(element);
});
*/




function myForEach(array, callback) {
    for (let i = 0; i < array.lenght; i++){
        callback(array[i],i, array);
    }
}

myForEach(array, function (element, index, array) {
    console.log(element, index, array);
})