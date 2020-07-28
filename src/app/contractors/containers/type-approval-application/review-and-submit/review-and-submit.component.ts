import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { EquipmentListService } from 'src/app/core/service/equipment-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-and-submit',
  templateUrl: './review-and-submit.component.html',
  styleUrls: ['./review-and-submit.component.scss'],
})
export class ReviewAndSubmitComponent implements OnInit, OnDestroy {
  @ViewChild('page') page: ElementRef<any>;

  selectedNode;
  showSubmissionModal;
  documentPreview: string | ArrayBuffer;
  previewModal: boolean;

  constructor(
    public equipmentListService: EquipmentListService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  hideSubmissionModal() {
    if (this.showSubmissionModal) {
      this.showSubmissionModal = !this.showSubmissionModal;
    }
  }

  // Select a single equipment
  selectSingleEquipment(equipmentKey: number) {
    const index = this.equipmentListService.arrayOfCreatedEquipmentKeys.findIndex(
      (equipment) => {
        return equipment.key === equipmentKey;
      }
    );
    this.selectedNode = this.equipmentListService.arrayOfCreatedEquipmentKeys[
      index
    ];
  }

  submit() {
    setTimeout((() => {
      this.router.navigate([
        '/contractor/home/type-approval-application/application-completed',
      ]);
    }), 2000);
  }

  // Read uploaded file document
  readFile(file) {
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsText(file.file, 'UTF-8');
      fileReader.onload = (evt) => {
        this.documentPreview = evt.target.result;
        const objUrl = URL.createObjectURL(file.file);
        this.page.nativeElement.setAttribute('src', objUrl);
        // this.page.src =  objUrl;
      };
      fileReader.onerror = (evt) => {
        this.page.nativeElement.innerHTML = 'Error loading document';
      };
    }

    this.previewModal = true;
  }

  hidePreviewModal() {
    if (this.previewModal) {
      this.previewModal = !this.previewModal;
      this.documentPreview = '';
    }
  }

  ngOnDestroy() {
    this.hideSubmissionModal();
  }
}
