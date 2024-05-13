
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown");


// Array of questions for the terminal prompts. 
// Answers to be generated in the sampleREADME
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Briefly describe your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "What is the installation process?",
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe usage information.",
    },
    {
        type: "input",
        name: "contributing",
        message: "Describe contribution guidelines for your project.",
    },
    {
        type: "input",
        name: "tests",
        message: "Enter any testing instructions.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please choose a license",
        choices: [
            "MIT_License",
            "GNU_General_Public_License_(GPL)",
            "Apache_License_2.0",
            "Mozilla_Public_License_2.0",
            "Open_Software_License",
            "The_Unlicense",
        ],
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
];


// Writes the README app
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log("README.md generated")
    });
}


// This function initializes the app.
function init() {
    inquirer.prompt(questions)
        .then((data) => 
            writeToFile('sampleREADME.md', generateMarkdown(data)))
            .catch((err) => console.log(err));
}

/*
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            return generateMarkdown(data);  
        })
        .then((newReadMeFile) => {
            writeToFile('README.md', newReadMeFile);
        })
        .catch(err => {
            console.log(err);
        })
}
*/



// Function call to initialize app
init();

