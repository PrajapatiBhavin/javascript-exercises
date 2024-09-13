let resultInCelsius = 0.0;
let resultInFahrenheit = 0.0
const convertToCelsius = function(tempInFahrenheit) {
  resultInCelsius = ((5 * tempInFahrenheit) - 160) / 9;
  if (Number.isInteger(resultInCelsius)){
    return resultInCelsius;
  }
  else{
    return parseFloat(resultInCelsius.toFixed(1));
  }
};

const convertToFahrenheit = function(tempInCelsius) {
  resultInFahrenheit = ((9 * tempInCelsius) + 160) / 5;
  if (Number.isInteger(resultInFahrenheit)){
    return resultInFahrenheit;
  }
  else{
    return parseFloat(resultInFahrenheit.toFixed(1));
  }
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
