const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Array to store team members
const teamMembers = [];

// Function to prompt for manager details
function promptManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter the team manager's name:",
        },
        {
          type: "input",
          name: "id",
          message: "Enter the team manager's employee ID:",
        },
        {
          type: "input",
          name: "email",
          message: "Enter the team manager's email address:",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Enter the team manager's office number:",
        },
      ])
      .then((answers) => {
         // Create a Manager object and add it to the teamMembers array
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
        // Move to the next step in the menu
        promptMenu();
    });
}


// Function to prompt for engineer details
function promptEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter the engineer's name:",
        },
        {
          type: "input",
          name: "id",
          message: "Enter the engineer's employee ID:",
        },
        {
          type: "input",
          name: "email",
          message: "Enter the engineer's email address:",
        },
        {
          type: "input",
          name: "github",
          message: "Enter the engineer's GitHub username:",
        },
      ])
      .then((answers) => {
        // Create an Engineer object and add it to the teamMembers array
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.github
        );
        teamMembers.push(engineer);
        // Move to the next step in the menu
        promptMenu();
      });
  }
  
  // Function to prompt for intern details
function promptIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter the intern's name:",
        },
        {
          type: "input",
          name: "id",
          message: "Enter the intern's employee ID:",
        },
        {
          type: "input",
          name: "email",
          message: "Enter the intern's email address:",
        },
        {
          type: "input",
          name: "school",
          message: "Enter the intern's school:",
        },
      ])