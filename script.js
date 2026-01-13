function getComputerChoice(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    let rand_num = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    switch (rand_num) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissor';
            break;
        default:
            return 'invalid';
            break;
    }
}

function getHumanChoice() {
    let ans = prompt("Rock, Paper or Scissors?: ");
    return ans.toLowerCase();
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice()  // Rock = 0, Paper = 1, Scissors = 2

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
