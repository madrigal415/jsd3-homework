/*
Convert your app.js code from the 01-make-a-person folder
to a JavaScript module
*/

var makePerson = (function(name, age) { 
  var kids = [];

  // add kid module
  var addKid = function(newKid) {
      kids.push(newKid);
  };

	// celebrate bday module
  var birthday = function() {
    age++;
    console.log("Happy Birthday! You're " + age);
  };

  // creating a closure around age...
  var getLatestAge = function() {
      return age;
  };
		
  return {
    getListOfKids: kids,
    addKid: addKid, 
    getName: name,
    getAge: getLatestAge, 
    celebrateBirthday: birthday
  };

})('Charlie', 54);



console.log(makePerson.getName);
    // => Charlie

makePerson.celebrateBirthday();
    // => Happy Birthday


/*

var car = (function(kind) { 
  var wheelCount = 4;
  var gasTankFull = false; 

  // fill tank closure
  var fillUp = function() {
    gasTankFull= true;
  };

	// a closure
  var start = function() {

    if (gasTankFull){
        console.log('started with ' + wheelCount + ' wheels - vroom, vroom baby!');
    } else{
        console.log('no gas! :(');
    }
  };

  return {
    make: kind,
    wheels: wheelCount,
    startEngine: start,
    gas: gasTankFull, 
    fillup: fillUp
  };
})('Tesla');

console.log(car.make);
// => Tesla

car.startEngine();
// => started with 4 wheels.

*/