const computerChoices = [
    "rock",
    "scissors",
    "paper"
];

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
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (result == "Computer") {
        return `Computer wins! ${computerSelection} beats ${playerSelection}`;
    }
    else {
        return "It's a draw!";
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

        if (decideWinner(playerSelection, computerSelection) == "Player") {
            scorePlayer++;
        }
        else if (decideWinner(playerSelection, computerSelection) == "Computer") {
            scoreComputer++;
        }
    }

    if (scorePlayer > scoreComputer) {
        console.log("You won!");
    }
    else if (scorePlayer < scoreComputer) {
        console.log("Computer won!");
    }
    else {
        console.log("It's a Draw");
    }
}

    function getPlayerChoice() {
        let validatedInput = false;
        while (validatedInput == false) {
            const randChoice = prompt("Rock Paper Scissors");
            if (randChoice == null) {
                continue;
            }
            const choiceInLower = randChoice.toLowerCase();
            if (computerChoices.includes(choiceInLower)) {
                validatedInput = true;
                return choiceInLower;
            }
        }
    }

    game();