const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const fs = require('fs');

const generateTeamMembers = require('./src/template'); //complete template.js
const { default: inquirer } = require('inquirer');

const teamMembers = [];

function runApp () {
    //create functions with inquirer to prompt user
    function makeTeam () {
        inquirer.prompt(
            [
                {
                    type:"list",
                    message:"What kind of employee would you like to add?",
                    name:"addEmployee",
                    choices: ["Engineer", "Intern", "Manager", "No new employee"]
                }
            ]).then(function (userInput){
                switch (userInput.addEmployee) {
                    case "Engineer": addEngineer(); break;
                    case "Intern": addIntern(); break;
                    case "Manager": addManager(); break;
                }
            })
    }
    function addEngineer () {
        //create inquirer prompt for engineer NAME, ID, EMAIL, GITHUB
        inquirer.prompt(
            [
                {
                    type:"input",
                    name:"engineerName",
                    message:"What is this engineer's name?"
                },
                {
                    type:"input",
                    name:"engineerID",
                    message:"What is this engineer's ID #?"
                },
                {
                    type:"input",
                    name:"engineerEmail",
                    message:"What is this engineer's email address?"
                },
                {
                    type:"input",
                    name:"engineerGithub",
                    message:"What is this engineer's Github link?"
                }
            ]
        ).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
            //push engineer to team members
            teamMembers.push(engineer);
        })
    }

    function addIntern () {
        //create inquirer prompt for intern NAME, ID, EMAIL, SCHOOL
        inquirer.prompt(
            [
                {
                    type:"input",
                    name:"internName",
                    message:"What is this intern's name?"
                },
                {
                    type:"input",
                    name:"internID",
                    message:"What is this intern's ID #?"
                },
                {
                    type:"input",
                    name:"internEmail",
                    message:"What is this intern's email address?"
                },
                {
                    type:"input",
                    name:"internSchool",
                    message:"What school does this intern attend?"
                }
            ]
        ).then(answers => {
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
            teamMembers.push(intern);
        })

    }

    function addManager () {
        //create inquirer prompt for manager NAME, ID, EMAIL, OFFICE NUM
    }

    generateTeamMembers(teamMembers);
}

runApp();