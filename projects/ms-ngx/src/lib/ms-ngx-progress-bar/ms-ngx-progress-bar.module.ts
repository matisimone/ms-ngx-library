
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MsNgxProgressBarComponent } from './ms-ngx-progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    MsNgxProgressBarComponent
  ],
  imports: [
    MatProgressBarModule,
    MatButtonModule
  ],
  exports: [
    MsNgxProgressBarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MsNgxProgressBarModule { }
