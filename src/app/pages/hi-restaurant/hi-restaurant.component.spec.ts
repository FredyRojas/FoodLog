import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiRestaurantComponent } from './hi-restaurant.component';

describe('HiRestaurantComponent', () => {
  let component: HiRestaurantComponent;
  let fixture: ComponentFixture<HiRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
