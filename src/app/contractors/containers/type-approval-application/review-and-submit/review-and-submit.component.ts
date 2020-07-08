import { Component, OnInit } from '@angular/core';
import { EquipmentListService } from 'src/app/core/service/equipment-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-and-submit',
  templateUrl: './review-and-submit.component.html',
  styleUrls: ['./review-and-submit.component.scss']
})
export class ReviewAndSubmitComponent implements OnInit {
  selectedNode;
  showSubmissionModal;

  constructor(public equipmentListService: EquipmentListService, private router: Router) { }

  ngOnInit(): void {
  }

  hideSubmissionModal() {
    if (this.showSubmissionModal) {
      this.showSubmissionModal = !this.showSubmissionModal;
    }
  }

  // Select a single equipment
  selectSingleEquipment(equipmentKey: number) {
    const index = this.equipmentListService.arrayOfCreatedEquipmentKeys.findIndex(equipment => {
      return equipment.key === equipmentKey;
    });
    this.selectedNode = this.equipmentListService.arrayOfCreatedEquipmentKeys[index];
  }

  submit() {
    this.hideSubmissionModal();
    this.router.navigate(['/contractor/home/type-approval-application/application-completed']);
  }

  // Read uploaded file document
  readFile(file) {
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsText(file, 'UTF-8');
      fileReader.onload = (evt) => {
      console.log(evt.target.result);
    };
    }
  }

}
