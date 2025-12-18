var Student = /** @class */ (function () {
    function Student(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    Student.prototype.getResults = function () {
        return 'Passed';
    };
    Student.prototype.getName = function () {
        return [this.name, this.age, this.grade];
    };
    return Student;
}());
var student1 = new Student('Alice', 20, 'A');
console.log(student1.getResults()); // Output: Passed
console.log(student1.getName()); // Error: Property 'name' is private and only accessible within class 'Student'.
var student2 = new Student('Bob', 22, 'B');
console.log(student2.getResults()); // Output: Passed
console.log(student2.getName()); // Error: Property 'name' is private and only accessible within class 'Student'.
