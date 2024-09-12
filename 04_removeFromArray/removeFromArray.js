const removeFromArray = function () {
    const mainArr = arguments[0];
    let resultArr = mainArr;
    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < resultArr.length; j++) {
            if (resultArr[j] === arguments[i]) {
                resultArr.splice(j, 1); //Due to splice, a new array is created with revised index. Thus, needs to go one index back.
                j--;
            }
            //else {
            //    resultArr.push(j);
            //}
        }

    }
    return resultArr;
};

// Do not edit below this line
module.exports = removeFromArray;
