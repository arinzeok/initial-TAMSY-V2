import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { BlueButtonComponent } from './blue-button/blue-button.component';



@NgModule({
  declarations: [NavigationComponent, BlueButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationComponent,
    BlueButtonComponent
  ]
})
export class SharedModule { }
