function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber);
    if (randomNumber < 33) {
        return "rock";
    } else if (randomNumber < 66){
        return "paper";
    } else {
        return "scissors";
    }

}

function getHumanChoice() {
    // Prompt the user for input
    let choice = prompt("Enter your choice: Rock, Paper, or Scissors").toLowerCase();

    // Validate user input
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        choice = prompt("Invalid choice! Please enter either Rock, Paper, or Scissors").toLowerCase();
    }
    
    // Return the validated choice
    return choice;
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
}

let humanScore = 0;
let computerScore = 0

function getTheWinner() {

    if (humanScore === computerScore) {
        alert(`You tie, the final score is,\nyou: ${humanScore}\ncomputer: ${computerScore}`)
    } else if (humanScore > computerScore) {
        alert(`You won!!!, the final score is, \nyou: ${humanScore}\ncomputer: ${computerScore}`)
    } else {
        alert(`You lose... the final score is, \nyou: ${humanScore}\ncomputer: ${computerScore}`)
    }

}

// function playGame() {

//     for (let i = 0; i < 5; i++) {

//         let computerSelection = getComputerChoice();
//         console.log(computerSelection);
//         let humanSelection = getHumanChoice();
//         console.log(humanSelection)
//         playRound(humanSelection, computerSelection);

//     }

//     getTheWinner()
    

// }

// playGame();