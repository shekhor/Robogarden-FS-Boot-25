import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RegServices } from '../services/reg-services';

@Component({
  selector: 'app-registration',
  imports: [CommonModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  allStudentIds!: Observable<any>;

  allCourses!: Observable<any>;

  selectedCourses: any[] = [];


  constructor(private registrationService: RegServices) {
  }

  ngOnInit() {
    this.allStudentIds = this.registrationService.getAllStudents();
    this.allCourses = this.registrationService.getAllCourses();

  }

  isCourseSelected(course: any): boolean {
    return this.selectedCourses.some(c => c.id === course.id);
  }

  addCourse(course: any) {
    if (!this.selectedCourses.some(c => c.id === course.id)) {
      this.selectedCourses.push(course);
    }
  }

  removeCourse(course: any) {
    this.selectedCourses = this.selectedCourses.filter(c => c.id !== course.id);
  }

  completeRegistration() {

    const payload = {
      studentId: 101,  // later from login/session
      courseIds: this.selectedCourses.map(c => c.id)
    };

    console.log(payload);
  }




}
