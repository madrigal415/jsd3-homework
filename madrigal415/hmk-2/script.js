// Myhubot Slack bot that does the following:


/* Variables for random example */

var prettyImages;
prettyImages = ["http://www.apogeephoto.com/wp-content/uploads/2016/june2012/Noella_photos/3-A-CAOAK005copy.jpg", "http://www.jamesmatthewsphotography.com/jmp/wp-content/uploads/2014/05/5813-landscape-photography-merced-river-yosemite-california-usa.jpg", "http://www.orangejuiceblog.com/wp-content/uploads/2013/04/hb-bonfire.jpg", "http://www.grahamowengallery.com/photography/Flowers/3-21-09-California-Wildflowers.jpg"];

// calling hubot
module.exports = function(robot) {
  
    // Salutation
    robot.respond(/hi|hello/i, function(msg) {
        return msg.send("Hiyo!");
    });

    // Good morning 
    robot.respond(/good morning sunshine, it's a (.*) day/i, function(res) {
        var dayType = res.match[1];
        var time = new Date();
            var hours = time.getHours();
          if (hours <12 ){
            res.reply("I'm afraid it is no longer morning. You can still have a " + dayType + " day, but you better get moving.");
          } else {
            res.reply("Good morning to you, it IS a " + dayType + " day!");}
    });


    // Random example --- a pretty picture
    robot.hear(/show me something pretty/i, function(msg) {
        return msg.send(msg.random(prettyImages));
    });    

   // Friday
   robot.respond(/is it friday/i, function(msg){
        var today = new Date();
        msg.reply(today.getDay() === 4 ? "Oh yea! Get ready for the weekend!" : "No. :(");
    });

    // Horoscope, horoscopes from: http://www.theonion.com/horoscope/your-horoscopes-week-august-30-2016-53753
   robot.hear(/How's my day looking\? I'm a (.*)/, function(msg) {
   var fav;
   //var horoscopes = []; 
   fav = msg.match[1];
   console.log(fav);
   switch (fav) {
     case "virgo":
       return msg.reply("Virgo is often known for its stubborn and headstrong nature. Yes, it is. Yes, it fucking is.");
       break;
     case "aries":
       return msg.reply("Sometimes in life, you just need to stop whatever it is you’re doing and take a step back. Actually, maybe it’s two steps back. Yeah, that’s good. Keep going. The stars will let you know when you’re far enough.");
       break;
     case "taurus":
       return msg.reply("Sure, they’re quite festive-looking, and they certainly help to spread holiday cheer, but maybe it’s time you got those antlers checked.");
       break;
     case "gemini":
       return msg.reply("Remember: Don’t let any man ever tell you what to do. Or who to do it to. Or what the hell they’re even talking about in the first place.");
       break;
     case "cancer":
       return msg.reply("The game of soccer, when played with skill and grace, is like poetry in motion. Which explains all the bored-stiff people just pretending to follow along.");
       break;
     case "leo":
       return msg.reply("You’ll popularize a new dance craze this week, thanks in large part to the large, feral raccoon clawing at your back.");
       break;
     case "libra":
       return msg.reply("You’re about to enter a strange upside-down universe, one where white is black, black is white, and people don’t need to remind you when to chew.");
       break;
     case "scorpio":
       return msg.reply("Doctors will refuse to operate on you this week, not due to any moral dilemmas, or matters of economics, or even health-related fears. They’re just vindictive bastards.");
       break;
     case "sagittarius":
       return msg.reply("You’ve never worked a day in your life, though that’s mainly because you keep getting the damn graveyard shift.");
       break;
     case "capricorn":
       return msg.reply("Remember: There’s no use in kicking and screaming and crying all day long. They’re going to change your diaper when they get to it.");
       break;
     case "aquarius":
       return msg.reply("Everyone would stop telling you to keep your hands to yourself, if they only knew what you did with them.");
       break;
     case "pisces":
       return msg.reply("They say the children are our future. However, what they fail to mention is that it’s a post-apocalyptic future, where the blood of small infants will be used to feed our giant man-machine overlords.");
       break;
     default:
       return msg.reply("Never heard of " + fav + "'s. Is that a new sign?");
   }
 });

   // Lotto Picker
   robot.hear(/What lotto numbers should I play|Gimme the winning lotto numbers/i, function(msg) {
      
        var lottoPicks = [Math.floor(Math.random()*47) +1];

        while(lottoPicks.length <5){
        lottoNum = Math.floor(Math.random()*47) +1;
        if(lottoPicks.indexOf(lottoNum) === -1) {
              lottoPicks.push(lottoNum);
        } else if((lottoPicks.indexOf(lottoNum)) > -1) {
        }  
        };
     
        // sort lotto picks numerically
        lottoPicks.sort(function(a,b) {return a - b; });

        //pick mega number
        var mega = [Math.floor(Math.random()*27) +1];
    
        // turn into nice string with commas
        var prettyNums = lottoPicks.join(", ");

        // print out lucky numbers
        return msg.reply("I predict your winning numbers will be: " + prettyNums + " and the Mega will be: " + mega + ". ");
  });  

};