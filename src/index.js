const {showGameMenu} = require('./menu')
//Will start the appication:
const startGame = () => {
    //Clears the terminal to view the menu better:
    console.clear();
    console.log(`Welcome to Marks Rock, Paper, Scissors Game!\n`);
    //Will show menu:
    showGameMenu();
    //when the game stops running it will log this message:
    console.log(`GoodBye!`);
}

startGame()