
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MsNgxMatButtonComponent } from './ms-ngx-mat-button.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    MsNgxMatButtonComponent
  ],
  imports: [
    MatButtonModule
  ],
  exports: [
    MsNgxMatButtonComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MsNgxMatButtonModule { }
