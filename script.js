let computerScore = 0;
let playerScore = 0;
let roundResult;
let playerSelection;

function playerClick() {
    const rock = document.querySelector('#rock');
    rock.addEventListener('click', function() {
        playRound("rock")
    });

    const paper = document.querySelector('#paper');
    paper.addEventListener('click', function() {
        playRound("paper")
    });

    const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', function() {
        playRound("scissors");
    }); 
}

playerClick();

const scoreBox = document.querySelector('#scoreBox');
    
    const roundResultText = document.createElement('h2');
    roundResultText.classList.add('roundResultText');
    roundResultText.textContent = "Round result: " + roundResult;   
    scoreBox.appendChild(roundResultText);

    const score = document.createElement('h1')
    score.classList.add('score');
    score.textContent = ('Score');
    scoreBox.appendChild(score);

    const compScore = document.createElement('p');
    compScore.classList.add('compScore');
    compScore.textContent = 'Computer score: ' + computerScore;
    scoreBox.appendChild(compScore);

    const userScore = document.createElement('p');
    userScore.classList.add('userScore');
    userScore.textContent = 'Player score: ' + playerScore;
    scoreBox.appendChild(userScore);


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
function playRound (playerSelection) {
let computerSelection = computerPlay();

    //The round being a tie//
    if (playerSelection === computerSelection) {
        return roundResult = ("It's a tie!");
    }   
    
    //Player wins the round//
    else if ((playerSelection === "rock" && computerSelection  === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            playerScore+= 1;
            roundResult = ("You win! " + playerSelection + "beats " + computerSelection + " .");

            if (playerScore === 5) {
                result = ("You won! Way to show our robot overlords.");
            }
        }  
    
    //Computer wins the round//
    else if ((computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")) {
        computerScore += 1;
        roundResult = ("You lose! " + playerSelection + "beats " + computerSelection + " .");

        if (computerScore === 5) {
            result = ("You lose! The robot overlords have won.");
        }
    }
}

playRound(playerSelection);

