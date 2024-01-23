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

}