/*
Assignment 2: Random Address Generator

Write a script that can generate random addresses
As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
Your script should randomly select one item from each of these arrays and then use them to construct a random address
Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
node random-address.js
=> 34578 Dolphin Street, Wonka NY, 44506

*/

// Selecting the number for the address
var number = Math.round(Math.random()* 10000);

// Selecting the street name
var street = [ 'Main', 'Central', 'Ticky Tacky', 'Persepolis', 'Polter', 'Chickeesawee', 'Tourick', 'Harrison', 'Tiburo', 'Tank', 'Saudade'];

// Selecting the road type
var road_type = [ 'Road', 'Street', 'Avenue', 'Throuroughfare', 'Court', 'Lane', 'Trail'];

// Selecting the city
var city = [ 'St. Charles', 'Buzios', 'Central City', 'Thurmond', 'Clarence', 'Bishop', 'Gates', 'Meridian', 'Whispers', 'Tick Tock', 'Gatlin'];


// Selecting the state
var state = [ 'NY', 'CA', 'FL', 'TX', 'MO', 'ID', 'IL', 'MA', 'WI', 'TE', 'GA'];

// Creating the zip code number
var zip = Math.round(Math.random()* 100000);
    
    zip = String(zip);
    
    if (zip.length === 1) {
        zip = '0000' + zip;
    } else if (zip.length === 2) {
        zip = '000' + zip;
    } else if (zip.length === 3) {
        zip = '00' + zip;
    } else if (zip.length === 4) {
        zip = '0' + zip;
    };

// Print out the address
console.log(number + " " + street[Math.floor((Math.random()*11))] + " " + road_type[Math.floor((Math.random()*7))] + ", " + city[Math.floor((Math.random()*11))] + " " + state[Math.floor((Math.random()*11))] + ", " + zip);