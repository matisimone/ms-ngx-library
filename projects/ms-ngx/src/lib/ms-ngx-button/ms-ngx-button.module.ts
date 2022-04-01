import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsNgxButtonComponent } from './ms-ngx-button.component';


@NgModule({
  declarations: [
    MsNgxButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MsNgxButtonComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MsNgxButtonModule { }
