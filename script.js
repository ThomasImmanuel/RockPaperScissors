
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
        return ["rock", "lose"]
    } else if (playerSelection === 'rock' & computerSelection === 'scissors') {
        return ["scissors", "win"]
    } else if (playerSelection === 'rock' & computerSelection === 'rock') {
        return ["rock", "tie"]
    } else if (playerSelection === 'paper' & computerSelection === 'scissors') {
        return ["paper", "lose"]
    } else if (playerSelection === 'paper' & computerSelection === 'rock') {
        return ["rock", "win"]
    } else if (playerSelection === 'paper' & computerSelection === 'paper') {
        return ["paper", "tie"]
    } else if (playerSelection === 'scissors' & computerSelection === 'rock') {
        return ["scissors", "lose"]
    } else if (playerSelection === 'scissors' & computerSelection === 'paper') {
        return ["paper", "win"]
    } else if (playerSelection === 'scissors' & computerSelection === 'scissors') {
        return ["scissors", "tie"]
    } 
}

const playerSelection = "PaPer";
const computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));

// //Fuction that plays five rounds and calculates and returns final score
// function game() {
//     //tracking the score
//     let scorePlayer = 0
//     let scoreComputer = 0

//     //loop that plays five rounds and adds up score
//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt("Pick rock, paper or scissors");
//         let game = playRound(playerSelection, getComputerChoice());
//         if (game[1] === "win") {
//             scorePlayer += 1;
//             alert(game[0]);
//         } else if (game[1] === "lose") {
//             scoreComputer += 1;
//             alert(game[0]);
//         } else {
//             scoreComputer += 0.5;
//             scorePlayer += 0.5;
//             alert(game[0]);
//         }
//     }

//     // Returns final score
//     if (scoreComputer < scorePlayer) {
//         return `Congratulations, you won! the final score is player:${scorePlayer} to computer:${scoreComputer}`
//     }   else if (scoreComputer > scorePlayer) {
//         return `Sorry, you lost! the final score is player:${scorePlayer} to computer:${scoreComputer}`
//     } else {
//         return 'It´s a tie';
//     };
// }


const startBtn = document.querySelector('#start');
const displayGame = document.querySelector('#displayGame');
const scoreP = document.querySelector('#scoreP');
const scoreC = document.querySelector('#scoreC');
const buttons = document.querySelector('#buttons');

startBtn.addEventListener('click', () => {
    displayGame.setAttribute(
        'style', 
        'visibility: visible; display: flex; flex-direction: column; justify-content: center; align-items: center; height: 500px; row-gap: 20px;');
    buttons.setAttribute('style', 'display: flex;');

    scorePlayer = 0;
    scoreComputer = 0;
    displayResult.textContent = '';
    scoreC.textContent = '';
    scoreP.textContent = '';
});


//Plays one game of rps with input and displays the score
function oneGame(playerSelection) {
    let game = playRound(playerSelection,getComputerChoice());
    if (game[1] === "win") {
        scorePlayer += 1;
    } else if (game[1] === "lose") {
        scoreComputer += 1;
    } 
    displayResult.textContent = `The computer played ${game[0]}`;
    displayResult.setAttribute('style','color: white; font-size: 20px;')
    scoreP.textContent = "You " + scorePlayer;
    scoreC.textContent = "Computer " + scoreComputer;
    scoreC.setAttribute('style','color: white; font-size: 30px;')
    scoreP.setAttribute('style','color: white; font-size: 30px;')
    //If either player or computer gets five wins the score is reset
    if (scorePlayer === 5) {
        displayResult.textContent = `Congratulations! You won`;
        displayResult.setAttribute('style','color: white; font-size: 50px;')
        scorePlayer = 0;
        scoreComputer = 0;
        buttons.setAttribute('style','display: none;')
    } else if (scoreComputer === 5) {
        displayResult.textContent = `Too bad, you lost`;
        displayResult.setAttribute('style','color: white; font-size: 50px;')
        scorePlayer = 0;
        scoreComputer = 0;
        buttons.setAttribute('style','display: none;')
        
    }

}

//Getting all elements used from the DOM
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const displayResult = document.querySelector('#displayResult');

//Variables to track the score
let scorePlayer = 0;
let scoreComputer = 0;

//event-listeners to track button click and play a game and keep score
rockBtn.addEventListener('click', () => {
    oneGame('rock');
});

paperBtn.addEventListener('click', () => {
    oneGame('paper');
});

scissorsBtn.addEventListener('click', () => {
    oneGame('scissors');
})

// console.log(game());

