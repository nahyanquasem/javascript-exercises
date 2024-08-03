function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const convertToCelsius = function(tempF=0.0) {

  return round((tempF-32) * (5/9), 1);

};

const convertToFahrenheit = function(tempC=0.0) {

  return round((tempC * (9/5) + 32),1);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
