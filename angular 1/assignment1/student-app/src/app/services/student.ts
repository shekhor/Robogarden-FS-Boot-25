import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Student {
  private students = [
    { id: 1, name: "David", age: 25, course: "Angular" },
    { id: 2, name: "Nimisha", age: 27, course: "JavaScript" },
    { id: 3, name: "Jordan", age: 23, course: "TypeScript" }
  ];

  getStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    return this.students.find(s => s.id === id);
  }
}
