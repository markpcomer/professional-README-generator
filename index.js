// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown");


// TODO: Create an array of questions for user input
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
            "MIT License",
            "GNU General Public License (GPL)",
            "Apache License 2.0",
            "Mozilla Public License 2.0",
            "Open Software License",
            "The Unlicense",
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

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log("README.md generated")
    });
}


// TODO: Create a function to initialize app
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

