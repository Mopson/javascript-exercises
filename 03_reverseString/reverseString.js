const reverseString = function(reverseThis) {
    let returnString = '';
    if (reverseThis.length == 0) return returnString;
    for (let i = reverseThis.length - 1; i >= 0; i--) {
        returnString += reverseThis[i];
    }
    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
