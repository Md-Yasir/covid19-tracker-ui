import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdocappointmentsComponent } from './viewdocappointments.component';

describe('ViewdocappointmentsComponent', () => {
  let component: ViewdocappointmentsComponent;
  let fixture: ComponentFixture<ViewdocappointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdocappointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdocappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
