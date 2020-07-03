import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationsComponent } from './containers/applications/applications.component';
import { ContractorComponent } from './contractor';
import { HomeComponent } from './containers/home/home.component';
import { GetStartedComponent } from './containers/type-approval-application/get-started/get-started.component';

const routes: Routes = [
  {
    path: '',
    component: ContractorComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        children: [
          {path: 'applications', component: ApplicationsComponent}
        ]
      },
      {
        path: 'home/type-approval/get-started',
        component: GetStartedComponent
      },
    {
      path: 'home/type-approval-application',
      loadChildren: () => import('./type-approval-application.module').then(m => m.TypeApprovalApplicationModule)
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContractorRoutingModule {

}
