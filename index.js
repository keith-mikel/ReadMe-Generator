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
    name: 'description',
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
function init() {
  inquirer.prompt(questions).then(answers => {
    const formattedData = formatDataToMarkdown(answers);
    writeToFile('ReadMe.md', formattedData);
    console.log(answers);
  });
}

function formatDataToMarkdown(answers) {
  let content = '';

  // Add title
  content += `# ${answers.projectTitle}\n\n`;

  // Add table of contents
  content += `
  ## Table of Contents
  -[Description](#desciption)\n
  -[Installation](#installation)\n
  -[Usage](#usage)\n
  -[Contribution](#contribution)\n
  -[Test Instructions](#test)\n
  -[License](#license)\n
  -[Link to Github](#githubLink)\n
  -[Contact Info](#contact)\n
  \n\n`

  // Add Description
  content += `<a name="description"></a>\n`;
  content += `## Description\n ${answers.description}\n\n`;

  //add clone link
  content += `<a name="installation"></a>\n`;
  content += `## Installation\n 
  Use SSH github link in order to install this project ssh to install ${answers.projectTitle}\n
   \`\`\`bash
   ${answers.cloneLink} 
   \`\`\`\n\n`;

  //add usage 
  content += `<a name="usage"></a>\n`;
  content += `## Usage\n ${answers.usage}\n\n`

  //add contribution
  content += `<a name="contribution"></a>\n`;
  content += `## Contribution\n ${answers.contribution}\n\n`

  //add test instrutions
  content += `<a name="test"></a>\n`;
  content += `## Test Instructions \n ${answers.test}\n\n`

  //add license
  content += `<a name="license"></a>\n`;
  content += `## License \n`
  content += getLicenseBadge(answers.license)

  //add github link
  content += `\n\n<a name="githubLink"></a>\n`;
  content += `## Github Link \n\n ${answers.githubLink}\n\n`

  //add github username
  content += `<a name="contact"></a>\n`;
  content += `## Contact Information \n
  For additonal information please check out my github ${answers.githubUsername}\n
  or reach me by email at ${answers.email}`

  return content;
};


//fucntion for license badge
function getLicenseBadge(license) {
  switch (license) {
    case 'MIT License':
      return '![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)';
    case 'Apache License 2.0':
      return '![Apache License 2.0](https://img.shields.io/badge/license-Apache%202.0-blue.svg)';
    case 'GNU General Public License (GPL)':
      return '![GNU GPL](https://img.shields.io/badge/license-GPL-blue.svg)';
    case 'Creative Commons License':
      return '![Creative Commons License](https://img.shields.io/badge/license-Creative%20Commons-blue.svg)';
    default:
      return '';
  }
}

// Function call to initialize app
init();

