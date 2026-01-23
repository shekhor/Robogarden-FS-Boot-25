import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonLabel, IonSelect, IonSelectOption, IonButton, IonIcon, IonCardContent, IonCardTitle, IonCardHeader } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Registration } from '../registration';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonItem, IonList, IonLabel, IonSelect, IonSelectOption, CommonModule, IonButton, IonIcon, IonCardContent, IonCardTitle, IonCardHeader, FormsModule],
})
export class Tab1Page {

  allCourses!: Observable<any>;

  allStudentIds!: Observable<any>;

  courseList: any[] = [];

  studentId!: number;
  
  constructor(private registrationService: Registration) {
  }

  ngOnInit() {
    this.allCourses = this.registrationService.getAllCourses();
    this.allStudentIds = this.registrationService.getAllStudents();
  }

  addCourse(course: any) {
    this.courseList.push(course);
    console.log('Registered Courses:', this.courseList);
  }

  removeCourse(course: any) {
    const index = this.courseList.indexOf(course);
    if (index > -1) {
      this.courseList.splice(index, 1);
    }
    console.log('Updated Registered Courses:', this.courseList);
  }

  completeRegistration() {
    // Logic to complete registration can be added here

    const courseIds = this.courseList.map(course => course.id);

    console.log(`Student ID: ${this.studentId} registered for courses:`, courseIds);

    this.registrationService.completeRegistration(this.studentId, courseIds).subscribe(response => {
      console.log('Registration successful:', response);
      alert('Registration completed successfully!');
    }, error => {
      alert('Registration failed. Please try again.');
      console.error('Registration failed:', error);
    });
  }





}
