import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegServices {
  private allStudentApiURL = 'http://localhost:4000/students';

  private allCoursesApiURL = 'http://localhost:4000/courses';

  private registerCourseApiURL = 'http://localhost:4000/enroll';


  constructor(private http: HttpClient) {}

  getAllStudents() {
    return this.http.get<any>(this.allStudentApiURL);
  }

  getAllCourses() {
    return this.http.get<any>(this.allCoursesApiURL);
  }
}
