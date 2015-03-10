
 /*
Michael Medina
Date
Section 00
Assignment
 */

//alert("Just testing!");

 //If your gpa is over 2.0 then you can graduate.

 //Create a variable for GPA!
 var gpa = 3.75;

 //Basic conditional
 if (gpa > 2.0){
     console.log("You can graduate");
 } else {
     console.log("Sorry punk, you're flippin' burgers.");
 }

 //(condition to test) ? code to run if true : code to run if false;

 //Create a basic ternary function for our GPA
 (gpa > 2.0) ? console.log("You can graduate!") : console.log("Work harder!");

//If a child is under 10 then they must read Green Eggs & Ham, otherwise they can read the Time Machine.


 //Create a variable for a child age and for the book.
 var age = 6;
 var book;

 //Use a ternary to define the book.

 book = (age <10) ? "Green Eggs and Ham" : "The Time Machine";

 console.log("The kid should read " + book+".");

// Value of book if basic conditional.

 var bookBasic;

 if(age<10){
     bookBasic = "Green Eggs and Ham";
 } else {
     bookBasic = "The Time Machine";
 }
 console.log(bookBasic);
