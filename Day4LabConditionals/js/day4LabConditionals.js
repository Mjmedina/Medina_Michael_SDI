
 /*
Michael Medina
Date
Section 00
Assignment
 */

//alert("Just testing!");

 //Average fuel econonomy

 var mpg = 30
 var gasLeft = prompt("Out of a total 100, how much gas would you estimate is left in the tank?");
 var gasMax = 100

 // Create "if" statement for when to fill up.

 if(gasLeft >=35){
     console.log("Yes, you can make it without stopping for gas!");
 } else {
     console.log("You only have "+gasLeft+" gallons of gas left in your tank, better get gas while you can! ");
 }