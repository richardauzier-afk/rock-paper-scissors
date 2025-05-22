let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    random_number = Math.random();
    
    if(random_number >= 0.0 && random_number <= 0.2) {
        return "rock";
    }
    else if(random_number > 0.2 && random_number <= 0.5) {
        return "paper";
    }
    else if(random_number > 0.5){
        return "scissors";
    }
}

function getHumanChoice(){
    return prompt("Rock, paper or scissors?");
}

console.log(getComputerChoice());

console.log(getHumanChoice());
