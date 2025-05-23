function getComputerChoice(){
    let random_number = Math.random();
    
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
    let answer = prompt("Rock, paper or scissors?");
    return answer.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    // return 0 is a tie
    // return 1 is a victory for human
    // return 2 is a victory for computer
    
    switch(humanChoice) {
        case("rock"):
            if(computerChoice == "rock"){
                console.log("Tie");
                return 2;
            }
            else if(computerChoice == "paper"){
                console.log("You lose. Paper beats rock");
                return 1;
                          
            }
            else if(computerChoice == "scissors"){
                console.log("You win. Rock beats scissors");
                return 0;
                
            }
            break;
        case("paper"):
            if(computerChoice == "rock"){
                console.log("You win. Paper beats rock");
                return 0;
                
            }
            else if(computerChoice == "paper"){
                console.log("Tie");
                return 2;
                
                
            }
            else if(computerChoice == "scissors"){
                console.log("Ouch, you lose. Scissors beats papers");
                return 1;
                
            }
            break;
        case("scissors"):
            if(computerChoice == "scissors"){
                console.log("Tie");
                return 2;
                
                
            }
            else if(computerChoice == "rock"){
                console.log("You lose. Rock beats scissors");
                return 1;
                
            }
            else if(computerChoice == "paper"){
                console.log("You win. Scissors beats paper");
                return 0;
                
            }
            break;

    }

}



function playGame() {
    let human_score = 0;
    let computer_score = 0;
    for (let i=0; i<5; i++) {
        console.log(`Round ${i}`);
        output = playRound(prompt("rock, papers or scissors?"), getComputerChoice());
        console.log(output);

        // human won
        if (output == 0) {
            human_score++;
        }
        // comp won
        else if (output == 1) {
            computer_score++;
        }
    
        if (human_score > computer_score) {
            console.log("Human Player Wins!");
        }
        else if (computer_score > human_score) {
            console.log("Computer Wins!");
        }
        else {
            console.log("Tie!");
        }
    }
}


playGame();



