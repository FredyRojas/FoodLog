import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversAvailableComponent } from './drivers-available.component';

describe('DriversAvailableComponent', () => {
  let component: DriversAvailableComponent;
  let fixture: ComponentFixture<DriversAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriversAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
