import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from 'src/app/core/service/modal.service';
import {SuiModal, ComponentModalConfig, ModalSize} from 'ng2-semantic-ui';

interface IConfirmModalContext {
  title: string;
  question: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('modalId') modalId;

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
  }

  close() {
    this.modalService.hide();
  }

}
