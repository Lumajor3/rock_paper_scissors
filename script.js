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
            return "Tie"
        } else if (playerSelection == "paper") {
            return "User Win"
        } else if (playerSelection == "Scissors") {
            return "Computer Win"
        } 
    } else if (computerSelection == "Paper") {
        if (playerSelection == "rock") {
            return "Computer Win"
        } else if (playerSelection == "paper") {
            return "Tie"
        } else if (playerSelection == "scissors") {
            return "User Win"
        } 
    } else if (computerSelection == "Scissors") {
        if (playerSelection == "rock") {
            return "User Win"
        } else if (playerSelection == "paper") {
            return "Computer Win"
        } else if (playerSelection == "scissors") {
            return "Tie"
        } 
    }    
}

function game() {
    let userWins = 0
    let computerWins = 0;
    let ties = 0;

    for (let i=0;i<5;i++) {
        let result = playRockPaperScissors(getComputerSelection(), getPlayerSelection());

        if (result == "Tie") {
            ties++
        } else if (result == "User Win") {
            userWins++
        } else if (result == "Computer Win") {
            computerWins++
        }
    }

    console.log("Result - Computer Wins: " + computerWins + " | User Wins: " + userWins + " | Ties: " + ties);
}

game();