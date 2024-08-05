// Ambiente

let humanScore = 0;
let computerScore = 0


let PlayAndOptions = document.querySelector(".PlayAndOptions");


let choice = "";

let computerFace = document.querySelector(".computerFace");








function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber);
    let computerChoice = ""
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
    let prompts = document.querySelector(".prompts");
    prompts.textContent = "Select your choice"

    let PlayerChoice = document.querySelector(".playerChoice");

    PlayerChoice.addEventListener("click", (event) => {
        let target = event.target;

        if (target.id === "rock" || target.id === "paper" || target.id === "scissors") {
            choice = target.id;
            prompts.textContent = `Your choice is: ${choice}`;
            playGame();  
        }

    })

};


function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper") {

        humanScore++;

        alert(`You win!, computer choice was: ${computerChoice}, the current score is \nyou: ${humanScore} vs Computer: ${computerScore} `);

    } else if (humanChoice === computerChoice) {

        humanScore++;
        computerScore++;

        alert(`You tie, computer choice was: ${computerChoice}, the current score is \nyou: ${humanScore} vs Computer: ${computerScore} `);

    } else {

        computerScore++;
        alert(`You lose... computer choice was: ${computerChoice}, the current score is \nyou: ${humanScore} vs Computer: ${computerScore} `);
        
    }

    humanChoice = "";
}



function getTheWinner() {

    if (humanScore === computerScore) {
        alert(`You tie, the final score is,\nyou: ${humanScore}\ncomputer: ${computerScore}`)
    } else if (humanScore > computerScore) {
        alert(`You won!!!, the final score is, \nyou: ${humanScore}\ncomputer: ${computerScore}`)
    } else {
        alert(`You lose... the final score is, \nyou: ${humanScore}\ncomputer: ${computerScore}`)
    }

}

function playGame() {

    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    let humanSelection = choice;
    console.log(humanSelection)
    playRound(humanSelection, computerSelection);

    getTheWinner()
    

}


PlayAndOptions.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id) {

        // Play button
        case "play":
            getHumanChoice()
            break;
        // Choice

    }
})

