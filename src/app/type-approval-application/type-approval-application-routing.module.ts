import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetStartedComponent } from './get-started/get-started.component';


const routes: Routes = [
  { path: '', children: [
    {path: '', component: GetStartedComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeApprovalApplicationRoutingModule { }
