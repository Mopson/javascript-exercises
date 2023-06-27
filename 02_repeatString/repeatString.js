const repeatString = function (repeatedWord, times) {
    if (times < 0) return "ERROR";
    let returnString = '';
    for (let i = 0; i < times; i++) {
        returnString += repeatedWord;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
