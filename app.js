/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// dice Image
var diceImg = document.getElementsByClassName("dice")[0];

// scores
var score0 = document.getElementById("score-0");
var current0 = document.getElementById("current-0");
var score1 = document.getElementById("score-1");
var current1 = document.getElementById("current-1");

// current player index
var currentPlayer;

function init() {
  // current player
  currentPlayer = 0;

  // make player one is the active player
  var activePlayer = document.getElementsByClassName("active")[0];
  if (activePlayer.classList.contains("player-1-panel")) {
    activePlayer.classList.remove("active");
    document
      .getElementsByClassName("player-0-panel")[0]
      .classList.add("active");
  }

  // initialize scores
  score0.innerHTML = "0";
  current0.innerHTML = "0";
  score1.innerHTML = "0";
  current1.innerHTML = "0";

  // hide the dice
  diceImg.style.visibility = "hidden";
}

// initialize scores whenever we start the game
init();

function rollDice() {
  // current score
  var randomDiceFace = Math.floor(Math.random() * 6 + 1);

  // manipulating the dice image accordingly
  diceImg.style.visibility = "visible";
  diceImg.setAttribute("src", `./images/dice-${randomDiceFace}.png`);

  //   manipulating scores accordingly
  if (randomDiceFace === 1) {
    document.getElementsByClassName("active")[0].classList.remove("active");
    if (currentPlayer === 0) {
      currentPlayer = 1;
      current0.innerHTML = "0";
    } else {
      currentPlayer = 0;
      current1.innerHTML = "0";
    }
    document
      .getElementsByClassName(`player-${currentPlayer}-panel`)[0]
      .classList.add("active");
  } else {
    var activePlayerScore = document.getElementById(`current-${currentPlayer}`);
    activePlayerScore.innerHTML =
      parseInt(activePlayerScore.innerHTML) + randomDiceFace;
  }
}
