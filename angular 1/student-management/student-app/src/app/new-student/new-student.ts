import { Component } from '@angular/core';
import { StudentService } from '../student-service';
import { form } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-student',
  imports: [FormsModule],
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
    this.studentService.addStudent(this.student);
    this.student = {};
  }
}
