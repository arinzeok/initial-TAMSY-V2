import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipmentListService {

  arrayOfCreatedEquipmentKeys = [];

  listOfDocuments = [];

  listOfSpecificationStandards = [];

  nodes = [];

  nameOfSelectedEquipmentToViewDocument = new Subject();

  setNameOfSelectedEquipmentToViewDocument(equipmentName) {
    this.nameOfSelectedEquipmentToViewDocument.next(equipmentName);
  }

  constructor() { }
}
