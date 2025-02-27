// Task 1: Creating an Employee Class
class Employee {
  constructor(name, empId, department, salary) {
      this.name = name; // Assign the name of the employee
      this.empId = empId; // Assign the employee ID
      this.department = department; // Assign the department
      this.salary = salary; // Assign the salary
  }

  getDetails() {
      // Return a formatted string containing employee details
      return `Employee: ${this.name}, ID: ${this.empId}, Department: ${this.department}, Salary: $${this.salary}`;
  }

  calculateAnnualSalary() {
      // Calculate and return the annual salary
      return this.salary * 12;
  }
}

// Task 2: Creating a Manager Class (Inheritance & Method Overriding)
class Manager extends Employee {
  constructor(name, empId, department, salary, teamSize) {
      super(name, empId, department, salary); // Call the parent class constructor
      this.teamSize = teamSize; // Assign the team size
  }

  getDetails() {
      // Return a formatted string containing manager details
      return `Manager: ${this.name}, ID: ${this.empId}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
  }

  calculateAnnualSalary() {
      let annualSalary = super.calculateAnnualSalary(); // Get the base annual salary
      let bonus = annualSalary * 0.10; // Calculate a 10% bonus
      return annualSalary + bonus; // Return the total annual salary including bonus
  }
}

// Task 3: Creating a Company Class
class Company {
  constructor(name) {
      this.name = name; // Assign the company name
      this.employees = []; // Initialize an empty array to store employees
  }

  addEmployee(employee) {
      this.employees.push(employee); // Add an employee to the company
  }

  listEmployees() {
      // Return an array of employee details
      return this.employees.map(emp => emp.getDetails());
  }

  promoteToManager(employee, teamSize) {
      let index = this.employees.indexOf(employee); // Find the index of the employee in the list
      if (index !== -1) {
          let manager = new Manager(employee.name, employee.empId, employee.department, employee.salary, teamSize); // Create a new manager object
          this.employees[index] = manager; // Replace the employee with the manager
      }
  }

  calculateTotalPayroll() {
      // Calculate the total payroll by summing up annual salaries of all employees
      return this.employees.reduce((total, emp) => total + emp.calculateAnnualSalary(), 0);
  }
}

// Task 4: Implementing a Payroll System
let employee1 = new Employee("John Doe", 101, "Engineering", 5000); // Create an Employee object
console.log(employee1.getDetails()); // Print employee details
console.log(`Annual Salary: $${employee1.calculateAnnualSalary()}`); // Print employee annual salary

let manager1 = new Manager("Alice Johnson", 102, "Marketing", 7000, 5); // Create a Manager object
console.log(manager1.getDetails()); // Print manager details
console.log(`Manager Annual Salary: $${manager1.calculateAnnualSalary()}`); // Print manager annual salary (including bonus)

// Task 5: Implementing Promotions
let company = new Company("TechCorp"); // Create a Company object
company.addEmployee(employee1); // Add employee to the company
company.addEmployee(manager1); // Add manager to the company
console.log("Employees in company:", company.listEmployees()); // Print all employees in the company

company.promoteToManager(employee1, 3); // Promote an employee to a manager role
console.log("Employees after promotion:", company.listEmployees()); // Print employees after promotion

console.log(`Total Payroll: $${company.calculateTotalPayroll()}`); // Print total payroll of the company