#! /usr/bin/env node

 
import inquirer from "inquirer";
import chalk from "chalk"


console.log(chalk.yellowBright.bold(`\n\t Welcome to Word-Cli-Counter \t\n`));


const answer : {
    sentence: string 
} = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:chalk.blue("Enter your sentence to count:")

    }
])

let word = answer.sentence.trim().split(" ")
console.log(word);
console.log(chalk.cyan(`Word count: ${chalk.yellow (word.length)}`));
