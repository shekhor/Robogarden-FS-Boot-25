import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  private apiUrl = 'http://localhost:4000/students';

  private studentDetailsApiUrl = 'http://localhost:4000/students';

  private addStudentsApiUrl = 'http://localhost:4000/students';

  private updateStudentApiUrl = 'http://localhost:4000/students';

  constructor(private http: HttpClient) {}

  getStudentBaseInfo() {
    return this.http.get(this.apiUrl);
  }

  getStudentDetails(id: number) {
    console.log("Fetching details for student ID: ", id);
    return this.http.get(`${this.studentDetailsApiUrl}/${id}`);
  }

  addStudent(student: any) {
    return this.http.post(this.addStudentsApiUrl, student);
  }

  updateStudent(id: number, student: any) {
    return this.http.put(`${this.updateStudentApiUrl}/${id}`, student);
  }



  // addStudent(student: any) {
  //   const newId = this.students.length > 0 ? Math.max(...this.students.map(s => s.id)) + 1 : 1;
  //   const newStudent = { id: newId, ...student };
  //   this.students.push(newStudent);
  // }


}
