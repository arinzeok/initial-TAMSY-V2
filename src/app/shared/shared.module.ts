import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { BlueButtonComponent } from './blue-button/blue-button.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [NavigationComponent, BlueButtonComponent, ModalComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NavigationComponent,
    BlueButtonComponent,
    ModalComponent
  ]
})
export class SharedModule { }
