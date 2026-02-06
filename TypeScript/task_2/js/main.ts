// director interface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// teacher interface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// director class
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

// teacher class
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// function create employee
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// This function will be used as a type predicate, and if it returns true, then the employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

// function execute work

function executeWork(employee: Director | Teacher): string {
    if (employee instanceof Director) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}
// console log execute work function

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

// custom type Subjects it can only have Math or History

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    return "Teaching History";
}

console.log(teachClass('Math'));
console.log(teachClass('History'));