import { Component } from '@angular/core';
import { StudentList } from '../student-list/student-list';

@Component({
  selector: 'app-home',
  imports: [StudentList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
