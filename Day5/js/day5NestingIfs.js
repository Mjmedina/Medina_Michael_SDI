
 /*
Michael Medina
3/12/2015
Section 00
Day 5 Nesting If's
 */

//alert("Test!");

//Some Decisions Affect Other Decisions

//If it is warm then let's go to the beach, if it is not the lets go to the movies.

//Get the temperature
 var temp= 75;

 //Let's set the water temperature.
 var waterTemp = 78;

 if(temp >= 80){
     console.log("Let's go to the beach!");

     if (waterTemp > 75){
         console.log("Let's go swimming.");
     }else {
         console.log("Let's get a tan.");
     }

 } else{
     console.log("Let's go to the movies!");



     //Do we have any kids in the group?
     var kids = "No";
      //Test if we have kids.
     if(kids ==="No"){
         console.log("Let's see 50 Shades of Gray!");
     } else{
         console.log("Let's go see Spongebob!");
     }

 }

/*
// If the water temperature is above 75, let's go swimming, if not let's get a tan.


 if (waterTemp > 75){
     console.log("Let's go swimming.");
 }else {
     console.log("Let's get a tan.");
 }
*/