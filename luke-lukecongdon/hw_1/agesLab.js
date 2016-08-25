/*
AGE LAB EXERCISE

< 16 years old
> 16 years old, can drive
> 18 can vote
> 21 can drink
> 25 can rent a car
> 36 can run for president
> 62 can retire

Use LOGICAL OPERATORS to distinguish what you can do based on your age.

*/


var age = 63;
if (age < 16){
    console.log("Too young, go to school");
}
else if ((age > 16) && (age <18)){
    console.log("At least you can drive");
}
else if ((age > 18) && (age < 21)){
    console.log("You can vote, but not drink");
}
else if ((age > 21) && (age < 25)){
    console.log("You can drink now!");
}
else if ((age > 25) && (age < 35)){
    console.log("You can vote, drink, and rent cars");
}
else if ((age > 35) && (age < 62)){
    console.log("You can run for president");
}
else if (age > 62){
    console.log("Time to retire");
}