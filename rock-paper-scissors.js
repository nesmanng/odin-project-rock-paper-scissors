function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber === 0 ? 'rock' : randomNumber === 1 ? 'paper' : 'scissors';
}

function getHumanChoice() {
    let humanChoice = prompt('Enter your choice: rock, paper, or scissors');
    let result;
    if (humanChoice.toLowerCase() === 'rock') {
        result = 0;
    } else if (humanChoice.toLowerCase() === 'paper') {
        result = 1;
    } else if (humanChoice.toLowerCase() === 'scissors') {
        result = 2;
    }

    return result;
}

function playRound() {
    let humanScore;
    let computerScore;
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        humanScore = 0;
        computerScore = 0;
        return 'It\'s a tie!';
    } else if (computerChoice - humanChoice === 1 || computerChoice - humanChoice === -2) {
        humanScore = 0;
        computerScore = 1;
        return 'Computer wins!';
    } else {
        humanScore = 1;
        computerScore = 0;
        return 'Human wins!';
    }
}

function playGame() {
    let humanCumScore = 0;
    let computerCumScore = 0;
    let resultsDiv = document.getElementById('results');
    for (let i = 0; i < 5; i++) {
        const result = playRound();
        let resultText = document.createElement('p');

        // Display the result of each round, formatted as 'Round x: result'
        resultText.textContent = 'Round ' + (i + 1) + ': ' + result;
        resultsDiv.appendChild(resultText);
        if (result === 'Human wins!') {
            humanCumScore++;
        } else if (result === 'Computer wins!') {
            computerCumScore++;
        }
    }
    let finalResult = humanCumScore > computerCumScore ? 'Human wins the game!' : 'Computer wins the game!';
    let finalResultText = document.createElement('p');
    finalResultText.textContent = finalResult;
    resultsDiv.appendChild(finalResultText);
}

playGame();
