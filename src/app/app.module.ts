import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuiModule } from 'ng2-semantic-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { ContractorModule } from './contractors/contractor.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SuiModule,
    ContractorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
