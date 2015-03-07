/*
Michael Medina
3/7/15
Section 00
Day 3 Arrays
 */
//alert("TESTING TO MAKE SURE IT IS LINKED");

//Create a basic array.
var avengersNames=["Thor", "Hulk", "Iron Man", "Captain America"];

//Print out whole array.
console.log(avengersNames);

//Print out one specific item in the array.
console.log(avengersNames[2]);

//Swap items in our array.
avengersNames[1]= "Black Widow";

console.log(avengersNames);

//Use a variable for the index number.
var num = 3;
console.log(avengersNames[num]);

//Find the length of an array.
//Length property = How many items are in the array.
//dot syntax - "fancy" for use a period
console.log(avengersNames.length);

//Add an item to our array.
avengersNames[4] = "Hawkeye";

avengersNames [avengersNames.length]= "Wolverine";

console.log(avengersNames);


//Picking Oranges
var orangesPicked = [13, 350, 1000, 600];

//How many oranges did we pick in total?
var totalOranges = orangesPicked[0] + orangesPicked[1]+ orangesPicked[2]+orangesPicked[3];
console.log("The total number or oranges picked is "+totalOranges+ ".");

var averageOranges = totalOranges/3;
console.log("The average number of oranges picked per day is "+averageOranges+".");

//Create an array of fruit
var fruitBowl = ["apple", "mango", "grape", "bananna"];
console.log(fruitBowl);

//push - adds item in to the next open spot
//dot syntax - use a period
fruitBowl.push("strawberry");
console.log(fruitBowl);

fruitBowl.push("pineapple");
console.log(fruitBowl);

//pop() - removes last item from array
//dot syntax.
var caughtItem = fruitBowl.pop();

console.log(fruitBowl);
console.log(caughtItem);



