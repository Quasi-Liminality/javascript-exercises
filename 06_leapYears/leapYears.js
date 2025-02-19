const leapYears = function(year) {
    // Function name makes it clear what the code is about...
    if (year % 4 == 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
