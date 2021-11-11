// Extend the program to take a range of number as input and output the Prime Numbers in that range.

const startNumber = parseInt(prompt('Enter start number: '));
const endNumber = parseInt(prompt('Enter end number: '));

console.log(`The prime numbers between ${startNumber} and ${endNumber} are: `);

let array = "";

for (let i = startNumber; i <= endNumber; i++) {
    let isPrime = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = 1;
            break;
        }
    }

    if (i > 1 && isPrime == 0) {
        array += i+ " ";
    }
}
console.log(array)