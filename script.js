let playerScore = 0;
let computerScore = 0;

function getComputerSelection() {
    const choices = ["Rock", "Paper", "Scissors"]
    return randChoice = choices[Math.floor(Math.random() * 3)];
}

function getPlayerSelection() {
    let userAnswer = prompt("Choose Rock, Paper, or Scissors");
    const possibleAnswers = ["rock", "paper", "scissors"]
    if (possibleAnswers.includes(userAnswer)) {
        return userAnswer.toLowerCase();
    } else {
        alert("Invalid Answer");
    }
}

function playRockPaperScissors(computerSelection, playerSelection) {
    console.log("Computer chose " + computerSelection);
    console.log("User chose " + playerSelection);

    if (computerSelection == "Rock") {
        if (playerSelection == "rock") {
            displayResult(computerSelection, playerSelection, "Tie")
        } else if (playerSelection == "paper") {
            playerScore++
            displayResult(computerSelection, playerSelection, "User Win");
        } else if (playerSelection == "Scissors") {
            computerScore++
            displayResult(computerSelection, playerSelection, "Computer Win");
        } 
    } else if (computerSelection == "Paper") {
        if (playerSelection == "rock") {
            computerScore++
            displayResult(computerSelection, playerSelection, "Computer Win");
        } else if (playerSelection == "paper") {
            displayResult(computerSelection, playerSelection, "Tie")
        } else if (playerSelection == "scissors") {
            playerScore++
            displayResult(computerSelection, playerSelection, "User Win");
        } 
    } else if (computerSelection == "Scissors") {
        if (playerSelection == "rock") {
            playerScore++
            displayResult(computerSelection, playerSelection, "User Win");
        } else if (playerSelection == "paper") {
            computerScore++
            displayResult(computerSelection, playerSelection, "Computer Win");
        } else if (playerSelection == "scissors") {
            displayResult(computerSelection, playerSelection, "Tie")
        } 
    }    
}

function displayResult(computerSelection, playerSelection, result) {

    let gameResultDiv = document.querySelector(".game-result");
    let userWinsDiv = document.querySelector(".user-wins");
    let computerWinsDiv = document.querySelector(".computer-wins");
    let gameOverDiv = document.querySelector(".game-over");

    gameOverDiv.textContent = "";

    userWinsDiv.textContent = "User Wins: " + playerScore ;
    computerWinsDiv.textContent = "Computer Wins: " + computerScore;

    if (result == "Tie") {
        gameResultDiv.textContent = "Computer selected " + computerSelection +  ", user Selected " + playerSelection + ", Tie Game"
    } else if (result == "User Win") {
        gameResultDiv.textContent = "Computer selected " + computerSelection +  ", user Selected " + playerSelection + ", User Win"
    } else if (result == "Computer Win") {
        gameResultDiv.textContent = "Computer selected " + computerSelection +  ", user Selected " + playerSelection + ", Computer Win"
    }

    if (playerScore == 5) {
        gameOverDiv.textContent = "Game over, user wins with 5";
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        gameOverDiv.textContent = "Game over, computer wins with 5";
        playerScore = 0;
        computerScore = 0;
    }
}

const buttons = document.querySelectorAll(".player-button")
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playRockPaperScissors(getComputerSelection(), e.target.value);
    })
})