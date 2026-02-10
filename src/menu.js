const prompt = require('prompt-sync')({ sigint: true });
const {rpsGame, gameStats} = require ('./rps-game.js');

const showGameMenu = () => {
    let isRunning = true;
    //will keep the game running while isRunning is true;
    while(isRunning) { 
        //this will console log the menu options:
        console.log(`Menu:`);
        console.log(`1. Play Round`);
        console.log(`2. View Stats`);
        console.log(`3. Exit`);
        const menuChoice = prompt(`Choose a option (1 - 3): `).trim(); // menuChoice will be equal to what the user inputs 1-3
        // if menuChoice is 1 it runs the code inside of the if statement below.
        if (menuChoice === '1') {
            const userInput = prompt('Choose rock, paper, or scissors: ');
            //gard clause checking whether the userInput is not equal to rock paper or scissors.
            if(userInput.toLowerCase().trim() !== 'rock' && userInput.toLowerCase().trim() !== 'paper' && userInput.toLowerCase().trim() !== 'scissors') {
                console.log('Not rock, paper or scissors. Try again.');
            }  //if its not it will run the rpsGame()
            else {
                 rpsGame(userInput.toLowerCase().trim()); // userInput.toLowerCase().trim() makes sure the user input is lower case and trims to make sure there is no spaces in the front or back of the string.
            };
        } // if menuChoice is 2 then it will run the gameStats function and show the game stats.
        else if (menuChoice === '2') {
            gameStats();
        } // if menuChoice is 3 then it will reassign isRunning to false and that will end the game.
        else if (menuChoice === '3') {
            isRunning = false;
        } // the else checks if menuChoice anything other than 1 2 3 then it will show a message and the user will have to input again.
        else {
            console.log('Invalid option try again.');
        };
        // this will tell the user to Press enter to go back to continue instead of just seeing nothing.
         prompt('\nPress Enter to continue...');
         // this will clear the console allowing the user to see the Menu clearly.
         console.clear();
    }
}

module.exports = {showGameMenu};