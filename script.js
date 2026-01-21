const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');


function getComputerChoice(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    let rand_num = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    switch (rand_num) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissor';
        default: return 'invalid';
    }
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
    const computerSelection = getComputerChoice(0, 3)  // Rock = 0, Paper = 1, Scissors = 2
    playRound(humanSelection, computerSelection);
    console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
}

rock.addEventListener("click", () => playGame('rock'));
paper.addEventListener("click", () => playGame('paper'));
scissor.addEventListener("click", () => playGame('scissor'))


// playGame();