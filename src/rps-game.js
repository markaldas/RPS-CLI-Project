//object to hold the stats
const stats = {
    wins: 0,
    losses: 0,
    ties: 0
};
//function to show the stats of a user.
const gameStats = () => {
    const totalGames = stats.wins + stats.losses + stats.ties;
    //Checks if total games is 0 if it is it will log a message to play a game.
if (totalGames === 0) {
    console.log(`Silly goose there are no stats to show. Play a game to get some stats!`)
    return };
// equation to give us the winRate:
const winRate = Math.round((stats.wins / totalGames) * 100);

// will log the game stats:
console.log(`Games Won: ${stats.wins}`);
console.log(`Games Lost: ${stats.losses}`);
console.log(`Games Tied: ${stats.ties}`);
console.log(`Total Games: ${totalGames}`);
console.log(`Win Rate: ${winRate}%`);
};

// gameStats()

//function to play the game:
const rpsGame = (userInput) => {
    const rps = ['rock', 'paper', 'scissors']
    const randomNum = Math.round(Math.random() * 2);
    // if statement will check if UserInput and the random generation are equal to each other, making it a tie
    if (rps[randomNum] === 'rock' && userInput === 'rock' || rps[randomNum] === 'paper' && userInput === 'paper' || rps[randomNum] === 'scissors' && userInput === 'scissors') {
        console.log(`Computer chose ${rps[randomNum]}`, `\n It's a tie!` );
        stats.ties += 1;
        return
        
    } else if (rps[randomNum] === 'rock' && userInput === 'scissors' || rps[randomNum] === 'paper' && userInput === 'rock' || rps[randomNum] === 'scissors' && userInput === 'paper'
    ) { // this else if will check if UserInput lost
        console.log(`Computer chose ${rps[randomNum]} \nYou have lost!`);
        stats.losses += 1;
    } else if (rps[randomNum] === 'rock' && userInput === 'paper' || rps[randomNum] === 'paper' && userInput === 'scissors' || rps[randomNum] === 'scissors' && userInput === 'rock') {
        console.log(`Computer chose ${rps[randomNum]} \nYou won!`);
        stats.wins += 1;
        // this will check if user won.
    }
}
// rpsGame('paper')



module.exports = {rpsGame, gameStats}