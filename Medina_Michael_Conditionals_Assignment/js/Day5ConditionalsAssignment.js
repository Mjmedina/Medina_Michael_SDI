
 /*
Michael Medina
3/12/2015
Section 00
Day 5 Conditionals Assignment
 */

//alert("Just testing!");


 // I may be addicted to Spelunky. We will find out. For the sake of this I will say "addiction" is more than 8 hours a day.

 var spelunkyPlayed = prompt("We are going to figure out if you are addicted to Spelunky.\nHow many hours did you play Spelunky today?");

// var days = ["Monday","Tuesday","Wednesday","Thursday","Friday"];

 if (spelunkyPlayed === "" || isNaN(spelunkyPlayed))
 //Validating that user actually typed something in the box. Because users are often dumb.
 while(spelunkyPlayed === "" || isNaN(spelunkyPlayed))
 {
     spelunkyPlayed = prompt("You can't run from your problems. Answer the question.\nNow then, how many hours did you play Spelunky?");
 }
 //Responses to user input

 if (spelunkyPlayed > 6){
     console.log("You have problems. Get off the Spelunky. Go outside. Talk to people. Just get off Spelunky.");
 } else if(spelunkyPlayed > 4){
     console.log("You're getting close to playing too much Spelunky. But it's fine we understand, it is Spelunky after all.");
 } else if(spelunkyPlayed >2){
     console.log("You're fine keep playing Spelunky it's awesome!");
 } else{
     console.log("You should probably start playing some Spelunky before you get rusty ;)");
 }


//Get the average for each day.
var questionArray =[];

 //For loop to save user input in the array.
 for(var i=1; i<6;i++)
 {questionArray[i] = prompt("How many hours did you play on day " + i)}

 //Form the array.
 totalHours = parseInt(questionArray[1])+ parseInt(questionArray[2])+ parseInt(questionArray[3])+ parseInt(questionArray[4])+ parseInt(questionArray[5]);

 //Display point totals.
 console.log("Your total hours playing Spelunky "+totalHours);

 //Average
 var averagePoints = parseFloat(totalHours)/5;
 console.log("Your played "+averagePoints+" hours this week");
 console.log(questionArray);