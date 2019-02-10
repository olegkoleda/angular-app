import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPageComponent } from './add-page.component';
import { FormsModule } from '@angular/forms';
import { CourseDurationPipe } from '../pipes/course-duration.pipe';

describe('AddPageComponent', () => {
  let component: AddPageComponent;
  let fixture: ComponentFixture<AddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPageComponent, CourseDurationPipe ],
      imports: [ FormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
