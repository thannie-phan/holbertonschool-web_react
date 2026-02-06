/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

// director class
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
// teacher class
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
// function create employee
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
// type predicate to check if employee is a Director
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (employee instanceof Director) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
function teachClass(todayClass) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    return "Teaching History";
}
console.log(teachClass('Math'));
console.log(teachClass('History'));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWNBLGlCQUFpQjtBQUNqQjtJQUFBO0lBWUEsQ0FBQztJQVhHLCtCQUFZLEdBQVo7UUFDSSxPQUFPLG1CQUFtQixDQUFDO0lBQy9CLENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0ksT0FBTyx3QkFBd0IsQ0FBQztJQUNwQyxDQUFDO0lBRUQsb0NBQWlCLEdBQWpCO1FBQ0ksT0FBTywyQkFBMkIsQ0FBQztJQUN2QyxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUM7QUFFRCxnQkFBZ0I7QUFDaEI7SUFBQTtJQVlBLENBQUM7SUFYRyw4QkFBWSxHQUFaO1FBQ0ksT0FBTyx1QkFBdUIsQ0FBQztJQUNuQyxDQUFDO0lBRUQsZ0NBQWMsR0FBZDtRQUNJLE9BQU8scUJBQXFCLENBQUM7SUFDakMsQ0FBQztJQUVELGtDQUFnQixHQUFoQjtRQUNJLE9BQU8saUJBQWlCLENBQUM7SUFDN0IsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDO0FBRUQsMkJBQTJCO0FBQzNCLFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQzNDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDNUMsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0tBQ3hCO1NBQU07UUFDSCxPQUFPLElBQUksUUFBUSxFQUFFLENBQUM7S0FDekI7QUFDTCxDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFFcEMsb0RBQW9EO0FBQ3BELFNBQVMsVUFBVSxDQUFDLFFBQTRCO0lBQzVDLE9BQU8sUUFBUSxZQUFZLFFBQVEsQ0FBQztBQUN4QyxDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsUUFBNEI7SUFDN0MsSUFBSSxRQUFRLFlBQVksUUFBUSxFQUFFO1FBQzlCLE9BQU8sUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7S0FDdkM7SUFDRCxPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQ3ZDLENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFJL0MsU0FBUyxVQUFVLENBQUMsVUFBb0I7SUFDcEMsSUFBSSxVQUFVLEtBQUssTUFBTSxFQUFFO1FBQ3ZCLE9BQU8sZUFBZSxDQUFDO0tBQzFCO0lBQ0QsT0FBTyxrQkFBa0IsQ0FBQztBQUM5QixDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGRpcmVjdG9yIGludGVyZmFjZVxuaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbiAgICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmc7XG59XG5cbi8vIHRlYWNoZXIgaW50ZXJmYWNlXG5pbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gICAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmc7XG59XG5cbi8vIGRpcmVjdG9yIGNsYXNzXG5jbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiV29ya2luZyBmcm9tIGhvbWVcIjtcbiAgICB9XG5cbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJHZXR0aW5nIGEgY29mZmVlIGJyZWFrXCI7XG4gICAgfVxuXG4gICAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiR2V0dGluZyB0byBkaXJlY3RvciB0YXNrc1wiO1xuICAgIH1cbn1cblxuLy8gdGVhY2hlciBjbGFzc1xuY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2Uge1xuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJDYW5ub3Qgd29yayBmcm9tIGhvbWVcIjtcbiAgICB9XG5cbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJDYW5ub3QgaGF2ZSBhIGJyZWFrXCI7XG4gICAgfVxuXG4gICAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJHZXR0aW5nIHRvIHdvcmtcIjtcbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZSBlbXBsb3llZVxuZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmcpOiBEaXJlY3RvciB8IFRlYWNoZXIge1xuICAgIGlmICh0eXBlb2Ygc2FsYXJ5ID09PSBcIm51bWJlclwiICYmIHNhbGFyeSA8IDUwMCkge1xuICAgICAgICByZXR1cm4gbmV3IFRlYWNoZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IERpcmVjdG9yKCk7XG4gICAgfVxufVxuXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgyMDApKTtcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDEwMDApKTtcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKCckNTAwJykpO1xuXG4vLyB0eXBlIHByZWRpY2F0ZSB0byBjaGVjayBpZiBlbXBsb3llZSBpcyBhIERpcmVjdG9yXG5mdW5jdGlvbiBpc0RpcmVjdG9yKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiBlbXBsb3llZSBpcyBEaXJlY3RvciB7XG4gICAgcmV0dXJuIGVtcGxveWVlIGluc3RhbmNlb2YgRGlyZWN0b3I7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVXb3JrKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiBzdHJpbmcge1xuICAgIGlmIChlbXBsb3llZSBpbnN0YW5jZW9mIERpcmVjdG9yKSB7XG4gICAgICAgIHJldHVybiBlbXBsb3llZS53b3JrRGlyZWN0b3JUYXNrcygpO1xuICAgIH1cbiAgICByZXR1cm4gZW1wbG95ZWUud29ya1RlYWNoZXJUYXNrcygpO1xufVxuXG5jb25zb2xlLmxvZyhleGVjdXRlV29yayhjcmVhdGVFbXBsb3llZSgyMDApKSk7XG5jb25zb2xlLmxvZyhleGVjdXRlV29yayhjcmVhdGVFbXBsb3llZSgxMDAwKSkpO1xuXG50eXBlIFN1YmplY3RzID0gXCJNYXRoXCIgfCBcIkhpc3RvcnlcIjtcblxuZnVuY3Rpb24gdGVhY2hDbGFzcyh0b2RheUNsYXNzOiBTdWJqZWN0cyk6IHN0cmluZyB7XG4gICAgaWYgKHRvZGF5Q2xhc3MgPT09IFwiTWF0aFwiKSB7XG4gICAgICAgIHJldHVybiBcIlRlYWNoaW5nIE1hdGhcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiVGVhY2hpbmcgSGlzdG9yeVwiO1xufVxuXG5jb25zb2xlLmxvZyh0ZWFjaENsYXNzKCdNYXRoJykpO1xuY29uc29sZS5sb2codGVhY2hDbGFzcygnSGlzdG9yeScpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=