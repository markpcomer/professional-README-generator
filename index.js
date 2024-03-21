// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { writeFile } = require('fs').promises;

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
        message: "Please briefly describe your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "What are your project's installation instructions?",
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
        type: "list",
        name: "license",
        message: "Please choose a license",
        choices: [
            "Microsoft Public License",
            "MIT",
            "Mozilla Public License 2.0",
            "Open Software License",
            "The Unilicense",
        ],
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
    {   type: "list",
        name: "contact",
        message: "How else would you like to be contacted?",
        choices: [
            "phone",
            "slack",
            "snail mail"
        ],
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

/*

*/