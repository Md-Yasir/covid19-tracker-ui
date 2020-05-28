import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvolComponent } from './viewvol.component';

describe('ViewvolComponent', () => {
  let component: ViewvolComponent;
  let fixture: ComponentFixture<ViewvolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewvolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewvolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
