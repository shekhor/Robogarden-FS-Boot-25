import { Component } from '@angular/core';
import { StudentService } from '../student-service';
import { form } from '@angular/forms/signals';
import { FormsModule, Validator } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgeInvalid } from '../validators/age-invalid';
import { App } from '../app';

@Component({
  selector: 'app-new-student',
  imports: [FormsModule, CommonModule, AgeInvalid],
  templateUrl: './new-student.html',
  styleUrl: './new-student.css',
})
export class NewStudent {
  student: any = {
    studentname: '',
    studentaddress: '',
    studentphone: ''
  };

  constructor(private studentService: StudentService) {
  }

  addStudent() {
    this.studentService.addStudent(this.student).subscribe({
      next: (data) => {
        alert('Student successfully added:');
        this.student = {
          studentname: '',
          studentaddress: '',
          studentphone: ''
        }; // Reset the form
      },
      error: (error) => {
        console.error('Error adding student:', error);
      }
    });
    console.log('New Student Added:', this.student);
    
  }
}
