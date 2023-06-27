const removeFromArray = function (array) {
    let i = 1;

    while (arguments[i] != null) {
        const index = array.indexOf(arguments[i]); //indexOf() uses strict equality (===)
        if (index > -1) array.splice(index, 1);
        i++;
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
