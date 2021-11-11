// Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

// let number = parseInt(prompt("Enter a number to know the place value: "));
let number = 100000;

switch(number) {
    case 1:
        console.log(number + `'"Units"'`);
        break;
    case 10:
        console.log("Tens");
        break;
    case 100:
        console.log("Hundreds");
        break;
    case 1000:
        console.log("Thousands");
        break;
    case 10000:
        console.log("Ten thousands");
        break;
    case 100000:
        console.log("Lakh");
        break;
    case 1000000:
        console.log("Ten Lakh");
        break;
   case 100000000:
       console.log("Crore");
       break;
   case 1000000000:
       console.log("Ten Crore");
       break;
   case 10000000000:
       console.log("Arab");
       break;
   case 100000000000:
       console.log("Ten Arab");
       break;   
    default:
        console.log("Wrong input!");
        break;
}