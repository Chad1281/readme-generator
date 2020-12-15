// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project.',
      },
      {
        type: 'input',
        name: 'install',
        message: 'Provide steps for installation.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide steps for how your project will be used.',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What are the quidelines for contributing to your project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please provide examples of how to test your project.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license will you be using?',
        choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
        filter: function (val) {
          return val.toLowerCase();
        },
      }
];



// function to write README file
function writeToFile(fileName, answers) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

const generateHTML = (answers) =>
`   #${answers.title}
    
    ##Description
    ${answers.description};
    ##How to Install
    ${answers.install};
    ##Utilization
    ${answers.usage};
    ##License
    ${answers.license};
    ##Contribution Guidelines
    ${answers.contribution};
    ##Tests
    ${answers.tests};
    `;

promptUser()
  .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
  .then(() => console.log('Successfully wrote to index.html'))
  .catch((err) => console.error(err));