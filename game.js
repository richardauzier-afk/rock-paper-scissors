function getComputerChoice(){
    random_number = Math.random();
    console.log(random_number);

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

console.log(getComputerChoice());