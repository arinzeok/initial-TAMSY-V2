import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path: 'contractor',
  loadChildren: () => import('./contractors/contractor.module').then(m => m.ContractorModule)
},
{
  path: '',
  redirectTo: 'contractor',
  pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
