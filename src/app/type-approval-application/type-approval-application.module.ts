import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
// import { PriDragDropModule } from '@angular/cdk';
import { PriDragDropModule } from 'pri-ng-dragdrop';

import { TypeApprovalApplicationRoutingModule } from './type-approval-application-routing.module';
import { GetStartedComponent } from './get-started/get-started.component';
import { SharedModule } from '../shared/shared.module';
import { TypeApprovalApplicationComponent } from './type-approval-application/type-approval-application.component';
import { SelectCertificateHolderComponent } from './select-certificate-holder/select-certificate-holder.component';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';
import { FormsModule } from '@angular/forms';
import { DndModule } from 'ngx-drag-drop';
import { SuiModule } from 'ng2-semantic-ui';

@NgModule({
  declarations: [GetStartedComponent, TypeApprovalApplicationComponent, SelectCertificateHolderComponent, AddEquipmentComponent],
  imports: [
    CommonModule,
    TypeApprovalApplicationRoutingModule,
    SharedModule,
    FormsModule,
    DragDropModule,
    PriDragDropModule,
    DndModule,
    SuiModule
  ]
})
export class TypeApprovalApplicationModule { }
