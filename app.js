const choices = ["rock", "paper", "scissors"];

const winScore = 2;
let playerScore = 0;
let computerScore = 0;

const checkWinner = (player, computer) => {
  if (player === computer) {
    return "tie";
  } else if (player === "rock") {
    return computer === "scissors" ? "player" : "computer";
  } else if (player === "paper") {
    return computer === "rock" ? "player" : "computer";
  } else {
    return computer === "paper" ? "player" : "computer";
  }
};

const showResult = (result) => {
  if (result === "player") {
    console.log("you win.");
    playerScore++;
  } else if (result === "computer") {
    console.log("Computer Win.");
    computerScore++;
  } else if (result === "tie") {
    console.log("It's a tie.");
  }

  console.log(`player score : ${playerScore}`);
  console.log(`computer score : ${computerScore}`);
  console.log("-----------------------------------");
};

const play = () => {
  while (playerScore < winScore && computerScore < winScore) {
    const playerChoice = prompt("Choose : rock, paper, Scissors");

    if (playerChoice === null) {
      console.log("Game cancelled.");
      return;
    }

    const normalizedChoice = playerChoice.toLowerCase();

    if (choices.includes(normalizedChoice)) {
      console.log(`You choose : ${normalizedChoice}`);
    } else {
      console.log("Invalid choice. Please choose rock, paper, or scissors.");
      continue;
    }

    const randomNumber = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomNumber];
    console.log(`Computer choose : ${computerChoice}`);

    const gameResult = checkWinner(normalizedChoice, computerChoice);
    showResult(gameResult);
  }

  if (playerScore === winScore) {
    console.log("🎉 Player wins the game!");
  } else {
    console.log("🎉 Computer wins the game!");
  }
};
play();
