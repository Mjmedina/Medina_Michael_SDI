
 /*
Michael Medina
Date
Section 00
Assignment
 */

//alert("Just testing!");

 //Casting variables means treating one datatype like another... if possible.

 var stringVar = "6";
 var results = 7 + stringVar;
 console.log(results);

 //Number() - treats whatever is inside like a number if possible.
 var castingResults = 7 + Number(stringVar);
 console.log(castingResults);

//Cast numbers to be a text string
 //String() - treat whatever is inside as a text string
 var areaCode = 954;
 var prefix = 598;
 var lineNumber = 3834;

 var phoneNumber = String(areaCode)+String(prefix)+String(lineNumber);
 console.log(phoneNumber);

 console.log("("+areaCode+")"+prefix+"-"+lineNumber);

 //Parsing Integers
 //ParseInt() - looks through a text string and returns an integer
 //Only the first number in the string is returned!
 //If the first character in the text string canNot be converted into a number, then it returns NaN = Not a Number

 var a = parseInt("40 years old");
 console.log(a);

 var b = Number("40 years old");
 console.log(b);

 var c = parseInt("He was 40");
 console.log(c);

 //Prompts ONLY return text strings!!

 var tshirtsOwned = prompt("How many t-shirts do you currently own?");

 //Ask the user how many they bought.
 var tshirtsBought = prompt("How many t-shirts did you buy today?");

 //Calculate the total number of t-shirts.
 var totalShirts = parseInt(tshirtsOwned) + parseInt(tshirtsBought);
 console.log("You currently own "+totalShirts+" shirts.");








