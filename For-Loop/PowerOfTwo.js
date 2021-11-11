/*
Write a program that takes a command-line argument n and prints a table of the 
powers of 2 that are less than or equal to 2^n.
*/

let table = parseInt(prompt("Enter power -> "));

for (var i = 1 ; i<= table ; i++){
    console.log("2 * "+ i +" = " + Math.pow(2,i));
}