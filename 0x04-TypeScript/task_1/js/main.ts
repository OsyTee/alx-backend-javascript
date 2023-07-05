interface IStudent {
  firstName: string;
  lastName: string;
}

interface IStudentClass {
  new (firstName: string, lastName: string): StudentClass;
}

class StudentClass implements IStudent {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

export { StudentClass, IStudent, IStudentClass };

