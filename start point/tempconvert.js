console.log("Hello World");

function celciusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32; // Formula to convert Celsius to Fahrenheit
}

var celciusTemperature = parseFloat(prompt("Temperature in Celsius:")); // Use prompt to get temperature input
var FahrenheitTemperature = celciusToFahrenheit(celciusTemperature);

console.log(
  "Conversion of temperature from Celcius to Fahrenheit:",
  FahrenheitTemperature
);
