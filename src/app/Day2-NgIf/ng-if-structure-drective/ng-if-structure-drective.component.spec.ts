import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfStructureDrectiveComponent } from './ng-if-structure-drective.component';

describe('NgIfStructureDrectiveComponent', () => {
  let component: NgIfStructureDrectiveComponent;
  let fixture: ComponentFixture<NgIfStructureDrectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfStructureDrectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfStructureDrectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
