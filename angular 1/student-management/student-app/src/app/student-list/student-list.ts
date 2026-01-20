import { Component } from '@angular/core';
import { StudentService } from '../student-service';
import { CommonModule } from '@angular/common';
import { StudentDetails } from '../student-details/student-details';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule, StudentDetails, RouterLink],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  students!: Observable<any>;

  studentDetails!: Observable<any>;

   constructor(private studentService: StudentService) {
   }

    ngOnInit() {
      this.loadStudents();
    }

    loadStudents() {
      this.students = this.studentService.getStudentBaseInfo();
    }

    viewDetails(id: number) {
      this.studentDetails = this.studentService.getStudentDetails(id);
      
    }
}
