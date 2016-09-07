function myFunction() {
    for (var i = 99; i>0; i--) {
        var node = document.createElement("LI");
        lyrics = " ";

        if (i >2) {
            var lyricsLong = lyrics.concat(i, " bottles of beer on the wall, ",i, " bottles of beer." ," Take one down and pass it around, ",(i -1), " bottles of beer on the wall.");
        }
        else if (i === 2) {
            var lyricsLong = lyrics.concat(i," bottles of beer on the wall, ",i, " bottles of beer."," Take one down and pass it around, ", (i -1), " bottle of beer on the wall.");
        }
        else if (i === 1) {
        var lyricsLong = lyrics.concat(i," bottle of beer on the wall, ",i, " bottle of beer."," Take one down and pass it around, no more bottles of beer on the wall.", "No more bottles of beer on the wall, no more bottles of beer."," Go to the store and buy some more, 99 bottles of beer on the wall.")} 
        
        var textnode = document.createTextNode(lyricsLong);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node); 
    }
}