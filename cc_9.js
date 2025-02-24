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