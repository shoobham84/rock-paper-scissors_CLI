const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');


function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissor'];
        return choices[Math.floor(Math.random() * choices.length)];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        console.log("It's a tie! You both chose " + humanSelection);
    }
    else if (
        (humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'paper' && computerSelection === 'rock') ||
        (humanSelection === 'scissors' && computerSelection === 'paper')
    ) {
        console.log("You win! " + humanSelection + " beats " + computerSelection + "!");
        humanScore++;
    }
    else {
        console.log("You lose! " + computerSelection + " beats " + humanSelection + "!");
        computerScore++;
    }
}

function playGame(humanSelection) {
    const computerSelection = getComputerChoice()  
    playRound(humanSelection, computerSelection);
    console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
}

rock.addEventListener("click", () => playGame('rock'));
paper.addEventListener("click", () => playGame('paper'));
scissor.addEventListener("click", () => playGame('scissor'))


const results = document.querySelector(".results"); 

const roundDeclaration = document.createElement("div");
roundDeclaration.classList.add("round-declaration");
results.append(roundDeclaration);


