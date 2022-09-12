const computerChoices = [
    "rock",
    "scissors",
    "paper"
];


const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");

let playerScoreBoard = document.querySelector(".player-score");
let computerScoreBoard = document.querySelector(".computer-score");
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return randChoice;
}

function decideWinner(playerSelection, computerSelection) {

    if (playerSelection == "paper" && computerSelection == "scissors") {
        return "Computer";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "Player";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "Computer";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "Computer";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "Player";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "Player";
    }
    else {
        return "Draw!";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = decideWinner(playerSelection, computerSelection);
    if (result == "Player") {
        playerScore++;
        let para = document.createElement("p"); 
        para.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
        outcomeDiv.appendChild(para);
        
    }
    else if (result == "Computer") {
        computerScore++;
        let para = document.createElement("p");
        para.innerText = `Computer wins! ${computerSelection} beats ${playerSelection}`;
        outcomeDiv.appendChild(para);
    }
    else {
        let para = document.createElement("p");
        para.innerText = `It's a draw! You both picked ${playerSelection}`;
        outcomeDiv.appendChild(para);

    }
    // let scorePlayerPara = document.createElement("p");
    // scorePlayerPara.innerText = `${playerScore}`;
    // outcomeDiv.append(scorePlayerPara);

    // let scoreComputerPara = document.createElement("p");
    // scoreComputerPara.innerText = `${computerScore}`;
    // outcomeDiv.append(scoreComputerPara);

}

const checkWinner = (playerScore, computerScore) => {
    if (playerScore === 5) {
        const h2 = document.createElement("h2");
        h2.classList.add("player-won")
        h2.innerText = `You win!`
        outcomeDiv.append(h2);
        
    }
    if (computerScore === 5) {
        const h2 = document.createElement("h2");
        h2.classList.add("computer-won")
        h2.innerText = `Computer wins!`
        outcomeDiv.append(h2);
        
    }
    
}

function restartGame() {
    if (computerScore >= 5 || playerScore >= 5 ) {
        playerScore = 0;
        computerScore = 0;
        playRound(playerSelection, computerSelection);
    }
}

btnRock.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "rock";
    playRound(playerSelection, computerSelection);
    playerScoreBoard.innerText = `Player: ${playerScore}`;
    computerScoreBoard.innerText = `Computer: ${computerScore}`;
    checkWinner(playerScore, computerScore);
    restartGame();
    
});

btnScissors.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
    playerScoreBoard.innerText = `Player: ${playerScore}`;
    computerScoreBoard.innerText = `Computer: ${computerScore}`;
    checkWinner(playerScore, computerScore);
    restartGame();
    
});
btnPaper.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    playerScoreBoard.innerText = `Player: ${playerScore}`;
    computerScoreBoard.innerText = `Computer: ${computerScore}`;
    checkWinner(playerScore, computerScore);
    restartGame();
});