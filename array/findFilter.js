

const array = [1,2,3,4,5];

const resultFind = array.find((item) => item === 3);
const resultFilter = array.filter((item) => item === 3);

console.log("js builten \n","find:",resultFind,"filter:", resultFilter); 

function myFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

function myFind(array, callback) {
     
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i]
        }
    }
    
}

const myFilterResult = myFilter(array, (item) => item !== 3);
console.log("my create \n","my filter:", myFilterResult);

const myFindResult = myFind(array, (item) => item !== 3);
console.log("my create \n","my find:", myFindResult);