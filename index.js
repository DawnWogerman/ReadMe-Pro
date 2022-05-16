// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const { title } = require('process');

// TODO: Create an array of questions for user input
const questions = [
//project title and description start
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
        name: 'description',
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
//Title and description end
//general information start
    {
        type: 'input',
        name: 'usage',
        message: 'Please briefly explain how to use this application: (Required)',
        validate: usageInput => {
            if(usageInput){
                return true;
            } else {
                console.log('Please enter an explanation how to use your application!')
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
                console.log('Please enter why you created this project!');
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
//general information end

//license information
    {
        type: 'list',
        name: 'licenseList',
        message: 'Please choose the license used for this project: (Required)',
        choices: ['apache', 'mit', 'gnu'],
        validate: licenseListInput => {
            if(licenseListInput){
                return true;
            } else {
                console.log('You must pick a license');
                return false
            }
        }

    },

//installation instructions
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter instructions on how to install this application:',
    },
//user information (Questions)
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

    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address: (Required)',
        validate: emailInput => {
            if(emailInput){
                return true;
            } else {
                console.log('Email address is required!');
                return false;
            }
        }
    }


];

// function to write the read-me file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err) {
            return console.log(err);
        }
        console.log('Success!');
    });
};

// function to initialize the application
function init(){
    inquirer.prompt(questions)
        .then(function(data){
            writeToFile("./dist/README.md", generateMarkdown(data));
        });
    
};

// Function call to initialize app
init();