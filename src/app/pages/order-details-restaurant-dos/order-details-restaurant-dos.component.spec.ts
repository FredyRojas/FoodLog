import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsRestaurantDosComponent } from './order-details-restaurant-dos.component';

describe('OrderDetailsRestaurantDosComponent', () => {
  let component: OrderDetailsRestaurantDosComponent;
  let fixture: ComponentFixture<OrderDetailsRestaurantDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailsRestaurantDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsRestaurantDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
