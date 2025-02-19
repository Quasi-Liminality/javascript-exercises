const removeFromArray = function(array, ...items) {
    let newArr = array.filter(el => !items.includes(el));
    return newArr;
};


// Do not edit below this line
module.exports = removeFromArray;
