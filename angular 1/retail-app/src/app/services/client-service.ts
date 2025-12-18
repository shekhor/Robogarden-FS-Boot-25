import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private client = 'David';

  getClient() {
    return this.client;
  }
}
