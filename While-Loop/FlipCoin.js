// Extend the Flip Coin problem till either Heads or Tails wins 11 times.

headCount = 0;
tailCount = 0;
while((headCount < 11) && (tailCount < 11) ){
    flip = Math.floor(Math.random()*2);
    if (flip == 0 ){ headCount ++;}
    if (flip == 1 ){ tailCount++;}
}
console.log(`the head count is ${headCount}.`);
console.log(`the tail count is ${tailCount}.`); 