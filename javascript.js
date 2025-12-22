'use strict';

/*
make a function to generate computer choice "getComputerChoice"
    get a random choice by selecting between rock, paper and scissors 

*/


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
}

const getHumanChoice = function()
{
    let choice = prompt("Choose (Rock, Paper, Scissors): ");
    if (choice !== choice.toLowerCase()) return choice.toLowerCase();
}

console.log(getHumanChoice());