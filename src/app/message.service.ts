import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(mes: string) {
    this.messages.push(mes);
  }

  clear() {
    this.messages = [];
  }
}
