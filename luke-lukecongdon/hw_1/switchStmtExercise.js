// SWITCH STATEMENT EXERCISES

// A, B, C, D, E, F grades with messages

var grade = "C";

if (grade === "A"){
    console.log("Awesome job");
} else if (age === "B"){
    console.log("Good job");
} else if (age === "C");{
    console.log("OK job");
} else if (age === "D");{
    console.log("Not so good");
} else if (age === "E");{
    console.log("You suck");
} else if.........

(unfinished)

// SAME AS ABOVE USING SWITCH

var grade = "D";

switch (grade) {
    case "A":
        console.log("Awesome job");
        break;
    case "B":
        console.log("Good job");
        break;
    case "C":
        console.log("OK job");
        break;
    case "D":
        console.log("Poor job");
        break;
    case "E":
        console.log("Bad job");
        break;
    case "F":
        console.log("You failed");
        break;
    default:
        console.log("What the hell bad input")
}