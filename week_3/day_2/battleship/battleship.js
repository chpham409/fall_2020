var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

// console.log("location1: " + location1) // i just debug and see what is in location 1

while (!isSunk) {
  guess = prompt("Ready, aim, fire! (enter a number form 0-6):");
  if (guess < 0 || guess > 6 || guess === undefined || guess == null || guess.length <= 0) {
    alert("Please enter a valid cell number!");
  } 
  else {
    guesses = guesses + 1

    if (guess == location1 || guess == location2 || guess == location3) {
      alert("HIT!");
      hits = hits + 1;

      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    } 
    else {
      alert("MISS");
    } 
  }  
}

var stats = "You took " + guesses + " guesses to sink the battleship, " +
              "which means your shooting accuracy was " +  (3/guesses);

alert(stats);