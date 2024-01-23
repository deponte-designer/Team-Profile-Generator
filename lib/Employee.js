// TODO: Write code to define and export the Employee class
// Define the Employee class, which serves as the parent class for Manager, Engineer, and Intern
class Employee {
    // Constructor to initialize the common properties for all employees
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

    
}
  
// Export the Employee class to make it available for other modules
module.exports = Employee;