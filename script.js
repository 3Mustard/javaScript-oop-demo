class Employee {
  constructor(name, salary, hireDate) {
    this.name = name;
    this.salary = salary;
    this.hireDate = hireDate;
  }
  getName() {
    console.log(this.name.toUpperCase());
  }
  getSalary() {
    console.log(this.salary);
  }
  getHireDate() {
    console.log(this.hireDate);
  }
}

class Manager extends Employee {
  constructor(descriptionOfJob, name, salary, hireDate) {
    super(name, salary, hireDate);
    this.descriptionOfJob = descriptionOfJob;
  }
  getJobDescription() {
    console.log(`name: ${this.name}, hire date: ${this.hireDate}, salary: ${this.salary}, job desc: ${this.descriptionOfJob}`);
  }
}

class Designer extends Employee {
  constructor(experience, name, salary, hireDate) {
    super(name, salary, hireDate);
    this.experience = experience;
  }
  yearsExperience() {
    console.log(`name: ${this.name}, hire date: ${this.hireDate}, salary: ${this.salary}, experience: ${this.experience}`);
  }
}

class SalesAssociate extends Employee {
  constructor(degrees, name, salary, hireDate) {
    super(name, salary, hireDate);
    this.degrees = degrees;
  }
  degreeCompleted() {
    console.log(`name: ${this.name}, hire date: ${this.hireDate}, salary: ${this.salary}, degrees: ${this.degrees}`);
  }
}

let m = new Manager("lay around", "Momo", 20, "03/22/2000");
let d = new Designer(10, "Sana", 50, "07/27/2020");
let s = new SalesAssociate(2, "Tzuyu", 15, "03/22/2000");
m.getJobDescription();
d.yearsExperience();
s.degreeCompleted();