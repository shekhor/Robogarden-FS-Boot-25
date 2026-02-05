import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonLabel, IonSelect, IonSelectOption, IonButton, IonIcon, IonCardContent, IonCardTitle, IonCardHeader, IonSearchbar, IonCard } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Registration } from '../registration';
import { map, Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonItem, IonList, IonLabel, IonSelect, IonSelectOption, CommonModule, IonButton, IonIcon, IonCardContent, IonCardTitle, IonCardHeader, FormsModule, IonSearchbar, IonCard],
})
export class Tab1Page {

  allCourses!: Observable<any>;

  allStudentIds!: Observable<any>;

  filteredCourses!: Observable<any>;

  courseList: any[] = [];

  studentId!: number;

  searchTerm$ = new BehaviorSubject<string>('');

  get searchTerm(): string {
    return this.searchTerm$.value;
  }

  set searchTerm(value: string) {
    this.searchTerm$.next(value);
  }

  clearSearch() {
    this.searchTerm = '';
  }
  
  constructor(private registrationService: Registration) {
  }

  ngOnInit() {
    this.allCourses = this.registrationService.getAllCourses();
    this.allStudentIds = this.registrationService.getAllStudents();

    
    this.filteredCourses = combineLatest([this.allCourses, this.searchTerm$]).pipe(
      map(([courses, searchTerm]) => {
        console.log('Courses:', courses, 'Search term:', searchTerm);
        return courses ? courses.filter((course: any) => 
          course.title?.toLowerCase().includes(searchTerm) ||
          course.description?.toLowerCase().includes(searchTerm)
        ) : [];
      })
    );
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
