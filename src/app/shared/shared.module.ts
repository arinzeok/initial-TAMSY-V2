import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { BlueButtonComponent } from './blue-button/blue-button.component';



@NgModule({
  declarations: [NavigationComponent, BlueButtonComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NavigationComponent,
    BlueButtonComponent
  ]
})
export class SharedModule { }
