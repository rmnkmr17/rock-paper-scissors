function getComputerChoice() {
    const choices = [
        "Rock", 
        "Scissors", 
        "Paper"
    ];
    const random = Math.floor(Math.random() * choices.length);
    console.log(random, choices[random]);
}

function singleRound(playerSelection, computerSelection) {
    return "You Lose! Paper beats Rock";
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
