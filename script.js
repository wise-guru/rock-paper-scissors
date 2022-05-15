let computerScore = 0;
let playerScore = 0;
let roundResult;

//For the computer to randomly return rock, paper, or scissors//
function computerPlay() {
    let random = Math.random();
    if (random <= 0.3333) {
        return ("rock");
    }   else if (random >= 0.6666) {
        return ("paper");
    }   else {
        return ("scissors");
    }
}

//Single round of Rock Paper Scissors//
function playRound (playerSelection, computerSelection) {
    //The round being a tie//
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return roundResult = ("It's a tie!");
    }   
    
    //Player wins the round//
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        playerScore++
        return roundResult = ("You win! Rock beats Scissors.");
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        playerScore++
        return roundResult = ("You win! Paper beats Rock.");
    }
    else if (playerSelection.toLowerCase()=== "scissors" && computerSelection.toLowerCase() === "paper") {
        playerScore++
        return roundResult = ("You win! Scissors beat Paper.");
    }
    
    //Computer wins the round//
    else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors") {
        computerScore++
        return roundResult = ("You lose! Rock beats Scissors.");
    }
    else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") {
        computerScore++
        return roundResult = ("You lose! Paper beats Rock.");
    }
    else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper") {
        computerScore++
        return roundResult = ("You lose! Scissors beat Paper.");
    }
}

/*Loop the game 5 times

function game() {
    

    for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Rock, paper, or scissors?");
    const computerSelection = computerPlay();
    console.log(playRound (playerSelection, computerSelection));
    

        if ( i === 4 && playerScore > computerScore ) {
            console.log("You won! Way to show our robot overlords.");
        }
        else if (i === 4 && computerScore > playerScore) {
            console.log("You lose! The robot overlords have won.");
        }
        else if (i=== 4 && playerScore === computerScore) {
            console.log("")
        }
    }

}  

game();

*/