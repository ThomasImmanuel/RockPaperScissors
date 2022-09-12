
//Function that gives computer choice 
function getComputerChoice() {
    // List of possible choices 
    let listOfChoices = ['rock','paper','scissors'];
    // Generate a random number thar corresponds to list of choices
    let choiceNumber = Math.floor(Math.random() * 3);
    // Assign choice to variable Choice
    let choice = listOfChoices[choiceNumber]; 
    return choice;
}

//plays one round og rock paper scissors
function playRound(playerSelection, computerSelection) {
    //converts playerSelection to all lowercase letters
    playerSelection = playerSelection.toLowerCase();
    //checks all possible outcomes 
    if (playerSelection === 'rock' & computerSelection === 'paper') {
        return "You lose! Paper beats Rock"
    } else if (playerSelection === 'rock' & computerSelection === 'scissors') {
        return "You win! Rock beats Scissors"
    } else if (playerSelection === 'rock' & computerSelection === 'rock') {
        return "It´s a tie!"
    } else if (playerSelection === 'paper' & computerSelection === 'scissors') {
        return "You lose! Scissors beats paper"
    } else if (playerSelection === 'paper' & computerSelection === 'rock') {
        return "You win! Paper beats Rock"
    } else if (playerSelection === 'paper' & computerSelection === 'paper') {
        return "It´s a tie!"
    } else if (playerSelection === 'scissors' & computerSelection === 'rock') {
        return "You lose! Rock beats scissors"
    } else if (playerSelection === 'scissors' & computerSelection === 'paper') {
        return "You win! Scissors beats Paper"
    } else if (playerSelection === 'scissors' & computerSelection === 'Scissors') {
        return "It´s a tie!"
    } 
}

const playerSelection = "PaPer";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));