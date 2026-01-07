import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  private apiUrl = 'http://localhost:4000/students';

  constructor(private http: HttpClient) {}

  getStudentBaseInfo() {
    return this.http.get(this.apiUrl);
  }

  // addStudent(student: any) {
  //   const newId = this.students.length > 0 ? Math.max(...this.students.map(s => s.id)) + 1 : 1;
  //   const newStudent = { id: newId, ...student };
  //   this.students.push(newStudent);
  // }


}
