import { Component, OnInit, OnDestroy } from '@angular/core';
import { EquipmentListService } from 'src/app/core/service/equipment-list.service';
import { Subscription } from 'rxjs';
import { singleEquipmentNode } from 'src/app/core/models/singleEquipment';
import { SpecificationStandard } from 'src/app/core/models/specificationStandard';

@Component({
  selector: 'app-add-specification-standards',
  templateUrl: './add-specification-standards.component.html',
  styleUrls: ['./add-specification-standards.component.scss']
})
export class AddSpecificationStandardsComponent implements OnInit, OnDestroy {
  show: boolean;
  selectedSpecificationStandard;
  equipmentDocuments: any[];
  nameOfSelectedEquipment: string;
  nameOfSelectedEquipmentSubscription: Subscription;
  highlightedDocument;
  highlightedEquipment;
  showNodeOptions;
  renameDocumentModal;

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
    if (!this.showNodeOptions) {
      this.showNodeOptions = !this.showNodeOptions;
    }
  }

  createNewEquipmentStandard(form) {
    const specificationStandardId = Math.ceil(Math.random() * 4000);
    const specificationStandard = {
      id: specificationStandardId,
      specificationTitle: form.value.specificationTitle,
      EN50360CENELEC50360: form.value.EN50360CENELEC50360,
      EN50360CENELEC50361: form.value.EN50361CENELEC50361,
      EN50360CENELEC50364: form.value.EN50364CENELEC50364,
      EN50360CENELEC50371: form.value.EN50371CENELEC50371,
      EN55011CISPR11: form.value.EN55011CISPR11
    };

    this.equipmentListService.listOfSpecificationStandards.unshift(specificationStandard);
    console.log(specificationStandard);
  }

  handleDocument(key) {
    const index = this.equipmentListService.arrayOfCreatedEquipmentKeys.findIndex((equipment) => {
      return equipment.key === key;
    });

    if (this.equipmentListService.arrayOfCreatedEquipmentKeys[index].listOfSpecificationStandards.includes(this.selectedSpecificationStandard)) {
      // tslint:disable-next-line: max-line-length
      const selectedSpecificationStandardIndex = this.equipmentListService.arrayOfCreatedEquipmentKeys[index].listOfSpecificationStandards.findIndex((document) => {
        return document.id === this.selectedSpecificationStandard.id;
      });

      this.equipmentListService.arrayOfCreatedEquipmentKeys[index].listOfSpecificationStandards.splice(selectedSpecificationStandardIndex, 1);
    } else {
      this.equipmentListService.arrayOfCreatedEquipmentKeys[index].listOfSpecificationStandards.push(this.selectedSpecificationStandard);
    }
  }

  selectSpecificationStandard(document) {
    this.selectedSpecificationStandard = document;
  }

  displayEquipmentDocuments(node: singleEquipmentNode) {
    this.equipmentListService.setNameOfSelectedEquipmentToViewDocument(node.details.equipmentRegulatoryName);
    this.equipmentDocuments = node.listOfSpecificationStandards;
  }

  deleteDocument() {
    const index = this.equipmentListService.arrayOfCreatedEquipmentKeys.findIndex(equipment => {
      return equipment.key === this.selectedSpecificationStandard;
    });

    const documentIndex = this.equipmentListService.listOfSpecificationStandards.findIndex((document) => {
      return document.id === this.selectedSpecificationStandard.id;
    });

    this.equipmentListService.listOfSpecificationStandards.splice(documentIndex, 1);

    this.equipmentListService.arrayOfCreatedEquipmentKeys.forEach((element) => {
      const elementDocumentIndex = element.listOfSpecificationStandards.findIndex((document) => {
        return document.id === this.selectedSpecificationStandard.id;
      });

      if (elementDocumentIndex !== -1) {
        element.listOfSpecificationStandards.splice(elementDocumentIndex, 1);
      }
    });

    this.hideNodeOptionsModal();

  }

  renameDocument(form) {
    const index = this.equipmentListService.listOfSpecificationStandards.findIndex(document => {
      return document.id === this.selectedSpecificationStandard.id;
    });

    const newEditedDocument = this.equipmentListService.listOfSpecificationStandards[index];
    const selectedDocumentSplitName = this.equipmentListService.listOfSpecificationStandards[index].specificationTitle.split('.');
    const oldName = this.equipmentListService.listOfSpecificationStandards[index].specificationTitle;
    selectedDocumentSplitName[0] = form.value.newSpecificationTitle;
    newEditedDocument.specificationTitle = selectedDocumentSplitName.join('.');

    this.equipmentListService.arrayOfCreatedEquipmentKeys.forEach((element) => {
      if (element.specificationTitle === oldName) {
        element.specificationTitle = selectedDocumentSplitName.join('.');
      }
    });
  }

  /* verifyDocument() {
    this.equipmentListService.nodes.listOfSpecificationStandards.filter
  } */

  ngOnDestroy() {
    this.nameOfSelectedEquipmentSubscription.unsubscribe();
  }


}
