// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')


// TODO: Create an array of questions for user input
const questions = [
// project title
{
    type: 'input',
    name: 'projectTitle',
    message: 'What is the name of this project?'
},
// description
{
    type: 'input',
    name: 'descrption',
    message:'Give a description of the project'
},

// install instructions
{
    type:'input',
    name:'cloneLink',
    message:'Please Copy and Paste the link to clone this repository'
},

// usage information
{
    type:'input',
    name:'usage',
    message:'Please provide instructions on the usage of this project'
},
// contribution guidelines
{
    type:'input',
    name:'contribution',
    message:'Please Provide the Contribtuion Detail for this Project'
},

// test instructions
{
    type:'input',
    name:'test',
    message:'Please Provide any neccesary test instructions for this project'
},

// list of license with badge
{
    type: 'list',
    name: 'license',
    message: 'Select a license for your GitHub repository:',
    choices: [
      'MIT License',
      'Apache License 2.0',
      'GNU General Public License (GPL)',
      'Creative Commons License',
      'Other'
    ]
  },

// github link
{
    type:'input',
    name:'githubLink',
    message:'Please provide a link to the github repo'
},

// username
{
    type:'input',
    name:'githubUsername',
    message:'Please Provide your github username'
},

// email address
{
    type:'input',
    name:'email',
    message:'Please provide a contact e-mail'
}
];

// table of contents

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Answers written to ${fileName} successfully!`);
      }
    });
  }
  

// TODO: Create a function to initialize app
function init() {inquirer.prompt(questions).then(answers => {
    const data = JSON.stringify(answers);
    writeToFile('ReadMe.md', data);
    console.log(answers);
});
}

// Function call to initialize app
init();

