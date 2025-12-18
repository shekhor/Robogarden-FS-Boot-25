import { Component } from '@angular/core';
import { Student as StudentService } from '../services/student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  students: any[] = [];
  selectedStudent: any = null;

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

  showDetails(student: any) {
    this.selectedStudent = student;  // event binding action
  }
}
