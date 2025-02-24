// Task 1: Creating an Employee Class
// Define a class Employee
class Employee {
    // initialize the properties of the Employee class
    constructor(name, id, department, salary) {
      this.name = name; // Assign the name property
      this.id = id; // Assign the id property
      this.department = department; // Assign the department property
      this.salary = salary; // Assign the salary property
    }
  
    // Method to return the employee's details as a formatted string
    getDetails() {
      return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }
  
    // Method to calculate and return the employee's annual salary (salary * 12)
    calculateAnnualSalary() {
      return this.salary * 12; // Return the annual salary
    }
  }
  
  // Employee information
  const emp1 = new Employee("John Doe", 102, "Marketing", 4500);
  
  // Log the employee's details to the console
  console.log(emp1.getDetails()); 
  
  // Log the employee's annual salary to the console
  console.log(emp1.calculateAnnualSalary()); 


// Task 2: Creating a Manager Class

// Define the Employee class
class Employee {
    // Initialize the properties of the Employee class
    constructor(name, id, department, salary) {
      this.name = name; // Assign the name property
      this.id = id; // Assign the id property
      this.department = department; // Assign the department property
      this.salary = salary; // Assign the salary property
    }
  
    // Method to return the employee's details as a formatted string
    getDetails() {
      return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }
  
    // Method to calculate and return the employee's annual salary (salary * 12)
    calculateAnnualSalary() {
      return this.salary * 12; // Return the annual salary
    }
  }
  
  // Define the Manager class that inherits from Employee
  class Manager extends Employee {
    // Initialize the properties of the Manager class
    constructor(name, id, department, salary, teamSize) {
      super(name, id, department, salary); // Call the parent (Employee) constructor
      this.teamSize = teamSize; // Assign the teamSize property specific to Manager
    }
  
    // Override the getDetails method to include the team size in the manager's details
    getDetails() {
      return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }
  
    // Method to calculate the manager's bonus (10% of the annual salary)
    calculateBonus() {
      return this.calculateAnnualSalary() * 0.10; // Return 10% of the annual salary
    }
  }
  
  // Manager information
  const mgr1 = new Manager("Olivia Brown", 202, "Finance", 9000, 7);
  
  // Log the manager's details to the console
  console.log(mgr1.getDetails()); 
  
  // Log the manager's bonus to the console
  console.log(mgr1.calculateBonus()); 


// Task 3: Creating a Company Class
// Define the Employee class
class Employee {
    // Initialize the properties of the Employee class
    constructor(name, id, department, salary) {
      this.name = name; // Assign the name property
      this.id = id; // Assign the id property
      this.department = department; // Assign the department property
      this.salary = salary; // Assign the salary property
    }
  
    // Method to return the employee's details as a formatted string
    getDetails() {
      return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }
  
    // Method to calculate and return the employee's annual salary (salary * 12)
    calculateAnnualSalary() {
      return this.salary * 12; // Return the annual salary
    }
  }
  
  // Define the Manager class that inherits from Employee
  class Manager extends Employee {
    // Initialize the properties of the Manager class
    constructor(name, id, department, salary, teamSize) {
      super(name, id, department, salary); // Call the parent (Employee) constructor
      this.teamSize = teamSize; // Assign the teamSize property specific to Manager
    }
  
    // Override the getDetails method to include the team size in the manager's details
    getDetails() {
      return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }
  
    // Method to calculate the manager's bonus (10% of the annual salary)
    calculateBonus() {
      return this.calculateAnnualSalary() * 0.10; // Return 10% of the annual salary
    }
  }
  
  // Define the Company class
  class Company {
    // Initialize the properties of the Company class
    constructor(name) {
      this.name = name; // Assign the company name property
      this.employees = []; // Initialize an empty array to store employee objects
    }
  
    // Method to add an employee to the company
    addEmployee(employee) {
      this.employees.push(employee); // Add the given employee object to the employees array
    }
  
    // Method to list all employees' details
    listEmployees() {
      this.employees.forEach(employee => {
        console.log(employee.getDetails()); // Call the getDetails method on each employee object and log the result
      });
    }
  }
  
  // Company information
  const company = new Company("TechCorp");
  
  // Employee and Manager information
  const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
  const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
  
  // Add employees to the company
  company.addEmployee(emp1); 
  company.addEmployee(mgr1);
  
  // Log the details of all employees in the company
  company.listEmployees();