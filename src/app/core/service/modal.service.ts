import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  showModal = false;

  constructor() { }

  show() {
    this.showModal = true;
  }

  hide() {
    this.showModal = false;
  }
}
