
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MsNgxProgressBarComponent } from './ms-ngx-progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    MsNgxProgressBarComponent
  ],
  imports: [
    MatProgressBarModule,
  ],
  exports: [
    MsNgxProgressBarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MsNgxProgressBarModule { }
