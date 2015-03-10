
 /*
Michael Medina
Date
Section 00
Assignment
 */

//alert("Just testing!");


 //Basic Conditional, if we have enough to buy

 //Create a few variables
 var budget = 15000;
 var carPrice = 23000;
 var payCheck = 1600;

 if(budget>=carPrice){
     console.log("You can afford your car");
 } else {
     console.log("You are broke. Walk dammit!")
 }


// We can buy the car if our budget is greater than or equal to the car price OR our paycheck is more than 1500.

if(budget >= carPrice || payCheck> 1500){
    console.log("You can buy the car.");
} else {
    console.log("You need to get your money up. ASAP punk.");
}


 /* Truth table for || "Or"
 t || t = t
 t || f = t
 f || t = t
 f || f = f
  */

 /* Truth table for && "And"
 t && t = t
 t && f = f
 f && t = f
 f && f = f
  */

 //You can buy a car if the budget is greater than or equal to the car price AND your paycheck is over 1500.

 if(budget >= carPrice && payCheck >1500){
     console.log("You can buy the car!");
 } else{
     console.log("Pick a cheaper car or get a new job!");
 }
















