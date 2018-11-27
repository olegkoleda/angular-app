import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesControlsComponent } from './courses-controls.component';

describe('CoursesControlsComponent', () => {
  let component: CoursesControlsComponent;
  let fixture: ComponentFixture<CoursesControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
