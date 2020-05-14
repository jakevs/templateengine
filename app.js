const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const teamMembers = [];
const idArray = [];

function menu() {
  function createManager() {
    console.log("Please Build Your Team!");
    inquirer
      .prompt([
        {
          name: "employeeName",
          message: "Please enter employee name: ",
          validate: validateName,
        },
        {
          name: "employeeId",
          message: "Please enter employee id: ",
          validate: validateId,
        },
        {
          name: "employeeEmail",
          message: "Please enter employee email: ",
          default: "mail@mail.com",
          validate: validateEmail,
        },
        {
          type: "list",
          name: "employeeType",
          message: "Who would you like to enter first?",
          choices: ["Manager", "Engineer", "Intern"],
        },
        {
          name: "officeNumber",
          message: "Please enter office phone number",
          when: function (answers) {
            return answers["employeeType"] === "Manager";
          },
        },

        {
          name: "gitHub",
          message: "Please enter gitHub account id",
          when: function (answers) {
            return answers["employeeType"] === "Engineer";
          },
        },
        {
          name: "school",
          message: "Please enter school",
          when: function (answers) {
            return answers["employeeType"] === "Intern";
          },
        },
        {
          type: "confirm",
          name: "again",
          message: "Would you like to enter more employees?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        //createTeam() - this function is going to ask who to create next and then either create intern or engineer
      });
  }

  function createTeam() {
    inquirer
      .prompt([
        {}, //ask who would you like to create with choices engineer intern or none
      ])
      .then((choice) => {
        switch (key) {
          case value:
            break;

          default:
            break;
        }
      });
  }

  function buildTeam() {
    createManager();
  }
}
menu();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
