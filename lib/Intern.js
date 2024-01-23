// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

// Define the Intern class, extending the Employee class
class Intern extends Employee {
// Constructor to initialize Intern-specific properties along with common properties from Employee
constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
}

// Export the Intern class
module.exports = Intern;