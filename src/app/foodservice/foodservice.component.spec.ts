import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodserviceComponent } from './foodservice.component';

describe('FoodserviceComponent', () => {
  let component: FoodserviceComponent;
  let fixture: ComponentFixture<FoodserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
