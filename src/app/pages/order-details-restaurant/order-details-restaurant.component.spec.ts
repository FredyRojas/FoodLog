import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsRestaurantComponent } from './order-details-restaurant.component';

describe('OrderDetailsRestaurantComponent', () => {
  let component: OrderDetailsRestaurantComponent;
  let fixture: ComponentFixture<OrderDetailsRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailsRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
