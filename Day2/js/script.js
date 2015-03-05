/*
Michael Medina
3/5/15
Section 00
Day 2 Intro
 */

//alert("Testing to see if connected.");

/*
Example of a multilined comment.
Anything inside of here will not be seen by the computer.
 */

// Single line comment. ONLY this line will be ignored.

//Alert box- pop up box that will alert the user with information.
alert("Text that the user will see");

//Console.log- Shows information to the programmer.
// Great for checking values and debugging.
//Also shows all errors.
console.log("This is the console")

//Declare a variable
//Use the keyword of var
var whatever1;

//Define the variable
//Sets the value of the existing variable
whatever1 = 42;

//Console.log the variable
console.log("The variable whatever1 is")
console.log(whatever1);

//Declare and define a variable at the same time.
var a = 2;

console.log(a)

a+3;
a=a+3
console.log(a)


//Declare new variable
var b;

//Define this variable using an existing variable
b = a+3;
console.log(a);
console.log(b);

//Simple Math
//Find our ages

//Declare and Define the year we were born
var yearBorn = 1993;

//2015 - year we are born
var ourAge = 2015-yearBorn-1;
console.log(ourAge)

//Talk about Math
// +, -, *, /

//Find the area of the triangle
// base*height/2
var base= 8;
var height= 5;

var areaTriangle = base*height/2
console.log(areaTriangle);

// Modulo - %
// Gives the remainder
var decimal = 32/10;
console.log(decimal)

var remainder = 32%10
console.log(remainder);

//Find out if even or odd
// %2 1=odd 0=even
var evenOrOdd = 67%2;
console.log(evenOrOdd);

//Assingment Operators
/*
= Assigns the value to the variable.
++ Adds 1 to the current value of the variable.
-- Subtracts 1 from the current value of the variable.
+= Adds the # to the current value of the variable.
-= Subtracts the # from the current value of the variable.
/= # Divide the current value by the #
*= # Multiply the current value by the #.
 */

var assign = 0;

// ++ is the same as assign = assign+1
assign++
console.log(assign);

//-- is the ame as assign = assign -1;
assign--;
console.log(assign);

// += # is the same as assign = assign + #;
assign +=5; //assign = assign + 5
console.log(assign);

// -= is the same as assign = assign - #
assign -=2
console.log(assign);

// /= is the same as assign = assign/#
assign /=3;
console.log(assign);

// *= is the same as assign = assign*#
assign *=7
console.log(assign);

//Strings - any text that we use
// Quotes are needed to distinguish between variables and plain text.

var kermit = "Light green";
var frogName = "kermit";
console.log(frogName);

// To double quote or not to double
// Can use an escape character \ backslash in front of the '
var phrase = "I don\'t know";
console.log(phrase);

// Escape character can also do multiple lines \n new line characer
var phrase2 = "I don't know. \nYou never do!"
console.log(phrase2);

//Boolean - kind of like a light switch
//Either true or false
// NOT a text string!! And must be lowercase!!
var yes = true;

var nope =  false;

// Order of Operations
// PEMDAS - Please Excuse My Dear Aunt Sally
// Parenthesis, Exponents, Multiplication, Division, Addition, Subtraction

//Find the average quiz grade
var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 90;

//Average - Add them up and divide by the number of quizzes.
var average = (quiz1 + quiz2 + quiz3) /3;
console.log(average);







