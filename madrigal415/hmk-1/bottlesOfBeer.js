/*
Homework Assignment Instructions

Assignment 1: 99 Bottles of Beer

Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can find the lyrics here: http://www.99-bottles-of-beer.net/lyrics.html
Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").

    FIRST TWO LINES
    99 bottles of beer on the wall, 99 bottles of beer.
    Take one down and pass it around, 98 bottles of beer on the wall.

    98 bottles of beer on the wall, 98 bottles of beer.
    Take one down and pass it around, 97 bottles of beer on the wall.

    LAST LINES
    2 bottles of beer on the wall, 2 bottles of beer.
    Take one down and pass it around, 1 bottle of beer on the wall.

    1 bottle of beer on the wall, 1 bottle of beer.
    Take one down and pass it around, no more bottles of beer on the wall.

    No more bottles of beer on the wall, no more bottles of beer. 
    Go to the store and buy some more, 99 bottles of beer on the wall.

*/

// Printing out the lyrics to 99 bottles of beer
for (var i = 99; i>0; i--) {
    if (i >1) {
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
        console.log("Take one down and pass it around, " + (i -1) + " bottles of beer on the wall.");
        console.log(" ");
        
    } else if (i === 2) {
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
        console.log("Take one down and pass it around, " + (i -1) + " bottle of beer on the wall.");
        console.log(" ");
    } else if (i === 1) {
        console.log(i + " bottle of beer on the wall, " + i + " bottle of beer.");
        console.log("Take one down and pass it around, no more bottles of beer on the wall.");
        console.log(" ");
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");   
    }

};