let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let userScoreOutput = document.getElementById("userScore");
let computerScoreOutput = document.getElementById("computerScore");
let message = document.getElementById("message");
let replayButton = document.getElementById("replayButton");

let userChoice;

let userScore = 0;

let computerScore = 0;

let computerChoiceArray = ["rock", "paper", "scissors"];

let computerChoice;

const randomComputerChoice = () => {
  let random = Math.floor(Math.random() * 3);

  computerChoice = computerChoiceArray[random];
  console.log(computerChoice);
};

document.body.addEventListener(
  "click",
  (document.body.fn = function (e) {
    if (e.target === rock) {
      userChoice = "rock";
      randomComputerChoice();
      checkWhoWins(userChoice, computerChoice);
      console.log(userChoice);
    } else if (e.target === paper) {
      userChoice = "paper";
      randomComputerChoice();
      checkWhoWins(userChoice, computerChoice);
      console.log(userChoice);
    } else if (e.target === scissors) {
      userChoice = "scissors";
      randomComputerChoice();
      checkWhoWins(userChoice, computerChoice);
      console.log(userChoice);
    } else {
      return;
    }
  })
);

const checkWhoWins = (userChoice, computerChoice) => {
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScoreOutput.innerHTML = userScore += 1;
    message.innerHTML = "You Win!";
    console.log(userScore);
    checkEndGame(userScore);
  } else if (userChoice == computerChoice) {
    console.log();
    message.innerHTML = "Draw, try again";
  } else {
    computerScoreOutput.innerHTML = computerScore += 1;

    console.log(computerScore);
    message.innerHTML = "You Loose!";
    checkEndGame(computerScore);
  }
};

const checkEndGame = (userScore, computerScore) => {
  if (userScore === 3 || computerScore === 3) {
    document.body.removeEventListener("click", document.body.fn, false);
    console.log("removed event listener");
    replayButton.addEventListener("click", function (e) {
      location.reload();
    });
  }
};
