
//Function that gives computer choice 
function getComputerChoice() {
    // List of possible choices 
    let listOfChoices = ['Rock','Paper','Scissors'];
    // Generate a random number thar corresponds to list of choices
    let choiceNumber = Math.floor(Math.random() * 3);
    // Assign choice to variable Choice
    let choice = listOfChoices[choiceNumber]; 
    return choice;
}

