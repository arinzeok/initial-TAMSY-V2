import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ApplicationsComponent } from './applications/applications.component';
import { SharedModule } from '../shared/shared.module';
import { SingleApplicationComponent } from './applications/single-application/single-application.component';
import { SuiModule } from 'ng2-semantic-ui';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, ApplicationsComponent, SingleApplicationComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    SuiModule,
    FormsModule
  ]
})
export class HomeModule { }
