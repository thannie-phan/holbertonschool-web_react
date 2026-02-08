namespace Subjects {
  export class Subject {
    // declare teacher property from Teacher interface
    teacher!: Teacher;
    // setter method
    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}

