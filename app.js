const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const userScoreDisplay = document.getElementById('user-score')
const computerScoreDisplay = document.getElementById('computer-score')
const restartButton = document.getElementById('Restart')
let userScore = 0
let computerScore = 0
let userChoice = ''
let result = ''

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)

    if(randomNumber === 0) {
        computerChoice = 'Rock'
    }
    if(randomNumber === 1) {
        computerChoice = 'Scissors'
    }
    if(randomNumber === 2) {
        computerChoice = 'Paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice === userChoice) {
        result = "It's a draw!"
    }
    if(computerChoice === "Rock" && userChoice === "Paper") {
        result = "You win!"
        userScore += 1
        userScoreDisplay.innerHTML = userScore
    }
    if(computerChoice === "Rock" && userChoice === "Scissors") {
        result = "You lose!"
        computerScore += 1
        computerScoreDisplay.innerHTML = computerScore
    }
    if(computerChoice === "Paper" && userChoice === "Scissors") {
        result = "You win!"
        userScore += 1
        userScoreDisplay.innerHTML = userScore
    }
    if(computerChoice === "Paper" && userChoice === "Rock") {
        result = "You lose!"
        computerScore += 1
        computerScoreDisplay.innerHTML = computerScore
    }
    if(computerChoice === "Scissors" && userChoice === "Rock") {
        result = "You win!"
        userScore += 1
        userScoreDisplay.innerHTML = userScore
    }
    if(computerChoice === "Scissors" && userChoice === "Paper") {
        result = "You lose!"
        computerScore += 1
        computerScoreDisplay.innerHTML = computerScore
    }
    resultDisplay.innerHTML = result
}

restartButton.addEventListener('click', () => {
    location.reload();
})