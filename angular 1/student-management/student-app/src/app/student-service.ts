import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students = [
    { id: 1, name: "David", age: 25, course: "Angular", address: "123 Main St" },
    { id: 2, name: "Nimisha", age: 27, course: "JavaScript", address: "456 Oak Ave" },
    { id: 3, name: "Jordan", age: 23, course: "TypeScript", address: "789 Pine Rd" }
  ];

  getStudentBaseInfo() {
    // return a new array with only id and name to avoid exposing full student objects
    return this.students.map(({ id, name }) => ({ id, name }));
  }

  getStudentDetails(id: number) {
    return this.students.find(student => student.id === id) || null;
  }
}
