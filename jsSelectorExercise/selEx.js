let rand = Math.floor(Math.random() * 100) + 1;
let stop = 0
let guess = Number(prompt("Input a whole number between 1 and 100 as a numeral:"));
        while (stop == 0) {
        if (isNaN(guess) == true || guess>100 || guess<1 || guess!=parseInt(guess)) {
            guess = Number(prompt("You did not enter a numeral between 1 and 100"));
        }
        else if(guess<rand) {
            guess = Number(prompt("Too low. Guess again!"));
        }
        else if(guess>rand) { 
            guess = Number(prompt("Too high. Guess again!"));
        }
        else {
            alert("THAT'S IT!");
            stop += 1
        }
        }
