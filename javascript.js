'use strict';

/*
repeat 5 times
    get human choice 
    get computer choice
    compare the choices and return the results
    return the results
end repeat

show final score

FUNCTION getHumanChoice()
    DECLARE choice AS STRING
    DISPLAY "Choose (rock, paper, scissors): "
    INPUT choice
    choice ← TOLOWER(choice)
    RETURN choice
END FUNCTION




*/

// Returns computer's choice randomly
const getComputerChoice = function()
{
    let rock = 1;
    let paper = 2;
    let scissors = 3;
    let randomChoice = Math.floor(Math.random() * 3) + 1;

    switch(randomChoice)
    {
        case rock: return "rock";
        break;

        case paper: return "paper";
        break;

        case scissors: return "scissors";
        break;
    }
};

// Allows the user to make a choice
const getHumanChoice = () => {
    let choice = prompt("Choose (Rock, Paper, Scissors): ");
    return choice.toLowerCase(); // makes the user input consistent
};


/*
const humanSelection2 = getHumanChoice();
const computerSelection2 = getComputerChoice();

const humanSelection3 = getHumanChoice();
const computerSelection3 = getComputerChoice();

const humanSelection4 = getHumanChoice();
const computerSelection4 = getComputerChoice();

const humanSelection5 = getHumanChoice();
const computerSelection5 = getComputerChoice();*/


const playGame = function(){
const playRound = function(humanChoice, computerChoice)
{
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 0;
    // human "rock" choice
    if (humanChoice === "rock" && computerChoice === "paper")
    {
        console.log(`You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`);
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors")
    {
        console.log(`You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`);
        humanScore++;
    }

    // Human "paper" choice
    else if (humanChoice === "paper" && computerChoice === "scissors")
    {
        console.log(`You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`);
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock")
    {
        console.log(`You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`);
        humanScore++;
    }
    
    // Human "scissors" choice
    else if (humanChoice === "scissors" && computerChoice === "rock")
    {
        console.log(`You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`);
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper")
    {
        console.log(`You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`);
        humanScore++;
    } else {
        console.log("It's a tie!");
        humanScore++;
        computerScore++;
    }
    };

    console.log(`ROUND: 1`)
    const humanSelection1 = getHumanChoice();
    const computerSelection1 = getComputerChoice();
    playRound(humanSelection1, computerSelection1);

    console.log(`ROUND: 2`)
    const humanSelection2 = getHumanChoice();
    const computerSelection2 = getComputerChoice();
    playRound(humanSelection2, computerSelection2);


    console.log(`Your score: ${humanScore}, Computer's Score: ${computerScore}`)
};