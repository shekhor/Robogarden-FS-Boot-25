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
    name: '',
    age: null,
    course: '',
    address: ''
  };

  constructor(private studentService: StudentService) {
  }

  addStudent() {
    // this.studentService.addStudent(this.student);
    this.student = {};
  }
}
