import { Component } from '@angular/core';
import { StudentDetails } from '../student-details/student-details';
import { StudentList } from '../student-list/student-list';

@Component({
  selector: 'app-home',
  imports: [StudentDetails, StudentList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
