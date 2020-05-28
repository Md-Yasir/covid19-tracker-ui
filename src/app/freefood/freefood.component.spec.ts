import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreefoodComponent } from './freefood.component';

describe('FreefoodComponent', () => {
  let component: FreefoodComponent;
  let fixture: ComponentFixture<FreefoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreefoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreefoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
