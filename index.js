#! /usr/bin/env node
console.log("WELCOME TO WORD COUNTER");
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        name: "Sentence",
        type: "input",
        message: "ENTER YOUR SENTENCE TO COUNT THE WORD!"
    }]);
// splitting the sentence using a regular expression to handle multiple spaces 
const word = answer.Sentence.trim().split(/\s+/);
console.log(`YOUR SENTENCE WORD COUNT IS ${word.length}`);
