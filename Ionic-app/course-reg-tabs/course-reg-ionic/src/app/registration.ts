import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Registration {

  private allStudentApiURL = 'http://localhost:4000/students';

  private allCoursesApiURL = 'http://localhost:4000/courses';

  private registerCourseApiURL = 'http://localhost:4000/enroll';

  constructor(private http: HttpClient) {}

  getAllCourses(){
    return this.http.get<any>(this.allCoursesApiURL);
  }

  getAllStudents(){
    return this.http.get<any>(this.allStudentApiURL);
  }

  completeRegistration(studentId: number, courseIds: number[]){
    const payload = {
      studentId: studentId,
      courseIds: courseIds
    };
    return this.http.post<any>(this.registerCourseApiURL, payload);
  }
  
}
