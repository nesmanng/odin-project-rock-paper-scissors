document.getElementById('rock').addEventListener('click', function(){
    playGame('rock');
}
);

document.getElementById('paper').addEventListener('click', function(){
    playGame('paper');
}
);

document.getElementById('scissors').addEventListener('click', function(){
    playGame('scissors');
}
);

const restartButton = document.getElementById('restart');

restartButton.addEventListener('click', function(){
    restartGame();
}
);

let humanCumScore = 0;
let computerCumScore = 0;
let resultsDiv = document.getElementById('results');

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber === 0 ? 'rock' : randomNumber === 1 ? 'paper' : 'scissors';
}

function playRound(humanSelection) {
    const humanChoice = humanSelection;
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if ((computerChoice === 'rock' && humanChoice === 'scissors') ||
               (computerChoice === 'paper' && humanChoice === 'rock') ||
               (computerChoice === 'scissors' && humanChoice === 'paper')) {
        return 'Computer wins!';
    } else {
        return 'Human wins!';
    }
};


function playGame(humanChoice) {
    updateScores(humanChoice);
};

/* Update score after each round and display cumulative scores for each player */
function updateScores(humanChoice) {
    const result = playRound(humanChoice);
    let resultText = document.createElement('p');
    resultText.textContent = result;
    resultsDiv.appendChild(resultText);

    if (result === 'Human wins!') {
        humanCumScore++;
    } else if (result === 'Computer wins!') {
        computerCumScore++;
    } else {
        humanCumScore += 0;
        computerCumScore += 0;
    }

    displayCumScore();
    determineWinner();
};

function displayCumScore () {
    let scoreText = document.createElement('p');
    scoreText.textContent = 'Human: ' + humanCumScore + ', Computer: ' + computerCumScore;
    resultsDiv.appendChild(scoreText);
};

function determineWinner () {
    if (humanCumScore === 5 || computerCumScore === 5) {
        let winner = humanCumScore > computerCumScore ? 'Human' : 'Computer';
        let winnerText = document.createElement('p');
        winnerText.textContent = winner + ' wins the game!';
        resultsDiv.appendChild(winnerText);
        restartButton.style.display = 'block';
    }
};

function restartGame() {
    humanCumScore = 0;
    computerCumScore = 0;
    resultsDiv.innerHTML = ''; 
    restartButton.style.display = 'none'; 
};