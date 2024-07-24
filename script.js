
// declare a function called getComputerChoice that randomly returns one of the following string values: “rock”, “paper” or “scissors”

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
// test if the getComputerChoice returns my expected values
console.log(getComputerChoice());

// Step 3: Write the logic to get the human choice

// Function to get human choice using prompt
function getHumanChoice() {
    // Prompt the user for input
    let choice = prompt("Enter your choice: Rock, Paper, or Scissors").toLowerCase();

    // Validate user input
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        choice = prompt("Invalid choice! Please enter either Rock, Paper, or Scissors").toLowerCase();
    }
    
    // Return the validated choice
    return choice;
}

// Testing the function
//console.log(getHumanChoice());

//declare humanScore and computerScore variables and initialize them in 0

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    switch(humanChoice) {
        case "paper": 

            if (computerChoice === "rock") {
                humanScore++;
                console.log(`You win!, computer choice was: ${computerChoice}, the current score is \nyou: ${humanScore} vs Computer: ${computerScore} `)
            } else if (computerChoice === "paper") {
                console.log(`You tie, computer choice was: ${computerChoice}, the current score is \nyou: ${humanScore} vs Computer: ${computerScore} `)
            } else if (computerChoice === "scissors") {
                computerScore++;
                console.log(`You lose... computer choice was: ${computerChoice}, the current score is \nyou: ${humanScore} vs Computer: ${computerScore} `)
            }
            break;

        case "rock":
            if (computerChoice === "scissors") {
                humanScore++;
                console.log(`You win!, computer choice was: ${computerChoice}, the current score is \nyou: ${humanScore} vs Computer: ${computerScore} `)
            } else if (computerChoice === "rock") {
                console.log(`You tie, computer choice was: ${computerChoice}, the current score is \nyou: ${humanScore} vs Computer: ${computerScore} `)
            } else if (computerChoice === "paper") {
                computerScore++;
                console.log(`You lose... computer choice was: ${computerChoice}, the current score is \nyou: ${humanScore} vs Computer: ${computerScore} `)
            }
            break;

            case "scissors":
                if (computerChoice === "paper") {
                    humanScore++;
                    console.log(`You win!, computer choice was: ${computerChoice}, the current score is \nyou: ${humanScore} vs Computer: ${computerScore} `)
                } else if (computerChoice === "scissors") {
                    console.log(`You tie, computer choice was: ${computerChoice}, the current score is \nyou: ${humanScore} vs Computer: ${computerScore} `)
                } else if (computerChoice === "rock") {
                    computerScore++;
                    console.log(`You lose... computer choice was: ${computerChoice}, the current score is \nyou: ${humanScore} vs Computer: ${computerScore} `)
                }
                break;



    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);