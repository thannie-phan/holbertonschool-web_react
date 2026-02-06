// interface for the print teacher function
interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

// define teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;

    // possibility to add any attributes
    [key: string]: any;
}

// directors interface extending Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// student class interface
interface StudentClassInterface {
    firstName: string;
    lastName: string;

    workOnHomework(): string;
    displayName(): string;
}

// interface for student class constructor below
interface StudentClassConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

// print teacher function
const printTeacher: PrintTeacherFunction = (
    firstName: string,
    lastName: string
): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// log print teacher result
console.log(printTeacher('John', 'Doe'));

// create director object
const director1: Directors = {
    firstName: 'Jolly',
    lastName: 'Doe',
    location: 'Perth',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

// log director object
console.log(director1);

// create teacher object
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
};

// log teacher object
console.log(teacher3);

// student class implementation
class StudentClass implements StudentClassInterface {
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

// create student instance
const student = new StudentClass('Lil', 'Dwayne');

// log student methods
console.log(student.workOnHomework());
console.log(student.displayName());
