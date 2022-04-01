import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsNgxMatButtonComponent } from './ms-ngx-mat-button.component';

describe('MsNgxMatButtonComponent', () => {
  let component: MsNgxMatButtonComponent;
  let fixture: ComponentFixture<MsNgxMatButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsNgxMatButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsNgxMatButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
