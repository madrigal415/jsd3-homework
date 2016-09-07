document.getElementById("create").onclick = madLib;
document.getElementById("save").onclick = saveFaves;
document.getElementById("print").onclick = printFaves;

var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Myspace', 'Ashley Madison', 'Linked-In'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest', 'Instagram', 'Youtube'];

var phrase;


function madLib() {

    var random1 = Math.floor(Math.random() * startupX.length);
    var random2 = Math.floor(Math.random() * startupY.length);

    phrase=  "A startup that is " + startupX[random1] + ", but for " + startupY[random2] + ". ";

    document.getElementById("xForY").innerHTML = phrase; 
      
}

// saving favorites
var favorites= [];

function saveFaves() {
favorites.push(phrase); 
console.log(favorites);
}

// print favorites

function printFaves() {

    var i = 0;
    var faveList = "";
    while (favorites[i]) {
        faveList += (i+1) + ". " + favorites[i] + "<br>";
        i++;
    }
    document.getElementById("favorites").innerHTML = faveList;
   
}


