
 /*
Michael Medina
3/7/2015
Section 00
Expressions Assignment
 */

//alert("Just testing!");

 //Questions for average score during wakeboard competition.
 var questionArray =[];

 //For loop to save user input in the array.
 for(var i=1; i<5;i++)
 {questionArray[i] = prompt("What were your results from the " + i + " run?")}

 //Form the array.
 totalPoints = parseInt(questionArray[1])+ parseInt(questionArray[2])+ parseInt(questionArray[3])+ parseInt(questionArray[4]);

 //Display point totals.
 console.log("Your total points for this competition is "+totalPoints);

//Average
var averagePoints = parseFloat(totalPoints)/4;
console.log("Your average points per run is "+averagePoints);
console.log(questionArray);

 /* The first set of results I used were 8,7,8,9 for the each of the respective four runs.
 My calculator gave me a total points of 32 and an average of 8 points per run.


  On my second attempt the results I used were 3.4, 9.2, 8.4, and 4.5
My calculator gave me a total points of 24 and an average of 6 points per run.
  */