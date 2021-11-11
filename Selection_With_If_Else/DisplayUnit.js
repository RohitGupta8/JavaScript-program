// Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

// let num = parseInt(prompt("enter number -> "))
let num = 90299;

// var num = window.prompt("Enter number o your choice : ");
// document.write(num);

if (num >= 1 && num < 10){
    console.log("The unit of" +num+ " is Ones");
}
else if(num >= 10 && num < 100){
    console.log("The unit of " +num+ " is Tens");
}
else if(num >= 100 && num < 1000){
    console.log("The unit of " +num+ " is Hundred");
}
else if(num >= 1000 && num < 10000){
    console.log("The unit of " +num+ " is Thousand");
}
else if(num >= 10000 && num < 100000){
    console.log("The unit of " +num+ " is Ten Thousand");
}
else if(num >= 100000 && num < 1000000){
    console.log("The unit of " +num+ " is Lakh");
}
else if(num >= 1000000 && num < 10000000){
    console.log("The unit of " +num+ " is Ten Lakh");
}
else if(num >= 10000000 && num < 100000000){
    console.log("The unit of " +num+ " is Crore");
}
else{
    console.log("More than crore unit");
}
