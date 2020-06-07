import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileRestaurantComponent } from './edit-profile-restaurant.component';

describe('EditProfileRestaurantComponent', () => {
  let component: EditProfileRestaurantComponent;
  let fixture: ComponentFixture<EditProfileRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
