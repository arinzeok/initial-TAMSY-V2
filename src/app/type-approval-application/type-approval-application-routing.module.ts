import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetStartedComponent } from './get-started/get-started.component';
import { TypeApprovalApplicationComponent } from './type-approval-application/type-approval-application.component';
import { SelectCertificateHolderComponent } from './select-certificate-holder/select-certificate-holder.component';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';


const routes: Routes = [
  { path: '', component: TypeApprovalApplicationComponent, children: [
    { path: 'select-certificate-holder', component: SelectCertificateHolderComponent },
    { path: 'add-equipment', component: AddEquipmentComponent }
  ]
},
    { path: 'get-started', component: GetStartedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeApprovalApplicationRoutingModule { }
