interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
  
class Director implements DirectorInterface {
  workFromHome = () : string => 'Working from home';
  getCoffeeBreak = () : string => 'Getting a coffee break';
  workDirectorTasks = () : string => 'Getting to director tasks';
}

class Teacher implements TeacherInterface {
  workFromHome = () : string => 'Cannot work from home';
  getCoffeeBreak = () : string => 'Cannot have a break';
  workTeacherTasks = () : string => 'Getting to work';
}

export const createEmployee = (salary: number | string): Teacher | Director => Number(salary) < 500 ? new Teacher() : new Director();

export const isDirector = (employee: Teacher | Director): boolean => employee instanceof Director;

export const executeWork = (employee: Teacher | Director): void => {
  const work = employee instanceof Teacher? employee.workTeacherTasks() : employee.workDirectorTasks();
  console.log(work)
}

type Subjects = 'Math' | 'History';

export const teachClass = (todayClass: Subjects) : string => {
  return todayClass === 'Math' ? 'Teaching Math': 'Teaching History';
}


// Employee constructor function
function Employee(salary) {
  this.salary = salary;
}

// Director constructor function
function Director(salary) {
  Employee.call(this, salary);
}

// Teacher constructor function
function Teacher(salary) {
  Employee.call(this, salary);
}

// Function to create an employee object based on salary
function createEmployee(salary) {
  if (salary >= 1000) {
    return new Director(salary);
  } else {
    return new Teacher(salary);
  }
}

// Type predicate function to check if an employee is a director
function isDirector(employee) {
  return employee instanceof Director;
}

// Function to perform work based on employee type
function executeWork(employee) {
  if (isDirector(employee)) {
    workDirectorTasks();
  } else {
    workTeacherTasks();
  }
}

// Function to perform director tasks
function workDirectorTasks() {
  console.log('Getting to director tasks');
}

// Function to perform teacher tasks
function workTeacherTasks() {
  console.log('Getting to teacher tasks');
}


// String literal type
type Subjects = 'Math' | 'History';

// Function to teach a class based on the subject
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    return 'Invalid subject';
  }
}
