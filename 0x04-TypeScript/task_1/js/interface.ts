import { StudentClass, IStudent, IStudentClass } from './js/main.ts/StudentClass';

// Create an instance of StudentClass
const student: IStudent = new StudentClass('John', 'Doe');

// Use the methods provided by StudentClass
console.log(student.workOnHomework());  // Output: "Currently working"
console.log(student.displayName());    // Output: "John"

