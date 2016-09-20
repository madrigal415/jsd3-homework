/*
- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for San Francisco (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.
*/

'use strict';

// ask user what city they live in?
var city = prompt("Tell me your city");

// prompt: what state do you live in?
var state= prompt("Tell me your state");


var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + state +"&APPID=1d8a7e1aefde45b0014cce913957e110&units=imperial";

var apiKey = "";

$.ajax({
    url: weatherUrl,
    data: {
        format: "json"
    },
    success: function (response) {
        console.log(response);
        console.log(response.main.temp);
        
    }
})