import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCol, IonGrid, IonRow, IonSelect, IonSelectOption, IonLabel, IonItem } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Observable } from 'rxjs';
import { Registration } from '../registration';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCol, IonGrid, IonRow, IonSelect, IonSelectOption, CommonModule, IonLabel, IonItem]
})
export class Tab2Page {

  allStudentIds!: Observable<any>;

  constructor(private registrationService: Registration) {}

  ngOnInit() {
    this.allStudentIds = this.registrationService.getAllStudents();
  }

}
