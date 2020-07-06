import { Component, OnInit, OnDestroy } from '@angular/core';
import { EquipmentListService } from 'src/app/core/service/equipment-list.service';
import { singleEquipmentNode } from 'src/app/core/models/singleEquipment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-upload-equipment-document',
  templateUrl: './upload-equipment-document.component.html',
  styleUrls: ['./upload-equipment-document.component.scss']
})
export class UploadEquipmentDocumentComponent implements OnInit, OnDestroy {

  listOfDocuments = [];
  selectedDocument;
  equipmentDocuments: any[];
  nameOfSelectedEquipment: string;
  nameOfSelectedEquipmentSubscription: Subscription;
  highlightedDocument;
  highlightedEquipment;


  constructor(public equipmentListService: EquipmentListService) { }

  ngOnInit(): void {
    this.nameOfSelectedEquipmentSubscription = this.equipmentListService.nameOfSelectedEquipmentToViewDocument.subscribe((res: string) => {
      this.nameOfSelectedEquipment = res;
    });
  }

  addFile(files) {
    const arrayOfObjects = Object.values(files);
    console.log(arrayOfObjects);
    arrayOfObjects.forEach(element => {
      this.listOfDocuments.push(element);
    });
  }

  displayEquipmentDocuments(node: singleEquipmentNode) {
    this.equipmentListService.setNameOfSelectedEquipmentToViewDocument(node.details.equipmentRegulatoryName);
    this.equipmentDocuments = node.listOfDocuments;
  }

  handleDocument(key) {
    const index = this.equipmentListService.arrayOfCreatedEquipmentKeys.findIndex((equipment) => {
      return equipment.key === key;
    });

    if (this.equipmentListService.arrayOfCreatedEquipmentKeys[index].listOfDocuments.includes(this.selectedDocument)) {
      const selectedDocumentIndex = this.equipmentListService.arrayOfCreatedEquipmentKeys[index].listOfDocuments.findIndex((document) => {
        return document.id === this.selectedDocument.id;
      });

      this.equipmentListService.arrayOfCreatedEquipmentKeys[index].listOfDocuments.splice(selectedDocumentIndex, 1);
    } else {
      const documentId = Math.ceil(Math.random() * 4000);
      // tslint:disable-next-line: no-string-literal
      this.selectedDocument['id'] = documentId;
      this.equipmentListService.arrayOfCreatedEquipmentKeys[index].listOfDocuments.push(this.selectedDocument);
    }
  }

  selectDocument(document) {
    this.selectedDocument = document;
  }

  ngOnDestroy() {
    this.nameOfSelectedEquipmentSubscription.unsubscribe();
  }

}
