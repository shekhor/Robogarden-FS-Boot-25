import { Component } from '@angular/core';
import { StudentService } from '../student-service';
import { CommonModule } from '@angular/common';
import { StudentDetails } from '../student-details/student-details';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule, StudentDetails, RouterLink],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
   students: any[] = [];

   studentDetails: any = null;

   constructor(private studentService: StudentService) {
   }

    ngOnInit() {
      this.studentService.getStudentBaseInfo().subscribe((data: any) => {
        console.log(data);
        this.students = data;
      });
    }

    // viewDetails(id: number) {
    //   this.studentDetails = this.studentService.getStudentDetails(id);
    // }
}
