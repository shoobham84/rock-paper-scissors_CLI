const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resultsContainer = document.querySelector(".results");
const scoreDiv = document.querySelector(".score");

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
}

function playGame(humanSelection) {
    const computerSelection = getComputerChoice()  
    playRound(humanSelection, computerSelection);
    console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
}

rock.addEventListener("click", () => playGame('rock'));
paper.addEventListener("click", () => playGame('paper'));
scissors.addEventListener("click", () => playGame('scissors'))





