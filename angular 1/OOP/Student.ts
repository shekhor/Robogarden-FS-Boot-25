class Student {
  private name: string;
  private age: number;
  private grade: string;

  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  getResults(): string {
    return 'Passed';
  }

  getName(): [string, number, string] {
    return [this.name, this.age, this.grade];
  }

}

const student1 = new Student('Alice', 20, 'A');
console.log(student1.getResults()); // Output: Passed

console.log(student1.getName()); // Error: Property 'name' is private and only accessible within class 'Student'.

const student2 = new Student('Bob', 22, 'B');
console.log(student2.getResults()); // Output: Passed

console.log(student2.getName()); // Error: Property 'name' is private and only accessible within class 'Student'.