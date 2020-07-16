import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemomapComponent } from './demomap.component';

describe('DemomapComponent', () => {
  let component: DemomapComponent;
  let fixture: ComponentFixture<DemomapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemomapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemomapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
