import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsNgxProgressBarComponent } from './ms-ngx-progress-bar.component';

describe('MsNgxProgressBarComponent', () => {
  let component: MsNgxProgressBarComponent;
  let fixture: ComponentFixture<MsNgxProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsNgxProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsNgxProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
