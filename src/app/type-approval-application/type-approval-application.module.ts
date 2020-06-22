import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeApprovalApplicationRoutingModule } from './type-approval-application-routing.module';
import { GetStartedComponent } from './get-started/get-started.component';
import { SharedModule } from '../shared/shared.module';
import { TypeApprovalApplicationComponent } from './type-approval-application/type-approval-application.component';
import { SelectCertificateHolderComponent } from './select-certificate-holder/select-certificate-holder.component';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [GetStartedComponent, TypeApprovalApplicationComponent, SelectCertificateHolderComponent, AddEquipmentComponent],
  imports: [
    CommonModule,
    TypeApprovalApplicationRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class TypeApprovalApplicationModule { }
