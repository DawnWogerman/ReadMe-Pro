// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const { title } = require('process');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project: (Required)',
        validate: projectTitleInput => {
            if(projectTitleInput){
                return true;
            } else {
                console.log('Please enter a title for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projDesc',
        message: 'Please enter a description of your project: (Required)',
        validate: projDescInput => {
            if(projDescInput){
                return true;
            } else {
                console.log('A description of your project is required!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please briefly explain what your project does: (Required)',
        validate: usageInput => {
            if(usageInput){
                return true;
            } else {
                console.log('Please enter an explanation of what your project does!')
                return false;
            }
        }
    },
      
    {
        type: 'input',
        name: 'why',
        message: 'Please explain why you created this project: (Required)',
        validate: whyInput => {
            if(whyInput){
                return true;
            } else {
                console.log('Please enter why your created this project!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'problemSolved',
        message: 'Please enter what problem this application/ project can help solve: (Required)',
        validate: probSolveInput => {
            if(probSolveInput) {
                return true;
            } else {
                console.log('Please enter what problem this project solves!');
                return false;
            }
        }
    },

    {
        type: 'list',
        name: 'licenseList',
        message: 'Please choose the license used for this project:',
        choices: ['agpl', 'apache', 'mit', 'none']

    },

    {
        type: 'input',
        name: 'gitHubUserName',
        message: 'Please enter your GitHub username: (Required)',
        validate: gitHubNameInput => {
            if(gitHubNameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err) {
            return console.log(err);
        }
        console.log('Success!');
    });
};

// TODO: Create a function to initialize app
function init(){
    inquirer.prompt(questions)
        .then(function(data){
            writeToFile("README.md", generateMarkdown(data));
        });
    
};

// Function call to initialize app
init();