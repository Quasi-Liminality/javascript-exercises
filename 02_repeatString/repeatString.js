const repeatString = function(str, times) {
    if (times < 0) return 'ERROR';
    
    finalString = '';
    for (let i = 0; i < times; i++) {
        finalString += str;
    }
    
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
