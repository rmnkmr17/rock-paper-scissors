function getComputerChoice() {
    const choices = [
        "Rock", 
        "Scissors", 
        "Paper"
    ];
    const random = Math.floor(Math.random() * choices.length);
    console.log(random, choices[random]);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "Draw!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You win!"
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        return "You lost!"
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "You lost!"
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You win!"
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You win!"
    }
    else (playerSelection === "paper" && computerSelection === "scissors"){
        return "You lost!"
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
