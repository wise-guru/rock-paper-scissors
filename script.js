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
    roundResultText.textContent = "Pick rock, paper, or scissors.";   
    scoreBox.appendChild(roundResultText);

    const score = document.createElement('h1')
    score.classList.add('score');
    score.textContent = ('Score');
    scoreBox.appendChild(score);

    const compScoreText = document.createElement('p');
    compScoreText.classList.add('compScoreText');
    compScoreText.textContent = `Computer score: ${computerScore}`;
    scoreBox.appendChild(compScoreText);



    const userScoreText = document.createElement('p');
    userScoreText.classList.add('userScoreText');
    userScoreText.textContent = `Player score: ${playerScore}`;
    scoreBox.appendChild(userScoreText);


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
        return roundResultText.textContent = ("It's a tie!");
    }   
    
    //Player wins the round//
    else if ((playerSelection === "rock" && computerSelection  === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            playerScore+= 1;
            roundResultText.textContent = ("You win! " + playerSelection + " beats " + computerSelection + ".");
            userScoreText.textContent = `Player score: ${playerScore}`;
            
            if (playerScore === 5) {
                roundResultText.textContent = ("You won! Way to show our robot overlords. Reload the page to play again.");
                disableButtons();
                refresh();
            }
        }  
    
    //Computer wins the round//
    else if ((computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")) {
        computerScore += 1;
        roundResult = ("You lose! " + playerSelection + "beats " + computerSelection + " .");
        compScoreText.textContent = `Computer score: ${computerScore}`;

        if (computerScore === 5) {
            result = ("You lose! The robot overlords have won. Reload the page to play again.");
            disableButtons();
            refresh();
        }
    }
}

playRound(playerSelection);

function disableButtons() {
    document.querySelector('#rock').disabled = true;
    document.querySelector('#paper').disabled = true;
    document.querySelector('#scissors').disabled = true;

}

function refresh() {
    const refreshDiv = document.querySelector('#refresh');

    const refreshBtn = document.createElement('button')
    refreshBtn.addEventListener ('click', function() {
        window.parent.location = window.parent.location.href;
    })
    refreshBtn.classList.add('refreshBtn');
    refreshBtn.textContent = "Play again";
    refreshDiv.appendChild(refreshBtn);
    
}