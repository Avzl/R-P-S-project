// Ambiente

let humanScore = 0;
let computerScore = 0
let gamesToPlay = 5;
let playedGames = 1;
let choice = "";
let PlayAndOptions = document.querySelector(".PlayAndOptions");
let computerFace = document.querySelector(".computerFace");
let PlayerChoice = document.querySelector(".playerChoice");
PlayerChoice.style.display = "none"
let prompts = document.querySelector(".prompts");
let runningScore = document.querySelector(".RunningScore")

PlayerChoice.addEventListener("click", (event) => {
    let target = event.target;

    if (target.id === "rock" || target.id === "paper" || target.id === "scissors") {
        choice = target.id;
        prompts.textContent = `Your choice is: ${choice}`;
        playGame();  
    }

})

function restartGame() {
    PlayAndOptions.style.display= "none"
    humanScore = 0;
    computerScore = 0;
    refreshScore("0","0")
    playedGames = 1;
}

PlayAndOptions.addEventListener("click", (event) => {
    let target = event.target;
    let gameMode = document.querySelector(".gameMode")

    switch(target.id) {

        // Play button
        case "play":
            restartGame()
            getHumanChoice()
            break;
        //Game mode
        case "bestOfThree":
            gamesToPlay = 3;
            gameMode.textContent = "Best of Three"
            break
        case "bestOfFive":
            gamesToPlay = 5;
            gameMode.textContent = "Best of Five"
            break


    }
})


function refreshScore (humanScore, computerScore) {
    runningScore.textContent = `${humanScore}-${computerScore}`
}


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber);
    if (randomNumber < 33) {
        computerFace.textContent = "ROCK";
        return "rock";
    } else if (randomNumber < 66){
        computerFace.textContent = "PAPER";
        return "paper";
        
    } else {
        computerFace.textContent = "SCISR";
        return "scissors";
    }

}



function getHumanChoice() {
    prompts.textContent = "Select your choice"

    PlayerChoice.style.display = "flex"

};


function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper") {

        humanScore++;

        prompts.textContent = "A point for you!"

    } else if (humanChoice === computerChoice) {

        humanScore++;
        computerScore++;

        prompts.textContent = "you tied"

    } else {

        computerScore++;
        prompts.textContent = "A point for the computer"
        
    }

    humanChoice = "";
}



function getTheWinner() {

    if (humanScore === computerScore) {
        prompts.textContent = "You tied! play again to beat the computer!"
        computerFace.textContent = "OwO"
    } else if (humanScore > computerScore) {
        prompts.textContent = "You won! well played!"
        computerFace.textContent = "T_T"
    } else {
        prompts.textContent = "Oh nono computer beat you! Play again to defeat it "
        computerFace.textContent = "UwU"
    }

}

function playGame() {
    if (playedGames === gamesToPlay) {
        PlayAndOptions.style.display = "flex";
        PlayerChoice.style.display = "none";
        let playBtn = document.querySelector("#play")
        playBtn.textContent = "Play Again"
        getTheWinner()

    } else {
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        let humanSelection = choice;
        console.log(humanSelection)
        playRound(humanSelection, computerSelection);
        refreshScore(humanScore, computerScore)
        playedGames++;
    }
    
    
    

}




