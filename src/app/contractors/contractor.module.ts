import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ContractorRoutingModule } from './contractor.routing';
import { ContractorComponent } from './contractor';
import { containers } from './containers';
import { SuiModule } from 'ng2-semantic-ui';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
      ContractorComponent,
      containers(),
    ],

    imports: [
      CommonModule,
      ContractorRoutingModule,
      SharedModule,
      SuiModule,
      FormsModule
    ],

    providers: [],
    bootstrap: [ContractorComponent]
  })
  export class ContractorModule { }
