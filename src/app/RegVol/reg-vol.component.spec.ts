import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegVolComponent } from './reg-vol.component';

describe('RegVolComponent', () => {
  let component: RegVolComponent;
  let fixture: ComponentFixture<RegVolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegVolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegVolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
