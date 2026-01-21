const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resultsContainer = document.querySelector(".results");
const scoreDiv = document.querySelector(".score");
const button = [rock, paper, scissors];

const roundDeclaration = document.createElement("div");
roundDeclaration.classList.add("round-declaration");
roundDeclaration.style.cssText = "font-size: 1.2rem; text-align: right; color: #150355;"; 
resultsContainer.append(roundDeclaration);

function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
}

let humanScore = 0;
let computerScore = 0;
const WINNING_SCORE = 5;

function endgame() {
    disableButtons(true);
    resultsContainer.insertBefore(resetButton, roundDeclaration);
}

function checkWinner() {
    if (humanScore == WINNING_SCORE) {
        roundDeclaration.textContent = "GAME OVER! You Win this game!";
        endgame();
    }
    else if (computerScore == WINNING_SCORE) {
        roundDeclaration.textContent = "GAME OVER! You Lose this game!";
        endgame();
    }
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        roundDeclaration.textContent = "It's a tie! You both chose " + humanSelection;
    }
    else if (
        (humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'paper' && computerSelection === 'rock') ||
        (humanSelection === 'scissors' && computerSelection === 'paper')
    ) {
        roundDeclaration.textContent = "You win! " + humanSelection + " beats " + computerSelection + "!";
        humanScore++;
    }
    else {
        roundDeclaration.textContent = "You lose! " + computerSelection + " beats " + humanSelection + "!";
        computerScore++;
    }
    scoreDiv.innerHTML = `Computer - ${computerScore} <br> Human - ${humanScore}`;
    checkWinner();
}

function playGame(humanSelection) {
    const computerSelection = getComputerChoice()  
    playRound(humanSelection, computerSelection);
    console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
}

function disableButtons(isDisabled) {
    button.forEach(btn => {
        if (btn) {
            btn.disabled = isDisabled;
            btn.style.opacity = isDisabled ? "0.5" : "1";
            btn.style.cursor = isDisabled ? "not-allowed" : "pointer";
        }
    });
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    scoreDiv.innerHTML = `Computer - ${computerScore} <br> Human - ${humanScore}`;
    roundDeclaration.textContent = "";
    resetButton.remove();
    disableButtons(false);
}

const resetButton = document.createElement("button");
resetButton.classList.add("reset-button");
resetButton.textContent = "Reset";

rock.addEventListener("click", () => playGame('rock'));
paper.addEventListener("click", () => playGame('paper'));
scissors.addEventListener("click", () => playGame('scissors'))
resetButton.addEventListener("click", resetGame);




