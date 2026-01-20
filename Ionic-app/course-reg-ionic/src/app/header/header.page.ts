import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, CommonModule, FormsModule, RouterModule, IonButton]
})
export class HeaderPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToAboutPage() {
    this.router.navigate(['/about']);
  }

}
