/*
Take a number from user and check if the number is a Prime then show
that its palindrome is also prime
a. Write function check if number is Prime
b. Write function to get the Palindrome.
c. Check if the Palindrome number is also Prime
*/

let checkNumber = function(number){
    let originalNumber = number;
    let isPrime = true;
    let temp = 0 ;
    let rem ;
    if (number == 0 ){
        console.log ("one is nither prime nor prime ")
    }
    else{

        for (let i = 2 ; i < number ; i++){
            if ( number%i == 0){
                isPrime =false;
                break;
            }
        }
        if (isPrime == true){    
            while(number > 0 ){
                rem = number%10
                temp = (temp*10)+ rem;
                number = parseInt(number/10);
            }
            if(originalNumber == temp){
                console.log("given number is prime & planindrome")
            }else{ 
                console.log("given number is prime but not planindrome")
            }

        }else{
            while(number > 0 ){
                rem = number%10
                temp = (temp*10)+ rem;
                number = parseInt(number/10);
            }
            if(originalNumber == temp){
                console.log("given number is  not prime but planindrome")
            }else{ 
                console.log("given number is nither prime nor planindrome")
            }
        }
    }
}

let userInputForPrime = parseInt(prompt("Enter number -> "));
let primecheck = checkNumber(userInputForPrime);