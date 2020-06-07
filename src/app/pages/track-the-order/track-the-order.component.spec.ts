import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackTheOrderComponent } from './track-the-order.component';

describe('TrackTheOrderComponent', () => {
  let component: TrackTheOrderComponent;
  let fixture: ComponentFixture<TrackTheOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackTheOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackTheOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
