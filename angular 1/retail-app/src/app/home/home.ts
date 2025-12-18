import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {Home as homeservice} from '../services/home/home';
import { Product } from '../services/product/product';
import { ClientService } from '../services/client-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  title = 'Welcome to the Retail App Home Page';
  username = 'Guest User';
  
  products: any[] = [];

  message = '';

  clientName = '';

  count = 0;

  showText = true;

  colSpanValue = 2;

  imageUrl = '/Users/shekhor/Robo garden bootcamp 25/Robogarden-FS-Boot-25/angular 1/dog.jpeg';

  isDisabledProp = true;

  boolOne = true;
  boolTwo = false;

  constructor(private obj: homeservice, private prodObj: Product, private clientService: ClientService){
  }

  ngOnInit() {
    this.products = this.obj.getProducts();
    this.message = this.prodObj.getMessage();
    this.clientName = this.clientService.getClient();
  }

  onClick() {
    this.title = 'Button Clicked! Title Changed.';
  }

  increaseCount() {
    this.count++;
  }

  toggleText() {
    this.showText = !this.showText;
  }

  toggleClass(){
    this.boolOne = !this.boolOne;
    this.boolTwo = !this.boolTwo;
  }

}