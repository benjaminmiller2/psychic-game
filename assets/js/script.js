//global variables
let computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let wins = 0;
let losses = 0;
let guessRemaining = 10;
let guessed = [];

function reset(){
guessRemaining = 10;
guessed = [];
computerGuess; 
}

document.onkeyup = function(event){
  let playerGuess = event.key;
  let computerGuess = computerChoice [Math.floor(Math.random()* computerChoice.length)];

document.getElementById("won").innerHTML = wins;
document.getElementById("guess").innerHTML = guessed;
document.getElementById("Remain").innerHTML = guessRemaining;
document.getElementById("lost").innerHTML = losses;
  
  if ((playerGuess) === (computerGuess)){
wins++;                                       
guessed.push(playerGuess);
alert ("Congrats! " + " ' " + computerGuess + " ' " + " was the right answer!");
reset();
  }
  
  if ((playerGuess) !== (computerGuess)){
guessRemaining--;
guessed.push(playerGuess);
}

  if (guessRemaining === 0){
losses++;
reset();
}

}    
