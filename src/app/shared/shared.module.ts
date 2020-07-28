import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { BlueButtonComponent } from './blue-button/blue-button.component';
import { ModalComponent } from './modal/modal.component';
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  declarations: [
    NavigationComponent,
    BlueButtonComponent,
    ModalComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NavigationComponent,
    BlueButtonComponent,
    ModalComponent,
    FooterComponent
  ]
})
export class SharedModule { }
