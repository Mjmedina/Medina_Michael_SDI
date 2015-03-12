
 /*
Michael Medina
3/12/2015
Section 00
Day 5 Steaks
 */

//alert("Just testing!");


 //Test a steak temperature and tell the user the doneness level

 /*
 Extra-rare  46–49 °C	115–120 °F
 Rare        52–55 °C	125–130 °F
 Medium rare 55–60 °C	130–140 °F
 Medium      60–65 °C	140–150 °F	145 °F
 Medium well 65–69 °C	150–155 °F
 Well done   71 °C+	160 °F+	160 °F
 */

 //Create a variable for our steak temperature
 var steakTemp = prompt("What is the temperature of your steak?");

 //We have to test each of the cases above to see where out temp falls into.

 if(steakTemp< 115){
     console.log("Your steak is undercooked.");
 } else if(steakTemp < 125){
     console.log("Your steak is Extra-Rare or Blue.");
 } else if(steakTemp < 130){
     console.log("Your steak is Rare.");
 } else if(steakTemp < 140){
     console.log("Your steak is Medium Rare.");
 } else if(steakTemp < 150){
     console.log("Your steak is Medium");
 } else if(steakTemp < 155){
     console.log("Your steak is Medium Well.");
 } else if(steakTemp <= 160){
     console.log("Your steak is Well Done");
 }else{
     console.log("Your steak is Burnt.");
 }


