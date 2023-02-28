// Creates a random selection for the computer
function getComputerChoice (){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let randomObject;
    if (randomNumber == 1){
        randomObject = "rock";
    }
    else if (randomNumber == 2){
        randomObject = "scissors";
    }
    else {
        randomObject = "paper";
    }
    return randomObject;
}

// DOM Selectors
let submit = document.querySelector('#submit');
let choicePrint = document.querySelector('#choicePrint');
let playerOptions = document.querySelector('#playerOptions');
let computerScoreText = document.querySelector('#computerScoreText');
let playerScoreText = document.querySelector('#playerScoreText');
let scoreTieText = document.querySelector('#scoreTieText')
let winnerDeclaration = document.querySelector('#winnerDeclaration')
let restartGame = document.querySelector('#restartGame')
let button = document.getElementsByClassName('button');
computerScoreText.textContent = 0;
playerScoreText.textContent = 0;
scoreTieText.textContent = 0;
restartGame.style.display = "none";


//Score board initialisation
let computerScore = 0;
let playerScore = 0;
let scoreTie = 0;

// Register players selection
let playerSelection;
playerOptions.addEventListener('click', () => {
    winnerDeclaration.textContent = "";
    choicePrint.textContent = event.target.textContent;
    playerSelection = choicePrint.textContent;
    return playerSelection;
});

//Record the score based on selection
function scoreBoard(){
    if (result == "You win"){
        playerScoreText.textContent = playerScore;
    }
    else if (result == "Computer wins") {
        computerScoreText.textContent = computerScore;
    }
    else{
        scoreTieText.textContent = scoreTie;  
    }
}

//Play the game when player clicks submits
submit.addEventListener('click', () => {
    singleRound();
    scoreBoard();

    //When there's a count of 5
    if (playerScore + computerScore + scoreTie == 5){
        document.getElementById("submit").disabled = true;
        choicePrint.textContent = ""
        for (let i = 0; i < button.length; i++) {
            button[i].disabled = true;
            button[i].style.borderColor = "#555555";
            button[i].style.color = "#555555";
            button[i].style.cursor = "default";
        }
        

        if (computerScore > (playerScore || scoreTie)){
            winnerDeclaration.textContent = "Computer wins!";
            restartGame.style.display = "block";
        }
        else if (playerScore > (computerScore || scoreTie)){
            winnerDeclaration.textContent = "You win!";
            restartGame.style.display = "initial";
        }
        else if (scoreTie > (playerScore || computerScore)){
            winnerDeclaration.textContent = "it's a tie!";
            restartGame.style.display = "block";
        }
        else {
            winnerDeclaration.textContent = "Scores are tied";
            restartGame.style.display = "block"
        }
        submit.style.backgroundColor = "#555555";
        submit.style.cursor = "default"; 
    }
});

//Function to reset the game after game of 5
function resetGame () {
        computerScore = 0;
        playerScore = 0;
        scoreTie = 0;
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
        scoreTieText.textContent = scoreTie;
    restartGame.style.display = "none";
    document.getElementById("submit").disabled = false;
    for (let i = 0; i < button.length; i++) {
            button[i].disabled = false;
            button[i].style.borderColor = "";
            button[i].style.color = "";
            button[i].style.cursor = "pointer";
        }
        submit.style.backgroundColor = "";
        submit.style.cursor = "pointer"; 
}
restartGame.addEventListener('click', resetGame);


// Plays a single round with the computer and player
let computerSelection;
let result;
function singleRound(playerChoice, computerSelection){
    computerSelection = getComputerChoice();
    playerChoice = playerSelection;

    // If player selects cancel
    if (playerSelection == null) {
        return;
    }

    // If it is a tie
    else if (playerSelection == computerSelection){
        result = "It's a tie"
        scoreTie += 1;
    }

    //Rock Comparisons
    else if (playerSelection == "rock" && computerSelection == "paper"){
        result = "Computer wins";
        computerScore += 1;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        result = "You win";
        playerScore += 1;
    }

    //Paper Comparisons
    else if (playerSelection == "paper" && computerSelection == "rock"){
        result = "You win";
        playerScore += 1;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        result = "Computer wins";
        computerScore += 1;
    }

    //Scissor Comparisons
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        result = "Computer wins";
        computerScore += 1;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        result = "You win";
        playerScore += 1;
    }

    else{
        result = "Something went wrong. Please try again or refresh.";
    }
    console.log(result);
    return result;
}