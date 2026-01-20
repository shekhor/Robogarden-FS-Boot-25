import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { StudentService } from '../student-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-details',
  imports: [CommonModule, FormsModule],
  templateUrl: './student-details.html',
  styleUrl: './student-details.css',
})
export class StudentDetails {
  @Input() student: any = null;
  isEditMode: boolean = false;

  constructor(private studentService: StudentService) {
  }
     
  edit() {
    this.isEditMode = true;
  }

  save() {
    this.isEditMode = false;

    this.studentService.updateStudent(this.student.studentID, this.student).subscribe({
      next: (data) => {
        alert('Student details successfully updated.');
      },
      error: (error) => {
        console.error('Error updating student details:', error);
      }
    });
  }
}
