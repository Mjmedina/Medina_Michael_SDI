/* Michael Medina
3/5/15
Section 00
Day 2 Lab Expressions
 */

// Calculate how much pizza everyone will eat.

var slicesPizza = 8;
var partyPeople = 8;
var pizzaOrdered = 1;

var peopleSlices = slicesPizza / partyPeople;
var phrase = "Each person ate";
var phrase2 = "slice at the party.";

console.log(phrase, peopleSlices, phrase2);


// Calculate how much pizza Sparky will eat.

var slicesPizza = 8;
var partyPeople = 8;
var pizzaOrdered = 1;

var sparkyPizza = slicesPizza - partyPeople;
var phrase3 = "Sparky ate";
var phrase4 = "slices of pizza at the party";

console.log(phrase3, sparkyPizza, phrase4);


// Total and average amount of groceries over a 5 week period.

var week1 = 80
var week2 = 90
var week3 = 100
var week4 = 90
var week5 = 80

var totalGroceries = week1 + week2 + week3 + week4 + week5
var totalWeeks = 5
var average = (week1 + week2 + week3 + week4 + week5) /totalWeeks;
var phrase5 = "You have spent a total of $"
var phrase6= "on groceries over 5 weeks. That is an average of $"
var phrase7= "per week."
console.log(phrase5, totalGroceries,phrase6, average, phrase7 );

