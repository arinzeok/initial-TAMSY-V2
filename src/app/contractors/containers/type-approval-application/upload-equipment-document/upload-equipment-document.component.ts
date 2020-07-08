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


  selectedDocument;
  equipmentDocuments: any[];
  nameOfSelectedEquipment: string;
  nameOfSelectedEquipmentSubscription: Subscription;
  highlightedDocument;
  highlightedEquipment;
  showNodeOptions;
  renameDocumentModal: boolean;


  constructor(public equipmentListService: EquipmentListService) { }

  ngOnInit(): void {
    this.nameOfSelectedEquipmentSubscription = this.equipmentListService.nameOfSelectedEquipmentToViewDocument.subscribe((res: string) => {
      this.nameOfSelectedEquipment = res;
    });
  }

  hideNodeOptionsModal() {
      if (this.showNodeOptions) {
        this.showNodeOptions = !this.showNodeOptions;
      }
    }

    showNodeOptionsModal() {
      this.showNodeOptions = true;
    }

    deleteDocument() {
      const index = this.equipmentListService.arrayOfCreatedEquipmentKeys.findIndex(equipment => {
        return equipment.key === this.selectedDocument;
      });

      const documentIndex = this.equipmentListService.listOfDocuments.findIndex((document) => {
        return document.id === this.selectedDocument.id;
      });

      this.equipmentListService.listOfDocuments.splice(documentIndex, 1);

      this.equipmentListService.arrayOfCreatedEquipmentKeys.forEach((element) => {
        const elementDocumentIndex = element.listOfDocuments.findIndex((document) => {
          return document.id === this.selectedDocument.id;
        });

        if (elementDocumentIndex !== -1) {
          element.listOfDocuments.splice(elementDocumentIndex, 1);
        }
      });

      this.hideNodeOptionsModal();

    }

    renameDocument(form) {
      const index = this.equipmentListService.listOfDocuments.findIndex(document => {
        return document.id === this.selectedDocument.id;
      });

      const newEditedDocument = this.equipmentListService.listOfDocuments[index];
      const selectedDocumentSplitName = this.equipmentListService.listOfDocuments[index].name.split('.');
      const oldName = this.equipmentListService.listOfDocuments[index].file.name;
      selectedDocumentSplitName[0] = form.value.newDocumentName;
      newEditedDocument.file.name = selectedDocumentSplitName.join('.');

      this.equipmentListService.arrayOfCreatedEquipmentKeys.forEach((element) => {
        if (element.file.name === oldName) {
          element.file.name = selectedDocumentSplitName.join('.');
        }
      });
    }

  addFile(files) {
    const arrayOfObjects = Object.values(files);
    console.log(arrayOfObjects);
    arrayOfObjects.forEach((element) => {
      const file = {
        file: element
      };
      const files = {
        // tslint:disable-next-line: no-string-literal
        lastModified: element['lastModified'],
// tslint:disable-next-line: no-string-literal
lastModifiedDate: element['lastModifiedDate'],
// tslint:disable-next-line: no-string-literal
name: element['name'],
// tslint:disable-next-line: no-string-literal
size: element['size'],
// tslint:disable-next-line: no-string-literal
type: element['type'],
// tslint:disable-next-line: no-string-literal
webkitRelativePath: element['webkitRelativePath']
      };
      this.equipmentListService.listOfDocuments.push(file);
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
