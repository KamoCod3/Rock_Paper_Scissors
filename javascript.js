'use strict';

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


const playGame = function(){
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 0;

const playRound = function(humanChoice, computerChoice)
{
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
    }
    };

    console.log(`ROUND: 1`);
    const humanSelection1 = getHumanChoice();
    const computerSelection1 = getComputerChoice();
    console.log(`Your choice: ${humanSelection1} || Computer's choice: ${computerSelection1}`);
    playRound(humanSelection1, computerSelection1);

    console.log(`ROUND: 2`);
    const humanSelection2 = getHumanChoice();
    const computerSelection2 = getComputerChoice();
    console.log(`Your choice: ${humanSelection2} || Computer's choice: ${computerSelection2}`);
    playRound(humanSelection2, computerSelection2);

    console.log(`ROUND: 3`)
    const humanSelection3 = getHumanChoice();
    const computerSelection3 = getComputerChoice();
    console.log(`Your choice: ${humanSelection3} || Computer's choice: ${computerSelection3}`);
    playRound(humanSelection3, computerSelection3);

    console.log(`ROUND: 4`);
    const humanSelection4 = getHumanChoice();
    const computerSelection4 = getComputerChoice();
    console.log(`Your choice: ${humanSelection4} || Computer's choice: ${computerSelection4}`);
    playRound(humanSelection4, computerSelection4);

    console.log(`ROUND: 5`);
    const humanSelection5 = getHumanChoice();
    const computerSelection5 = getComputerChoice();
    console.log(`Your choice: ${humanSelection5} || Computer's choice: ${computerSelection5}`);
    playRound(humanSelection5, computerSelection5);


    console.log(`Your score: ${humanScore}, Computer's Score: ${computerScore}`);
};

playGame();