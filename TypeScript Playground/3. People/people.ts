abstract class Employee {
  name: string;
  age: number;
  salary: number;
  tasks: Array<String>;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.salary = 0;
    this.tasks = new Array();
  }

  public work(): void {
    let currentTask = this.tasks.shift();
    this.tasks.push(currentTask);
    console.log(this.name + " " + currentTask);
  }
  public colectSalary(): void {
    console.log(`${this.name} received ${this.getSalary()} this month.`);
  }
  public getSalary(): number {
    return this.salary;
  }
}

export class Junior extends Employee {
  constructor(name: string, age: number) {
    super(name, age);
    this.tasks.push(`is working on a simple task.`);
  }
}

export class Senior extends Employee {
  constructor(name: string, age: number) {
    super(name, age);
    this.tasks.push(`is working on a comlicated task.`);
    this.tasks.push(`is taking time off work.`);
    this.tasks.push(`is supervising junior workers.`);
  }
}

export class Manager extends Employee {
  divident: number;

  constructor(name: string, age: number) {
    super(name, age);
    this.divident = 0;
    this.tasks.push(`scheduled a meeting.`);
    this.tasks.push(`is preparing a quarterly meeting.`);
  }

  public getSalary(): number {
    return this.salary + this.divident;
  }
}