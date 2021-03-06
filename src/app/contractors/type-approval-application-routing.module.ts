import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetStartedComponent } from './containers/type-approval-application/get-started/get-started.component';
import { TypeApprovalApplicationComponent } from './containers/type-approval-application/type-approval-application/type-approval-application.component';
import { SelectCertificateHolderComponent } from './containers/type-approval-application/select-certificate-holder/select-certificate-holder.component';
import { AddEquipmentComponent } from './containers/type-approval-application/add-equipment/add-equipment.component';
import { UploadEquipmentDocumentComponent } from './containers/type-approval-application/upload-equipment-document/upload-equipment-document.component';
import { AddSpecificationStandardsComponent } from './containers/type-approval-application/add-specification-standards/add-specification-standards.component';
import { ReviewAndSubmitComponent } from './containers/type-approval-application/review-and-submit/review-and-submit.component';
import { ApplicationCompeletedComponent } from './containers/type-approval-application/application-compeleted/application-compeleted.component';


const routes: Routes = [
  { path: '', component: TypeApprovalApplicationComponent, children: [
    { path: 'select-certificate-holder', component: SelectCertificateHolderComponent },
    { path: 'add-equipment', component: AddEquipmentComponent },
    { path: 'upload-equipment-document', component: UploadEquipmentDocumentComponent},
    { path: 'add-specification-standards', component: AddSpecificationStandardsComponent },
    { path: 'review-and-submit', component: ReviewAndSubmitComponent }
  ]
},
    { path: 'get-started', component: GetStartedComponent },
    { path: 'application-completed', component: ApplicationCompeletedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeApprovalApplicationRoutingModule { }
