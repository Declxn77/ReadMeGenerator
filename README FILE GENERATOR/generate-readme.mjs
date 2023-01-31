import inquirer from 'inquirer';
import fs from 'fs';

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter your project title:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions for your project:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information for your project:'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines for your project:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions for your project:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: [
      'MIT',
      'Apache 2.0',
      'GPL 3.0',
      'BSD 3',
      'None'
    ]
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'
  }
];

inquirer.prompt(questions).then(answers => {
  const readme = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
License: ${answers.license}

This project is covered under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
Feel free to contact me with any questions at [${answers.email}](mailto:${answers.email}). You can also check out my GitHub profile at [${answers.username}](https://github.com/${answers.username}).
`;
  fs.writeFile('README.md', readme, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md generated successfully!');
    }
  });
});
