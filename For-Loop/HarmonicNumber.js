/*
Write a program that takes a command-line argument n and prints the nth harmonic
number. Harmonic Number is of the form
*/

let harmonicNumber = parseInt(prompt("Enter the number to print harmonic number upto -> "));
var singleLine = "";
for(var i = 1 ; i <= harmonicNumber ;i++){
   singleLine += "1/"+i+" + ";
}
console.log(singleLine);