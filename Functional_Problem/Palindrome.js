// Write a function to check if the two numbers are Palindromes

let check = function(number){
    let originalNumber = number;
    let rem;
    let temp = 0 ;

    while (number > 0 ){
        rem = number % 10 ;
        temp =(temp*10) +rem;
        number = parseInt(number/10);
    
    }
    if (originalNumber == temp) {
        console.log("the number is planindrome number")
    
    } 
     else{
        console.log("number is not planindrome number");
    }
}

let input= parseInt(prompt("Enter number to check planindrome -> "));
let planindromeCheck = check(input);
