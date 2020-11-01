import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationDataEventBindingComponent } from './interpolation-data-event-binding.component';

describe('InterpolationDataEventBindingComponent', () => {
  let component: InterpolationDataEventBindingComponent;
  let fixture: ComponentFixture<InterpolationDataEventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolationDataEventBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolationDataEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
