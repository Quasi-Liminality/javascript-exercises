const sumAll = function(n1, n2) {
    for (item of [n1, n2]) {
        if (!Number.isInteger(item) || item < 0) return 'ERROR';
    }

    let numbers = n1 < n2 
                ? [n1, n2] 
                : [n2, n1];

    let sum = 0;
    for (let i = numbers[0]; i <= numbers[1]; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
