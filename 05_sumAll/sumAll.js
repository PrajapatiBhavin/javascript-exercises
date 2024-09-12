const sumAll = function (num1, num2) {
    let resultSum = 0;
    if (Number.isInteger(num1) && Number.isInteger(num2) && num1 > 0 && num2 > 0){
        if (num1 < num2) {
            for (let i = num1; i <= num2; i++) {
                resultSum = resultSum + i;
            }
        }
        else {
            for (let i = num2; i <= num1; i++) {
                resultSum = resultSum + i;
            }
        }
    }
    else {
        return "ERROR";
    }


    return resultSum;
};

// Do not edit below this line
module.exports = sumAll;
