import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Home {
  private products = [
    {id : 1, name: 'Laptop', price: 999},
    {id : 2, name: 'Smartphone', price: 699},
    {id : 3, name: 'Tablet', price: 499},
    {id : 4, name: 'Headphones', price: 199},
    {id : 5, name: 'Smartwatch', price: 299},
  ];

  getProducts() {
    return this.products;
  }
}
