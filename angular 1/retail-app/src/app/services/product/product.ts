import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private message = 'This is the Product Service';

  getMessage() {
    return this.message;
  }
}
