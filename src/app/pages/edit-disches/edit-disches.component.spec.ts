import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDischesComponent } from './edit-disches.component';

describe('EditDischesComponent', () => {
  let component: EditDischesComponent;
  let fixture: ComponentFixture<EditDischesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDischesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDischesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
