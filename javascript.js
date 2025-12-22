'use strict';

/*
make a function to generate computer choice "getComputerChoice"
    get a random choice by selecting between rock, paper and scissors 

*/

let humanScore = 0;
let computerScore = 0;

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
    if (choice !== choice.toLowerCase()) return choice.toLowerCase(); // makes the user input consistent
};

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
        humanScore++;
        computerScore++;
    }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

const playGame = callBack => {
    playRound(humanSelection, computerSelection);
}