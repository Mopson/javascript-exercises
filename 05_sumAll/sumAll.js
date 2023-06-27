const sumAll = function (min, max) {
    
    //Gauss summation

    //swap values if second argument is smaller than the first, i.e. min becomes max and max becomes min
    let temp = 0;
    if(max < min){
        temp = max;
        max = min;
        min = temp;
    }

    if (Number.isInteger(min) && Number.isInteger(max)) {
        if (min > 0 && max > 0){
            return ((max - min) + 1) * (min + max) / 2;
        }
        else return "ERROR";
    }
    else return "ERROR";

};

// Do not edit below this line
module.exports = sumAll;
