// Get elements
const dice: HTMLImageElement = document.querySelector(".dice")!;
const btnRoll: HTMLButtonElement = document.querySelector(".btn--roll")!;
const btnHold: HTMLButtonElement = document.querySelector(".btn--hold")!;
const btnNewGame: HTMLButtonElement = document.querySelector(".btn--new")!;
let playerOneTurn: boolean = true;

// Ins
let playerOne = new Player(
  "playerOne",
  0,
  0,
  document.querySelector("#current--0")!,
  document.querySelector("#score--0")!,
  document.querySelector(".player--0")!
);

let playerTwo = new Player(
  "playerTwo",
  0,
  0,
  document.querySelector("#current--1")!,
  document.querySelector("#score--1")!,
  document.querySelector(".player--1")!
);

dice.classList.add("hidden");

// Highlight section for player who can roll the dice
const activatePlayerSection = function (
  activePlayer: Player,
  deactivePlayer: Player
) {
  activePlayer.section.classList.add("player--active");
  deactivePlayer.section.classList.remove("player--active");
};

// Swap players and null current score
const changePlayers = function (deactivePlayer: Player) {
  deactivePlayer.current = 0;
  deactivePlayer.currentLabel.textContent = deactivePlayer.current.toString();
  playerOneTurn = !playerOneTurn;
  playerOneTurn
    ? activatePlayerSection(playerOne, playerTwo)
    : activatePlayerSection(playerTwo, playerOne);
};

// Generates random number and displays image of diceface base on it
// Let's it roll until a number 1 is rolled, then swaps player and nulls current score
function rollDice(player: Player) {
  let diceFace = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove("hidden");
  dice.setAttribute("src", `pic/dice-${diceFace}.png`);

  if (diceFace !== 1) {
    player.current += diceFace;
  } else {
    changePlayers(player);
  }
  player.currentLabel.textContent = player.current.toString();
}

// Adds the current score to the total score and switches active player
// If the score of the player with the current turn is over 100 the game ends
function holdCurrentScore(player: Player) {
  player.score += player.current;
  player.scoreLabel.textContent = player.score.toString();
  changePlayers(player);

  if (player.score >= 100) {
    player.section.classList.add("player--winner");
    btnHold.disabled = true;
    btnRoll.disabled = true;
  }
}

// Sets game to it's initial conditions
function restartGame(player: Player) {
  playerOneTurn = true;
  activatePlayerSection(playerOne, playerTwo);
  playerOne.resetScores();
  playerTwo.resetScores();
  btnHold.disabled = false;
  btnRoll.disabled = false;
  player.section.classList.remove("player--winner");
}

// Eventlisteners

// If player one has the turn deliver player one as parameter otherwise deliver player two
btnRoll.addEventListener("click", () => {
  rollDice(playerOneTurn ? playerOne : playerTwo);
});

btnHold.addEventListener("click", () => {
  holdCurrentScore(playerOneTurn ? playerOne : playerTwo);
});

// If player one has the winner class pass him as the parameter and remove the class
// otherwise pass in player two
btnNewGame.addEventListener("click", () => {
  restartGame(
    playerOne.section.classList.contains("player--winner")
      ? playerOne
      : playerTwo
  );
});
