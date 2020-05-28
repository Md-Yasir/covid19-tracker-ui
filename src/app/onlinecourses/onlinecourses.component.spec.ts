import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinecoursesComponent } from './onlinecourses.component';

describe('OnlinecoursesComponent', () => {
  let component: OnlinecoursesComponent;
  let fixture: ComponentFixture<OnlinecoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinecoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinecoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
