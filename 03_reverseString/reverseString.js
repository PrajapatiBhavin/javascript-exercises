/*
const reverseString = function (str) {
    const arrStr = str.split('');
    let revArrStr = arrStr.reverse();
    revArrStr = revArrStr.toString();
    return revArrStr.replace(/,/g, ''); //Anything between /xyx/g will be replaced for string. This is global
};

*/ 
//This solution is more generic as it also handle punctuations. Note ".join()" method.
const reverseString = function (str) {
    const arrStr = str.split('');
    let revArrStr = arrStr.reverse();
    //revArrStr = revArrStr.toString();
    return revArrStr.join(''); //Anything between /xyx/g will be replaced for string. This is global
};
// Do not edit below this line
module.exports = reverseString;
