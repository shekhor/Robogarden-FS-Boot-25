import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students = [
    { id: 1, name: "David", age: 25, course: "Angular", address: "123 Main St", img: "assets/images/dog.jpeg" },
    { id: 2, name: "Nimisha", age: 27, course: "JavaScript", address: "456 Oak Ave", img: "assets/images/dog.jpeg" },
    { id: 3, name: "Jordan", age: 23, course: "TypeScript", address: "789 Pine Rd", img: "assets/images/dog.jpeg" }
  ];

  getStudentBaseInfo() {
    // return a new array with only id and name to avoid exposing full student objects
    return this.students.map(({ id, name }) => ({ id, name }));
  }

  getStudentDetails(id: number) {
    return this.students.find(student => student.id === id) || null;
  }

  addStudent(student: any) {
    const newId = this.students.length > 0 ? Math.max(...this.students.map(s => s.id)) + 1 : 1;
    const newStudent = { id: newId, ...student };
    this.students.push(newStudent);
  }
}
