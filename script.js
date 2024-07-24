
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
