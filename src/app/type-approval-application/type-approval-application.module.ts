import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeApprovalApplicationRoutingModule } from './type-approval-application-routing.module';
import { GetStartedComponent } from './get-started/get-started.component';


@NgModule({
  declarations: [GetStartedComponent],
  imports: [
    CommonModule,
    TypeApprovalApplicationRoutingModule
  ]
})
export class TypeApprovalApplicationModule { }
