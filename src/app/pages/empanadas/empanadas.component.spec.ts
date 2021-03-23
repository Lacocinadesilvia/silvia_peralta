import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpanadasComponent } from './empanadas.component';

describe('EmpanadasComponent', () => {
  let component: EmpanadasComponent;
  let fixture: ComponentFixture<EmpanadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpanadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpanadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
