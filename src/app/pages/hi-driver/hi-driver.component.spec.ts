import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiDriverComponent } from './hi-driver.component';

describe('HiDriverComponent', () => {
  let component: HiDriverComponent;
  let fixture: ComponentFixture<HiDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
