function getComputerChoice(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function getHumanChoice() {
    let ans = prompt("Rock, Paper or Scissors?: ");
    return ans.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

