import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MsNgxButtonComponent } from './ms-ngx-button.component';

describe('MsNgxButtonComponent', () => {
  let component: MsNgxButtonComponent;
  let fixture: ComponentFixture<MsNgxButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsNgxButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsNgxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
