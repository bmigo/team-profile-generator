const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const fs = require('fs');

const generateTeamMembers = require('./src/template'); //complete template.js
const { default: inquirer } = require('inquirer');

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
        //create inquirer prompt for engineer
    }

    function addIntern () {
        //create inquirer prompt for intern
    }

    function addManager () {
        //create inquirer prompt for manager
    }


}